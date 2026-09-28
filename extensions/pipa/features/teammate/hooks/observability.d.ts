import type { ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { MessageEndEvent } from '@earendil-works/pi-coding-agent/extensions';
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
    logTeammateMessages(event: MessageEndEvent, pipa: PipaApi): ToolCallEventResult | void;
}
//# sourceMappingURL=observability.d.ts.map