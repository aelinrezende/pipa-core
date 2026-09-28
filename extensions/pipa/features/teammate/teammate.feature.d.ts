import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { TeammateRepository } from './teammate.repository';
/**
 * Feature para gerenciamento de subagentes.
 */
export declare class TeammateFeature extends PipaBaseFeature {
    initialize(pi: ExtensionAPI): {
        teammate: {
            retrieve: () => TeammateRepository;
        };
    };
}
//# sourceMappingURL=teammate.feature.d.ts.map