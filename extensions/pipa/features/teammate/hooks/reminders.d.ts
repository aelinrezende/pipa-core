import type { PipaApi } from '../../../interfaces';
import { TeammateSessionIntervalsHost } from './session-interval';
import type { MessageEndEvent, MessageStartEvent, MessageUpdateEvent } from '@earendil-works/pi-coding-agent/extensions';
/**
 * Hook responsável por gerenciar notificações e lembretes periódicos em background
 * (ociosidade, falhas e novas mensagens na inbox).
 */
export declare class TeammateReminders extends TeammateSessionIntervalsHost {
    private lastIdleNudgeAt;
    private idleNudgeCount;
    private readonly failure;
    nudgeInbox(_: unknown, pipa: PipaApi): void;
    nudgeIdleTeammate(_: unknown, pipa: PipaApi): void;
    nudgeFailedTeammate(_: unknown, pipa: PipaApi): void;
    handleAgentFail(event: MessageStartEvent | MessageUpdateEvent | MessageEndEvent, pipa: PipaApi): Promise<void>;
    handleIdleActivityEvent(): void;
    clearReminders(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=reminders.d.ts.map