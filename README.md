# pipa-core

SDK para criar extensões do Pi com features reutilizáveis, API de execução e eventos de domínio tipados.

Inclui `applyFeatures`, `PipaBaseFeature`, `PipaEvent`, `PipaApi` e o mapa `DomainEventMap`.

## Instalação

O pacote está publicado no npm:

```bash
npm install @aelinrezende/pipa-core
```

Também funciona com `bun add @aelinrezende/pipa-core` ou `pnpm add @aelinrezende/pipa-core`.

### Desenvolvimento local

Para buildar o SDK a partir do fonte, clone `github.com/aelinrezende/pipa-source` e rode o build na pasta `.pi`:

```bash
bun run scripts/build-core.ts
```

O build gera `dist-core/`, incluindo `index.js`, declarações TypeScript, `package.json` e uma cópia deste README.

## Uso

Registre no `ExtensionAPI` as features necessárias:

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

Para cada construtor informado, `applyFeatures` cria uma instância e chama `initialize(pi)`, se implementado. Em seguida, registra métodos decorados com `@PipaEvent`. A propriedade `feature.pipa` é construída e atribuída imediatamente antes da execução de cada handler decorado; use o argumento `pipa` do handler quando precisar da API no evento.

## Features incluídas

| Feature | Responsabilidade |
| --- | --- |
| `DocsFeature` | Documentos e publicação da base de conhecimento. |
| `TaskFeature` | Tarefas operacionais e dependências. |
| `TeammateFeature` | Ciclo de vida e comunicação entre colegas. |
| `TodoFeature` | Checklist operacional do agente. |
| `BacklogFeature` | Backlog persistente do projeto. |
| `PermissionFeature` | Guardas de terminal e custom tools. |
| `OnboardingFeature` | Perfil e onboarding do agente principal. |
| `ReminderCleanerFeature` | Remove notificações já consumidas do contexto. |
| `ToolResultCompactorFeature` | Compacta resultados antigos e volumosos de tools. |

As sete primeiras são exports do SDK. As duas últimas são ativadas pela extensão Pipa para higiene de contexto e não são exports do pacote.

## Eventos

`@PipaEvent` aceita eventos do agente e eventos de domínio. Eventos do agente são registrados em `pi.on`; eventos de domínio são observados em `pi.events`. Handlers recebem o payload e a `PipaApi`:

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

Os handlers de domínio são reações ao fato já consumado. Para emitir um evento, use a API disponível no handler ou na feature:

```ts
this.pipa.events.emit('doc_created', item);
```

### DomainEventMap (eventos nativos)

| Domínio | Evento | Payload | Action de origem |
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

Leituras não emitem eventos. Além das actions da tabela, `task_updated` também pode ser emitido quando a alteração de uma subtarefa sincroniza o status da tarefa pai.

### Estendendo o mapa

`DomainEventMap` é uma interface e aceita declaration merging:

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

## Exports principais

- `applyFeatures(pi, features)` — instancia features, chama sua inicialização e registra handlers decorados.
- `buildPipaApi(pi, context)` e `pipa()` — API da Pipa e acesso à instância principal.
- `PipaEvent(event)` — decorator para `PiEvent` ou `DomainEventName`.
- `PipaBaseFeature` — base com `pi`, `pipa` e `initialize?`.
- `DomainEventMap`, `DomainEventName`, `PipaPayload<E>` e `DomainEventHandler<E>` — tipos de eventos de domínio.
- Hubs e estado: `DocsHub`, `DocsState`, `TaskHub`, `TaskState`, `TeammateHub`, `TeammateState` e `PipaStore`.
