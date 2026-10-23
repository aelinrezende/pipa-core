import { type PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../../teammate/teammate.repository';
import { TaskRepository } from '../task.repository';
/**
 * Hook responsável por lembrar teammates idle sobre tarefas pendentes, atribuídas
 * e sem dependências hard abertas.
 *
 * D6 — composição: possui seu próprio `SessionIntervalRegistry` em vez de herdar
 * `TeammateSessionIntervalsHost` (herança cruzada entre features).
 */
export declare class TaskReminders extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TaskRepository;
    protected readonly teammateRepo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TaskRepository, teammateRepo: TeammateRepository);
    private readonly sessionIntervals;
    private readonly lastTeammateNudge;
    nudgeIdleTeammatesWithPendingTasks(): void;
    shutdown(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map