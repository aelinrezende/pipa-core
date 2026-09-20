import type { ContextEvent } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Hook responsável por limpar o contexto do teammate durante seu encerramento.
 */
export declare class TeammateShutdownContext {
    clearStoppingContext(_event: ContextEvent, pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=shutdown-context.d.ts.map