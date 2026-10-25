import { type PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../../teammate/teammate.repository';
/**
 * Hook responsável por gerenciar lembretes e notificações
 * relacionados aos afazeres (todos) pendentes.
 */
export declare class TodoReminders extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly teammateRepo: TeammateRepository;
    private usedToolThisTurn;
    private nudgesWithoutTool;
    private escalated;
    constructor(pipa: PipaApi, teammateRepo: TeammateRepository);
    /**
     * Orienta o colega a criar uma lista de afazeres caso não tenha nenhuma no início da iteração.
     */
    promptTodoCreation(_: unknown, pipa: PipaApi): void;
    /**
     * Marca uso real de ferramenta no turno corrente e libera nova escalação.
     */
    handleToolExecutionStart(): void;
    /**
     * Cada turno começa sem crédito de ferramenta.
     */
    handleTurnStart(): void;
    /**
     * Notifica o usuário/agente sobre tarefas pendentes ao final de uma interação.
     */
    notifyPendingTodos(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map