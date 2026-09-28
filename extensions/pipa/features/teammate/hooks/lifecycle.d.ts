import type { MessageEndEvent, MessageStartEvent, MessageUpdateEvent } from '@earendil-works/pi-coding-agent/extensions';
import { type PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TaskRepository } from '../../task/task.repository';
import { TeammateRepository } from '../teammate.repository';
/**
 * Hook responsável por gerenciar o ciclo de vida dos teammates,
 * incluindo transições de status, encerramento de sessão, tratamento de falhas e expiração.
 */
export declare class TeammateLifecycle extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    protected readonly taskRepo: TaskRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository, taskRepo: TaskRepository);
    private readonly sessionIntervals;
    private failCount;
    removeInactiveTeammate(_: unknown, pipa: PipaApi): void;
    abortStuckTeammate(_: unknown, pipa: PipaApi): void;
    setRunningStatus(_: unknown, pipa: PipaApi): void;
    handleAgentEnd(_: unknown, pipa: PipaApi): void;
    handleAgentFail(event: MessageStartEvent | MessageUpdateEvent | MessageEndEvent, pipa: PipaApi): Promise<void>;
    shutdown(_: unknown, pipa: PipaApi): Promise<void>;
}
//# sourceMappingURL=lifecycle.d.ts.map