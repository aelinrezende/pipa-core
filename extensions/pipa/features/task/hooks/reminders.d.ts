import { type PipaApi } from '../../../interfaces';
import { TeammateSessionIntervalsHost } from '../../teammate/hooks';
/**
 * Hook responsável por notificar criadores de tarefas órfãs e teammates idle
 * sobre tarefas disponíveis que podem executar.
 */
export declare class TaskReminders extends TeammateSessionIntervalsHost {
    private readonly lastCreatorNudge;
    private readonly lastTeammateNudge;
    nudgeCreatorAboutUnownedTasks(): void;
    nudgeIdleTeammatesAboutAvailableTasks(): void;
    nudgeIdleTeammatesWithActiveTasks(): void;
    shutdown(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map