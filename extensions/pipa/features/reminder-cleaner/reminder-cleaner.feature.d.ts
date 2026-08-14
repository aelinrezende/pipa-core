import { PipaBaseFeature } from '../base-feature';
import { ReminderCleaner } from './hooks/reminder-cleaner';
declare const ReminderCleanerFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & ReminderCleaner, typeof PipaBaseFeature & typeof ReminderCleaner>;
/**
 * Feature neutra de higiene de contexto: limpa do contexto LLM as notificações
 * (nudges) que já cumpriram seu papel, independentemente da feature de origem
 * (task, teammates, docs, backlog, todo).
 */
export declare class ReminderCleanerFeature extends ReminderCleanerFeature_base {
}
export {};
//# sourceMappingURL=reminder-cleaner.feature.d.ts.map