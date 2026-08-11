import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
declare const DocsFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature, typeof PipaBaseFeature>;
/**
 * Feature principal de gerenciamento de documentos.
 * Registra a tool 'docs' e persiste os dados em docs/entries.json.
 */
export declare class DocsFeature extends DocsFeature_base {
    loadDocs(): void;
    initialize(pi: ExtensionAPI): void;
}
export {};
//# sourceMappingURL=docs.feature.d.ts.map