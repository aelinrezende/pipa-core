import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { DocsRepository } from './docs.repository';
/**
 * Feature principal de gerenciamento de documentos.
 * Registra a tool 'docs' e persiste os dados em docs/entries.json.
 */
export declare class DocsFeature extends PipaBaseFeature {
    initialize(pi: ExtensionAPI): {
        docs: {
            retrieve: () => DocsRepository;
        };
    };
}
//# sourceMappingURL=docs.feature.d.ts.map