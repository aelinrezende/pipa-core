import type { BacklogItem } from '../features/backlog/backlog.entity';
import type { DocItem } from '../features/docs/docs.entity';
import type { Task } from '../features/task/task.entity';
import type { Teammate } from '../features/teammate/teammate.entity';
import type { TodoItem } from '../features/todo/todo.entity';
import type { PipaApi } from '../interfaces/pipa';
/**
 * Mapa de eventos de domínio → payload.
 *
 * Interface (e não type) para permitir declaration merging: features externas
 * estendem o mapa sem alterar o core — basta declarar a nova chave e emitir
 * no hub correspondente.
 */
export interface DomainEventMap {
    /** Dispara na action `instantiate`; payload = documento persistido. */
    doc_created: DocItem;
    /** Dispara nas actions `update-frontmatter` e `update-body`; payload = documento atualizado. */
    doc_updated: DocItem;
    /** Dispara na action `remove`; payload = documento removido. */
    doc_removed: DocItem;
    /** Dispara na action `publish`; payload = caminho do site e URL servida. */
    doc_published: {
        path: string;
        url: string;
    };
    /** Dispara na action `instantiate`; payload = item persistido. */
    backlog_created: BacklogItem;
    /** Dispara nas actions `update-frontmatter`, `update-body` e `update-metadata`; payload = item atualizado. */
    backlog_updated: BacklogItem;
    /** Dispara na action `remove`; payload = item removido. */
    backlog_removed: BacklogItem;
    /** Dispara na action `instantiate`; payload = tarefa persistida. */
    task_created: Task;
    /** Dispara na action `claim`; payload = tarefa reivindicada. */
    task_claimed: Task;
    /** Dispara nas actions `setup` e `update`; payload = tarefa atualizada. */
    task_updated: Task;
    /** Dispara na action `complete`; payload = tarefa concluída. */
    task_completed: Task;
    /** Dispara na action `remove`; payload = tarefa removida. */
    task_removed: Task;
    /** Dispara na action `instantiate`; payload = item persistido. */
    todo_created: TodoItem;
    /** Dispara na action `update`; payload = item atualizado. */
    todo_updated: TodoItem;
    /** Dispara na action `remove`; payload = item removido. */
    todo_removed: TodoItem;
    /** Dispara na action `clear`; payload = sessão do agente dono da lista esvaziada. */
    todo_cleared: {
        sessionId: string;
    };
    /** Dispara na action `instantiate`; payload = DTO mínimo do teammate criado (sem session/pipa). */
    teammate_created: TeammateEventPayload;
    /** Dispara na action `dismiss`; payload = agente dispensado, quantidade de sessões encerradas e motivo da dispensa. */
    teammate_removed: {
        dismissed: {
            id: string;
            name: string;
        };
        count: number;
        reason: string;
    };
}
/** Payload mínimo serializável dos eventos de teammate — nunca inclui `session`/`pipa`. */
export type TeammateEventPayload = Pick<Teammate, 'sessionId' | 'name' | 'status' | 'role' | 'parentSessionId' | 'depth'>;
/** Nome de um evento de domínio (chave do mapa). */
export type DomainEventName = keyof DomainEventMap;
/** Payload de um evento de domínio, derivado do mapa. */
export type PipaPayload<E extends DomainEventName> = DomainEventMap[E];
/** Handler de evento de domínio: recebe o payload e a instância da PipaApi. */
export type DomainEventHandler<E extends DomainEventName> = (payload: PipaPayload<E>, pipa: PipaApi) => void;
//# sourceMappingURL=events.types.d.ts.map