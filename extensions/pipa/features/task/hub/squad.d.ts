import { PipaApi } from '../../../interfaces';
import { Task, TaskToolSchema } from '../task.entity';
/**
 * Mixin de operações de squad para o TaskManager.
 */
export declare class TaskSquad {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Lista as tarefas principais (épicos) de todos os squads em andamento ou registrados.
     */
    static getActiveSquads(): Task[];
    /**
     * Retorna a primeira task raiz (sem parentTaskId) do squad informado, ou undefined.
     */
    getParentSquadTask(squad?: string): Task | undefined;
    /**
     * Lista tarefas de um squad.
     * @param data Payload único da action 'list-by-squad'.
     * @returns A lista de tarefas do squad.
     */
    listBySquad({ squad }: TaskToolSchema<'list-by-squad'>): Task[];
    /**
     * Status de progresso de um squad.
     * @param data Payload único da action 'squad-status'.
     * @returns Objeto com status do squad.
     */
    squadStatus({ squad }: TaskToolSchema<'squad-status'>): {
        squad: string;
        total: number;
        completed: number;
        inProgress: number;
        pending: number;
        progress: string;
    };
}
//# sourceMappingURL=squad.d.ts.map