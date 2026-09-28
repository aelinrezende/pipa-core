import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { TeammateRepository } from '../teammate/teammate.repository';
import { TaskRepository } from './task.repository';
export declare class TaskFeature extends PipaBaseFeature {
    initialize(pi: ExtensionAPI): {
        task: {
            retrieve: () => TaskRepository;
            dependencies: {
                teammate: {
                    retrieve: () => TeammateRepository;
                };
            };
        };
    };
}
//# sourceMappingURL=task.feature.d.ts.map