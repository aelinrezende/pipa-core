import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { TaskGuard, TaskReminders, TaskTuiRegister } from './hooks';
declare const TaskFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & TaskReminders & TaskTuiRegister & TaskGuard, typeof PipaBaseFeature & typeof TaskReminders & typeof TaskTuiRegister & typeof TaskGuard>;
export declare class TaskFeature extends TaskFeature_base {
    private loadTasks;
    initialize(pi: ExtensionAPI): void;
}
export {};
//# sourceMappingURL=task.feature.d.ts.map