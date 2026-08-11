import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { BacklogGuard } from './hooks';
declare const BacklogFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & BacklogGuard, typeof PipaBaseFeature & typeof BacklogGuard>;
/**
 * Feature principal do backlog de tarefas do projeto.
 * Registra a tool 'backlog' e bloqueia write/edit direto em backlog.json.
 */
export declare class BacklogFeature extends BacklogFeature_base {
    loadBacklog(): void;
    initialize(pi: ExtensionAPI): void;
}
export {};
//# sourceMappingURL=backlog.feature.d.ts.map