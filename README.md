# pipa-core

[![npm version](https://img.shields.io/npm/v/@aelinrezende/pipa-core.svg)](https://www.npmjs.com/package/@aelinrezende/pipa-core)
[![npm downloads](https://img.shields.io/npm/dm/@aelinrezende/pipa-core.svg)](https://www.npmjs.com/package/@aelinrezende/pipa-core)
[![license](https://img.shields.io/npm/l/@aelinrezende/pipa-core.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-types%20included-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Pi Extension](https://img.shields.io/badge/Pi%20Coding%20Agent-extension-000000)](https://github.com/aelinrezende/pipa)

SDK for building Pi extensions with reusable features, a session-aware execution API, and typed domain events.

It includes `applyFeatures`, `PipaBaseFeature`, `PipaEvent`, `PipaApi`, `PipaSessionIdentity`, repository-backed feature implementations, dependency injection for internal feature composition, and `DomainEventMap`.

## Installation

The package is published on npm:

```bash
npm install @aelinrezende/pipa-core
```

It also works with:

```bash
bun add @aelinrezende/pipa-core
pnpm add @aelinrezende/pipa-core
```

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

`applyFeatures` registers the feature runtime on `session_start`. At that point, each feature and its mixins are instantiated with the current `PipaApi`, `initialize()` is executed, dependencies returned by `initialize()` are registered, and decorated handlers are attached.

The feature's `pipa` API is session-aware. When a decorated handler runs, use its `PipaApi` argument or `this.pipa` to access the current context and identity.

## Included features

### `DocsFeature` — tool `docs`

Knowledge base of the project. Stores documents as markdown in `.pi/docs/` and exposes a single `docs` tool that covers the full lifecycle:

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

Operational tasks. Unlike the backlog, tasks are ephemeral: they exist to hand work to teammates during a run, not to track the project across sessions. They are persisted through `TaskRepository` and loaded by the repository when needed.

The tool supports `instantiate`, `get`, `setup`, `update`, `list`, `list-by-squad`, `squad-status`, `claim`, `complete`, `reopen`, `pause`, `resume`, and `remove`. Tasks carry a `squad`, a `parentTaskId`, and typed dependencies: `hard` (blocks execution outright) and `soft` (informational warning).

The feature includes a guard that blocks modifying tools while the agent has no claimed task, reminders for available work, and a TUI panel. It emits `task_created`, `task_claimed`, `task_updated`, `task_completed`, and `task_removed`.

### `TeammateFeature` — tool `teammates`

Lifecycle and communication for subagents in the same workspace. It loads teammate definitions from the bundled markdown files and from `.pi/teammates/*.md`, merging global rules from `SYSTEM_AGENTS.md` when present.

The tool supports `instantiate`, `list`, `online`, `chat` (synchronous messaging), `send-inbox` (deferred message for a busy teammate), `read-inbox`, and `dismiss`. It emits `teammate_created` and `teammate_removed`.

Besides the tool, it handles execution context, shutdown context, observability, and the TUI panel. It tracks idle and busy state per session, which model cycling uses to decide rotation.

### `TodoFeature` — tool `todo`

Operational checklist for the agent itself. It is deliberately not a project artifact: each session has its own `TodoRepository`, stored under a path derived from the current session identity.

For the main session, the directory is derived from `session.id`. For a subagent, the directory includes both `parentSessionId` and `session.id`.

The feature mounts its session-local state on `before_agent_start`, after the session identity is available. It supports `instantiate`, `update`, `remove`, `list`, and `clear`, and emits `todo_created`, `todo_updated`, `todo_removed`, and `todo_cleared`.

### `BacklogFeature` — tool `backlog`

Persistent project backlog, stored as JSON under `BACKLOG_BASE_DIR`. This is where long-lived work lives: epics, stories, tasks, and bugfixes, each with a code, priority, status, tags, and domain.

Supports `instantiate`, `list`, `select`, `update-frontmatter`, `update-body`, `update-metadata`, and `remove`. It emits `backlog_created`, `backlog_updated`, and `backlog_removed`.

The feature includes a guard that blocks `write`, `edit`, `read`, and `find` against `backlog.json`, forcing mutations through the `backlog` tool so items remain schema-consistent and events continue to fire.

### `PermissionFeature` — no tool

Tool-call guard consumed on the `tool_call` event, split into two hooks:

- **Terminal guard** — rejects dangerous bash commands through `isBlockedCommand` and an additional project-level command policy (`validateCommandPolicy`). For the main agent, `edit` and `write` require explicit UI confirmation, except during onboarding.
- **Custom tool guard** — rejects tools restricted for the main agent and terminates calls from a teammate that is already being dismissed (`isStopping`), so a stopped subagent cannot keep acting.

The list of registered tool names is maintained by the feature composition instead of relying on a hardcoded list.

### `OnboardingFeature` — no tool

Bootstrap for the framework. When `.pi/PROFILE.md` does not exist, it injects the bundled `onboarding.md` prompt and guides the initial setup of the main agent profile. While onboarding is active, the main-agent write confirmation is suppressed.

### `ReminderCleanerFeature` — no tool

Context hygiene. Removes nudges and notifications that already served their purpose from the LLM context, regardless of which feature emitted them: task, teammates, docs, backlog, or another feature.

### `ToolResultCompactorFeature` — no tool

Context hygiene. Replaces the content of old and bulky tool results with a stub pointing at the persisted file path and runs periodic micro-compactions without user intervention.

`ReminderCleanerFeature` and `ToolResultCompactorFeature` are enabled by the Pipa extension for context hygiene. They are not included in the public feature list exported by `scripts/pipa-core.index.ts`.

## Events

`@PipaEvent` accepts Pi agent events and Pipa domain events. Agent events are registered on `pi.on`; domain events are observed on `pi.events`. Handlers receive the event payload and the `PipaApi`:

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

Domain handlers react to facts that already happened. To emit a domain event, use the API available in the handler or feature:

```ts
this.pipa.events.emit('doc_created', item);
```

### DomainEventMap

| Domain   | Event              | Payload                        | Source action                                          |
| -------- | ------------------ | ------------------------------ | ------------------------------------------------------ |
| Docs     | `doc_created`      | `DocItem`                      | `instantiate`                                          |
| Docs     | `doc_updated`      | `DocItem`                      | `update-frontmatter`, `update-body`                    |
| Docs     | `doc_removed`      | `DocItem`                      | `remove`                                               |
| Docs     | `doc_published`    | `{ path, url }`                | `publish`                                              |
| Backlog  | `backlog_created`  | `BacklogItem`                  | `instantiate`                                          |
| Backlog  | `backlog_updated`  | `BacklogItem`                  | `update-frontmatter`, `update-body`, `update-metadata` |
| Backlog  | `backlog_removed`  | `BacklogItem`                  | `remove`                                               |
| Task     | `task_created`     | `Task`                         | `instantiate`                                          |
| Task     | `task_claimed`     | `Task`                         | `claim`                                                |
| Task     | `task_updated`     | `Task`                         | `setup`, `update`, `pause`, `resume`                   |
| Task     | `task_completed`   | `Task`                         | `complete`                                             |
| Task     | `task_removed`     | `Task`                         | `remove`                                               |
| Todo     | `todo_created`     | `TodoItem`                     | `instantiate`                                          |
| Todo     | `todo_updated`     | `TodoItem`                     | `update`                                               |
| Todo     | `todo_removed`     | `TodoItem`                     | `remove`                                               |
| Todo     | `todo_cleared`     | `{ sessionId }`                | `clear`                                                |
| Teammate | `teammate_created` | `TeammateEventPayload`         | `instantiate`                                          |
| Teammate | `teammate_removed` | `{ dismissed, count, reason }` | `dismiss`                                              |

Read operations do not emit domain events. A `task_updated` event can also be emitted when a change in a child task synchronizes the status of its parent.

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

## Feature repositories and dependency injection

Each data-owning feature has a repository responsible for CRUD, loading, persistence, and feature-specific queries. Current repositories include:

- `TaskRepository`.
- `TeammateRepository`.
- `BacklogRepository`.
- `DocsRepository`.
- `TodoRepository`, which is local to each session and is not part of the shared feature composition.

Business rules remain in the owning feature or repository-specific domain code. Features no longer read another feature's state through static state facades or direct feature imports.

### Repository contract

`PipaRepository<T>` provides the common operations:

- `all()` — returns every entity.
- `findBy(predicate)` — returns entities matching a predicate.
- `findOneBy(predicate)` — returns the first matching entity or `undefined`.
- `getOneById(id)` — returns an entity or `undefined`.
- `getOneByIdOrFail(id)` — returns an entity or throws when it does not exist.
- `add(item)` — adds and persists an entity.
- `update(id, patch)` — applies a shallow patch and persists it.
- `delete(id)` — removes and persists an entity.

Feature repositories extend this base with their own queries and rules. For example, `TaskRepository` contains task eligibility, dependency, active-task, squad, and parent-status logic. `DocsRepository` and `BacklogRepository` contain their own `listBy` implementations.

### Feature dependency declarations

A feature's `initialize()` may return a nested dependency object:

```ts
type Dependencies = {
  [dependency: string]: {
    retrieve: () => unknown;
    dependencies?: Dependencies;
  };
};
```

Dependencies are visited from the leaves upward. Nested providers are retrieved and registered before the provider that contains them. Registration is idempotent: if a token already exists, the first registered value is retained.

The internal Pipa implementation uses decorators for constructor injection:

```ts
class ExampleFeature extends PipaBaseFeature {
  initialize() {
    return {
      example: {
        retrieve: () => createExampleRepository(this.pipa),
        dependencies: {
          teammate: {
            retrieve: () => createTeammateRepository(this.pipa)
          }
        }
      }
    };
  }
}
```

`@InjectParam` records a constructor parameter token, while `@InjectRepository` is the repository-specific decorator. `withDependenciesResolved` reads the recorded metadata, resolves the providers, and creates the class instance.

These are implementation details used by the bundled Pipa features. The public entrypoint does not expose a global `Repositories` registry or a public `createRepository` factory. Consumers should compose exported features through `applyFeatures` rather than importing internal repository files.

### Identity belongs to `PipaApi`

Session identity is not resolved through a repository. `PipaApi.session` exposes the current identity:

```ts
interface PipaSessionIdentity {
  id: string;
  role: 'main' | 'subagent';
  name: string;
  parentSessionId?: string;
  depth: number;
  isStopping: boolean;
}
```

`session` is a getter, so role and lifecycle state are read fresh instead of being captured once when the API is built.

### Notifications and gates

- **Notification:** use domain events through `pi.events`. These are fire-and-forget notifications.
- **Gate:** use `pi.on('tool_call')` and return `{ block: true, reason }` when a tool call must be denied.

Domain events cannot veto a tool call.

## Session-scoped data

Todo data belongs to one Pi session. Its repository is created per session and persists to `todo.json` under a directory derived from the session identity:

- Main session: `~/.pi/sessions/<sessionId>/todo.json`.
- Subagent session: `~/.pi/sessions/<parentSessionId>/<sessionId>/todo.json`.

`TodoFeature` mounts this repository during `before_agent_start`, when `PipaApi.session` is available.

## Main exports

The public entrypoint includes:

- Features: `BacklogFeature`, `DocsFeature`, `OnboardingFeature`, `PermissionFeature`, `TaskFeature`, `TeammateFeature`, `TodoFeature`, `PipaBaseFeature`, and the `PipaBaseFeatureConstructor` type.
- Core API: `applyFeatures`, `buildPipaApi`, `pipa`, `config`, `PipaEvent`, `PipaException`, `PI_EVENTS`, and `PI_EVENTS_SYMBOLS`.
- Hubs and store: `BacklogHub`, `DocsHub`, `TaskHub`, `TeammateHub`, and `PipaStore`.
- Domain event types: `DomainEventMap`, `DomainEventName`, `PipaPayload`, and `DomainEventHandler`.
- Entity types: `BacklogItem`, `DocItem`, `Task`, `Teammate`, `TeammateFrontmatter`, `TeammateInboxMessage`, `TeammateStatus`, `TeammatesStore`, and `TodoItem`.
- Contract types: `PipaApi`, `PipaConfig`, `PipaTasksConfig`, `PipaTeammateConfig`, `Intercom`, `CommandPolicy`, `ToastService`, and `PiEvent`.
- Repository type declarations: `RepositoryKey`, `RepositoryMap`, and `RepositoryOf`.
