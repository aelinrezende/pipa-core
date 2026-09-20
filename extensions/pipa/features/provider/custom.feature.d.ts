import type { BeforeAgentStartEvent, ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import type { PipaApi } from '../../interfaces';
export declare class ProviderFeature extends PipaBaseFeature {
    initialize(pi: ExtensionAPI): Promise<void> | void;
    addToolsDefinition(event: BeforeAgentStartEvent, pipa: PipaApi): {
        systemPrompt: string;
    } | undefined;
}
//# sourceMappingURL=custom.feature.d.ts.map