import type { MessageEndEvent, MessageStartEvent, MessageUpdateEvent } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TaskRepository } from '../../task/task.repository';
import { TeammateRepository } from '../teammate.repository';
/**
 * Hook responsável por gerenciar notificações e lembretes periódicos em background
 * (ociosidade, falhas e novas mensagens na inbox).
 */
export declare class TeammateReminders extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    protected readonly tasks: TaskRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository, tasks: TaskRepository);
    private readonly sessionIntervals;
    private lastIdleNudgeAt;
    private idleNudgeCount;
    private escalated;
    private readonly failure;
    nudgeInbox(_: unknown, pipa: PipaApi): void;
    nudgeIdleTeammate(_: unknown, pipa: PipaApi): void;
    nudgeAgentEnd(_: unknown, pipa: PipaApi): void;
    nudgeFailedTeammate(_: unknown, pipa: PipaApi): void;
    handleAgentFail(event: MessageStartEvent | MessageUpdateEvent | MessageEndEvent, pipa: PipaApi): Promise<void>;
    handleIdleActivityEvent(): void;
    /**
     * Marca uso real de ferramenta. Único lugar que zera o contador de nudge.
     */
    handleToolExecutionStart(): void;
    clearReminders(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map