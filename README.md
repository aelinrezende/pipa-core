SDK de features e utilitários da Pipa para construir extensões do [Pi](https://github.com/earendil-works/pi-coding-agent) customizadas.

Inclui: features prontas (`docs`, `task`, `teammate`, `todo`, `backlog`, `permission`), API da Pipa (`buildPipaApi`, `applyFeatures`), decorator `@PipaEvent` e **eventos de domínio tipados** (`DomainEventMap`).

## Instalação

```bash
npm install @aelinrezende/pipa-core
```

## Quickstart

Registre suas features no `pi` (ExtensionAPI) com `applyFeatures`:

```ts
import { applyFeatures, DocsFeature } from '@aelinrezende/pipa-core';
import { AuditFeature } from './audit.feature';

applyFeatures(pi, [DocsFeature, AuditFeature]);
```

Cada feature estende `PipaBaseFeature`:

```ts
import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '@aelinrezende/pipa-core';

export class AuditFeature extends PipaBaseFeature {
  initialize(pi: ExtensionAPI): void {
    pi.registerTool({ name: 'audit' /* ... */ });
  }
}
```

## Eventos de domínio

Eventos de domínio são fatos que o código pode observar (ex.: "documento criado") — diferente dos eventos fixos do agente (`session_start`, `tool_call`, ...).

- **Roteamento**: eventos do agente → `pi.on`; eventos de domínio → `pi.events` (EventBus nativo da lib).
- **Semântica**: reação, não interceptação — o handler roda **depois** do fato consumado, com `(payload, pipa)`.
- **Tipagem**: o payload é derivado de `DomainEventMap` (compile-time); handler com erro não derruba a tool (fire-and-forget com try/catch).

### Ouvindo eventos

```ts
import { PipaBaseFeature, PipaEvent, PipaPayload, PipaApi } from '@aelinrezende/pipa-core';

export class ListenerFeature extends PipaBaseFeature {
  @PipaEvent('doc_created')
  onDocCreated(item: PipaPayload<'doc_created'>, pipa: PipaApi): void {
    console.log(`[listener] doc criado: ${item.code} - ${item.title}`);
  }
}
```

O `this` dentro do handler é a instância da feature. Registro: basta incluir a feature no `applyFeatures`.

### Emitindo eventos

```ts
// Em qualquer lugar com acesso à PipaApi:
this.pipa.events.emit('doc_created', item);
```

### DomainEventMap (eventos nativos)

| Evento          | Payload         | Dispara em                                            |
| --------------- | --------------- | ----------------------------------------------------- |
| `doc_created`   | `DocItem`       | `docs` → action `instantiate`                         |
| `doc_updated`   | `DocItem`       | `docs` → actions `update-frontmatter` / `update-body` |
| `doc_removed`   | `DocItem`       | `docs` → action `remove`                              |
| `doc_published` | `{ path, url }` | `docs` → action `publish`                             |

Leituras (`list`, `select`) **não** emitem evento.

### Estendendo o mapa (novos domínios)

`DomainEventMap` é uma `interface` — estenda via declaration merging, sem alterar o core:

```ts
// features/task/task.types.ts
declare module '@aelinrezende/pipa-core' {
  interface DomainEventMap {
    'task_created': TaskItem;
  }
}

// no hub da feature (produtor):
this.pipa.events.emit('task_created', task);

// consumindo:
@PipaEvent('task_created')
onTaskCreated(task: PipaPayload<'task_created'>, pipa: PipaApi): void { /* ... */ }
```

## Exports principais

- `applyFeatures(pi, features)` — registra features e handlers (agente + domínio).
- `buildPipaApi(pi, context)` / `pipa` — API da Pipa (inclui `events: EventBus`).
- `PipaEvent(event)` — decorator de handler; aceita `PiEvent` ou `DomainEventName`.
- `PipaBaseFeature` — base para features (`pi`, `pipa`, `initialize?`).
- `DomainEventMap`, `DomainEventName`, `PipaPayload<E>`, `DomainEventHandler<E>` — tipos de eventos de domínio.
- Features e hubs: `DocsFeature`, `TaskFeature`, `TeammateFeature`, `TodoFeature`, `BacklogFeature`, `PermissionFeature`, `ProviderFeature`, `OnboardingFeature`.

## Referências

Detalhes do design e da implementação dos eventos de domínio: `.artifacts/eventos-dominio/` (`DESIGN.md`, `PLANO.md`, relatórios).
