import { type PipaApi } from '../../../interfaces';
/**
 * Hook responsável por gerenciar lembretes e notificações
 * relacionados aos afazeres (todos) pendentes.
 */
export declare class TodoReminders {
    /**
     * Orienta o colega a criar uma lista de afazeres caso não tenha nenhuma no início da iteração.
     */
    promptTodoCreation(_: unknown, pipa: PipaApi): void;
    /**
     * Notifica o usuário/agente sobre tarefas pendentes ao final de uma interação.
     */
    notifyPendingTodos(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map