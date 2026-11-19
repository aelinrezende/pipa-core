import type { MessageEndEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { MessageStartEvent, ToolExecutionStartEvent } from '@earendil-works/pi-coding-agent/extensions';
import { PiEvent } from '../../../constants/pipa';
import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../teammate.repository';
/**
 * Hook responsável por monitorar e registrar a atividade (uso de ferramentas e mensagens) do teammate.
 */
export declare class TeammateObservability extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository);
    handleActivityEvent(event: {
        type: PiEvent;
        toolName: string;
        args?: any;
        input?: any;
    }, pipa: PipaApi): void;
    logTeammateMessages(event: MessageStartEvent | ToolExecutionStartEvent, pipa: PipaApi): ToolCallEventResult | void;
    persistErrors(event: MessageEndEvent, pipa: PipaApi): void;
}
//# sourceMappingURL=observability.d.ts.map