import type * as Pi from '@earendil-works/pi-coding-agent/extensions';
import { PipaApi } from '../interfaces';
export declare abstract class PipaBaseFeature {
    readonly pi: Pi.ExtensionAPI;
    constructor(pi: Pi.ExtensionAPI);
    pipa: PipaApi;
    /**
     * Método de inicialização da feature, chamado uma vez durante o setup da extensão.
     */
    initialize?(pi: Pi.ExtensionAPI): Promise<void> | void;
}
export type PipaBaseFeatureConstructor = new (pi: Pi.ExtensionAPI) => PipaBaseFeature;
//# sourceMappingURL=base-feature.d.ts.map