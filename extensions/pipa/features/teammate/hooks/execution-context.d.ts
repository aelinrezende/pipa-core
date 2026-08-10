import type { BeforeAgentStartEvent, BeforeAgentStartEventResult } from '@earendil-works/pi-coding-agent';
import { type PipaApi } from '../../../interfaces';
export declare class TeammateExecutionContext {
    initializeSession(_: unknown, pipa: PipaApi): void;
    mitigateModelConcurrency(_: unknown, pipa: PipaApi): Promise<void>;
    /**
     * Injeta o contexto de execução no system prompt do agente.
     */
    injectExecutionContext(event: BeforeAgentStartEvent, pipa: PipaApi): BeforeAgentStartEventResult;
    updateInstanceOnAgentStart(_: unknown, pipa: PipaApi): void;
}
//# sourceMappingURL=execution-context.d.ts.map