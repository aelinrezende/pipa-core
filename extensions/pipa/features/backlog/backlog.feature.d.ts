import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { BacklogRepository } from './backlog.repository';
/**
 * Feature principal do backlog de tarefas do projeto.
 * Registra a tool 'backlog' e bloqueia write/edit direto em backlog.json.
 */
export declare class BacklogFeature extends PipaBaseFeature {
    initialize(pi: ExtensionAPI): {
        backlog: {
            retrieve: () => BacklogRepository;
        };
    };
}
//# sourceMappingURL=backlog.feature.d.ts.map