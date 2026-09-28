import type { BeforeAgentStartEvent, BeforeAgentStartEventResult } from '@earendil-works/pi-coding-agent';
import { type PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../teammate.repository';
export declare class TeammateExecutionContext extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository);
    initialize(): void;
    mitigateModelConcurrency(_: unknown, pipa: PipaApi): Promise<void>;
    /**
     * Injeta o contexto de execução no system prompt do agente.
     */
    injectExecutionContext(event: BeforeAgentStartEvent, pipa: PipaApi): BeforeAgentStartEventResult;
    updateInstanceOnAgentStart(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=execution-context.d.ts.map