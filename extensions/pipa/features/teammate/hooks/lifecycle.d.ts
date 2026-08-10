import type { MessageEndEvent, MessageStartEvent, MessageUpdateEvent } from '@earendil-works/pi-coding-agent/extensions';
import { type PipaApi } from '../../../interfaces';
import { TeammateSessionIntervalsHost } from './session-interval';
/**
 * Hook responsável por gerenciar o ciclo de vida dos teammates,
 * incluindo transições de status, encerramento de sessão, tratamento de falhas e expiração.
 */
export declare class TeammateLifecycle extends TeammateSessionIntervalsHost {
    private failCount;
    removeInactiveTeammate(_: unknown, pipa: PipaApi): void;
    abortStuckTeammate(_: unknown, pipa: PipaApi): void;
    setRunningStatus(_: unknown, pipa: PipaApi): void;
    handleAgentEnd(_: unknown, pipa: PipaApi): void;
    handleAgentFail(event: MessageStartEvent | MessageUpdateEvent | MessageEndEvent, pipa: PipaApi): Promise<void>;
    shutdown(_: unknown, pipa: PipaApi): Promise<void>;
}
//# sourceMappingURL=lifecycle.d.ts.map