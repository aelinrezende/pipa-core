import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { TeammateExecutionContext, TeammateLifecycle, TeammateObservability, TeammateReminders, TeammateTuiRegister } from './hooks';
declare const TeammateFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & TeammateExecutionContext & TeammateLifecycle & TeammateReminders & TeammateObservability & TeammateTuiRegister, typeof PipaBaseFeature & typeof TeammateExecutionContext & typeof TeammateLifecycle & typeof TeammateReminders & typeof TeammateObservability & typeof TeammateTuiRegister>;
/**
 * Feature para gerenciamento de subagentes.
 */
export declare class TeammateFeature extends TeammateFeature_base {
    initialize(pi: ExtensionAPI): Promise<void> | void;
}
export {};
//# sourceMappingURL=teammate.feature.d.ts.map