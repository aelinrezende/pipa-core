# pipa-core

[![npm version](https://img.shields.io/npm/v/@aelinrezende/pipa-core.svg)](https://www.npmjs.com/package/@aelinrezende/pipa-core)
[![npm downloads](https://img.shields.io/npm/dm/@aelinrezende/pipa-core.svg)](https://www.npmjs.com/package/@aelinrezende/pipa-core)
[![license](https://img.shields.io/npm/l/@aelinrezende/pipa-core.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-types%20included-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Pi Extension](https://img.shields.io/badge/Pi%20Coding%20Agent-extension-000000)](https://github.com/aelinrezende/pipa)

SDK for building Pi extensions with reusable features, an execution API, and typed domain events.

Ships nine features covering docs, tasks, teammates, todo, backlog, permissions, onboarding, and context
hygiene. Includes `applyFeatures`, `PipaBaseFeature`, `PipaEvent`, `PipaApi`, and the `DomainEventMap`.

## Installation

The package is published on npm:

```bash
npm install @aelinrezende/pipa-core
```

It also works with `bun add @aelinrezende/pipa-core` or `pnpm add @aelinrezende/pipa-core`.

### Local development

To build the SDK from source, clone `github.com/aelinrezende/pipa-source` and run the build inside the `.pi` folder:

```bash
bun run scripts/build-core.ts
```

The build generates `dist-core/`, including `index.js`, TypeScript declarations, `package.json`, and a copy of this README.

## Usage

Register the required features on the `ExtensionAPI`:

```ts
import { applyFeatures, DocsFeature, PipaBaseFeature } from '@aelinrezende/pipa-core';
import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';

class AuditFeature extends PipaBaseFeature {
  initialize(pi: ExtensionAPI): void {
    pi.registerTool({ name: 'audit' /* ... */ });
  }
}

await applyFeatures(pi, [DocsFeature, AuditFeature]);
```

For each given constructor, `applyFeatures` creates an instance and calls `initialize(pi)`, if implemented. It then registers methods decorated with `@PipaEvent`. The `feature.pipa` property is built and assigned immediately before each decorated handler runs; use the `pipa` argument of the handler when you need the API inside the event.

## Included features

### `DocsFeature` — tool `docs`

Knowledge base of the project. Stores documents as markdown in `.pi/docs/` and exposes a single `docs` tool
that covers the full lifecycle:

- `instantiate` — creates a document with `title`, `summary`, `tags`, and an optional `parentCode`.
- `list` — lists documents, optionally filtered by `tags` and sorted by `title`, `createdAt`, or `updatedAt`.
- `select` — full-text search across title and body.
- `update-frontmatter` — rewrites a single metadata field (`title`, `tags`, or `parentCode`).
- `update-body` — edits the markdown body with `append`, `replace`, or `set` modes.
- `update-metadata` — merges an arbitrary JSON object into the document metadata.
- `remove` — deletes a document.
- `publish` — exports every document to markdown and builds a static site through `retypeapp`.

Emits `doc_created`, `doc_updated`, `doc_removed`, and `doc_published`.

### `TaskFeature` — tool `task`

Operational tasks. Unlike the backlog, tasks are ephemeral: they exist to hand work to teammates during a run,
not to track the project across sessions. Stored under `TASKS_BASE_DIR` and reloaded on `session_start`.

The tool supports `instantiate`, `get`, `setup`, `update`, `list`, `list-by-squad`, `squad-status`, `claim`,
`complete`, `reopen`, and `remove`. Tasks carry a `squad`, a `parentTaskId`, and typed dependencies:
`hard` (blocks execution outright) and `soft` (informational warning).

Bundles a guard that blocks modifying tools while the agent has no claimed task, plus reminders and a TUI panel.
Emits `task_created`, `task_claimed`, `task_updated`, `task_completed`, and `task_removed`.

### `TeammateFeature` — tool `teammates`

Lifecycle and communication for subagents in the same workspace. Loads teammate definitions from the bundled
markdown files and from `.pi/teammates/*.md`, merging global rules from `SYSTEM_AGENTS.md` when present.

The tool supports `instantiate`, `list`, `online`, `chat` (synchronous messaging), `send-inbox` (deferred message
for a busy teammate), `read-inbox`, and `dismiss`. Emits `teammate_created` and `teammate_removed`.

Besides the tool, it handles execution context, shutdown context, observability, and the TUI panel, and it tracks
idle/busy state per session — which is what model cycling reads to decide rotation.

### `TodoFeature` — tool `todo`

Operational checklist for the agent itself. It is deliberately not a project artifact: each session loads its own
list from the workspace directory on `before_agent_start` (the hook also guarantees the main teammate is already
registered in the hub, since handler order on `session_start` is not guaranteed).

Supports `instantiate`, `update`, `remove`, `list`, and `clear`. Emits `todo_created`, `todo_updated`,
`todo_removed`, and `todo_cleared`.

### `BacklogFeature` — tool `backlog`

Persistent project backlog, stored as JSON under `BACKLOG_BASE_DIR`. This is where long-lived work lives:
epics, stories, tasks, and bugfixes, each with a code, priority, status, tags, and domain.

Supports `instantiate`, `list`, `select`, `update-frontmatter`, `update-body`, `update-metadata`, and `remove`.
Emits `backlog_created`, `backlog_updated`, and `backlog_removed`.

Ships a guard that blocks `write`, `edit`, `read`, and `find` against `backlog.json`, forcing every mutation
through the `backlog` tool so the item stays schema-consistent and events keep firing.

### `PermissionFeature` — no tool

Tool-call guard consumed on the `tool_call` event, split into two hooks:

- **Terminal guard** — rejects dangerous bash commands through `isBlockedCommand` and an additional
  project-level command policy (`validateCommandPolicy`). For the main agent, `edit` and `write` require an
  explicit UI confirmation (skipped during onboarding).
- **Custom tool guard** — rejects tools listed for the main agent in `blockedForMain` (use `*` to block every
  action) and terminates tool calls from a teammate that was already dismissed (`isStopping`), so a stopped
  subagent cannot keep acting.

### `OnboardingFeature` — no tool

Bootstrap for the framework. When `.pi/PROFILE.md` does not exist, it injects the bundled `onboarding.md` prompt
and guides the initial setup of the main agent profile. While onboarding is active the main-agent write
confirmation is suppressed.

### `ReminderCleanerFeature` — no tool

Context hygiene. Removes nudges and notifications that already served their purpose from the LLM context,
regardless of which feature emitted them (task, teammates, docs, backlog). This keeps the context window from
filling with stale instructions.

### `ToolResultCompactorFeature` — no tool

Context hygiene. Replaces the content of old and bulky tool results with a stub pointing at the file path, and
runs periodic micro-compactions without user intervention.

The first seven are SDK exports. `ReminderCleanerFeature` and `ToolResultCompactorFeature` are enabled by the
Pipa extension for context hygiene and are not package exports.

## Events

`@PipaEvent` accepts agent events and domain events. Agent events are registered on `pi.on`; domain events are observed on `pi.events`. Handlers receive the payload and the `PipaApi`:

```ts
import { PipaBaseFeature, PipaEvent } from '@aelinrezende/pipa-core';
import type { PipaApi, PipaPayload } from '@aelinrezende/pipa-core';

class ListenerFeature extends PipaBaseFeature {
  @PipaEvent('doc_created')
  onDocCreated(item: PipaPayload<'doc_created'>, pipa: PipaApi): void {
    console.log(`${item.code}: ${item.title}`);
  }
}
```

Domain handlers are reactions to a fact that already happened. To emit an event, use the API available in the handler or in the feature:

```ts
this.pipa.events.emit('doc_created', item);
```

### DomainEventMap (native events)

| Domain | Event | Payload | Source action |
| --- | --- | --- | --- |
| Docs | `doc_created` | `DocItem` | `instantiate` |
| Docs | `doc_updated` | `DocItem` | `update-frontmatter`, `update-body` |
| Docs | `doc_removed` | `DocItem` | `remove` |
| Docs | `doc_published` | `{ path, url }` | `publish` |
| Backlog | `backlog_created` | `BacklogItem` | `instantiate` |
| Backlog | `backlog_updated` | `BacklogItem` | `update-frontmatter`, `update-body`, `update-metadata` |
| Backlog | `backlog_removed` | `BacklogItem` | `remove` |
| Task | `task_created` | `Task` | `instantiate` |
| Task | `task_claimed` | `Task` | `claim` |
| Task | `task_updated` | `Task` | `setup`, `update` |
| Task | `task_completed` | `Task` | `complete` |
| Task | `task_removed` | `Task` | `remove` |
| Todo | `todo_created` | `TodoItem` | `instantiate` |
| Todo | `todo_updated` | `TodoItem` | `update` |
| Todo | `todo_removed` | `TodoItem` | `remove` |
| Todo | `todo_cleared` | `{ sessionId }` | `clear` |
| Teammate | `teammate_created` | `TeammateEventPayload` | `instantiate` |
| Teammate | `teammate_removed` | `{ dismissed, count, reason }` | `dismiss` |

Read operations do not emit events. Besides the actions in the table, `task_updated` can also be emitted when a subtask change syncs the parent task status.

### Extending the map

`DomainEventMap` is an interface and supports declaration merging:

```ts
import type { PipaPayload } from '@aelinrezende/pipa-core';

declare module '@aelinrezende/pipa-core' {
  interface DomainEventMap {
    audit_recorded: { id: string };
  }
}

this.pipa.events.emit('audit_recorded', { id: 'audit-1' });

@PipaEvent('audit_recorded')
onAuditRecorded(item: PipaPayload<'audit_recorded'>): void {
  console.log(item.id);
}
```

## Main exports

- `applyFeatures(pi, features)` — instantiates features, calls their initialization, and registers decorated handlers.
- `buildPipaApi(pi, context)` and `pipa()` — Pipa API and access to the main instance.
- `PipaEvent(event)` — decorator for `PiEvent` or `DomainEventName`.
- `PipaBaseFeature` — base with `pi`, `pipa`, and `initialize?`.
- `DomainEventMap`, `DomainEventName`, `PipaPayload<E>`, and `DomainEventHandler<E>` — domain event types.
- Hubs and state: `DocsHub`, `DocsState`, `TaskHub`, `TaskState`, `TeammateHub`, `TeammateState`, and `PipaStore`.
