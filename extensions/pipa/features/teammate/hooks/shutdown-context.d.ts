import type { ContextEvent } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../teammate.repository';
/**
 * Hook responsável por limpar o contexto do teammate durante seu encerramento.
 */
export declare class TeammateShutdownContext extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository);
    clearStoppingContext(_event: ContextEvent, pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=shutdown-context.d.ts.map