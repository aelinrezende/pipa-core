import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TaskRepository } from '../task.repository';
/**
 * Hook para registrar o widget TUI de gerenciamento de tarefas.
 */
export declare class TaskTuiRegister extends PipaBaseFeature {
    protected readonly repo: TaskRepository;
    constructor(pipa: PipaApi, repo: TaskRepository);
    initialize(): void;
}
//# sourceMappingURL=tui-register.d.ts.map