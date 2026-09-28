import { PipaRepository } from '../../core/repository';
import type { PipaApi } from '../../interfaces/pipa';
import { TodoItem } from './todo.entity';
export declare class TodoRepository extends PipaRepository<TodoItem> {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
}
//# sourceMappingURL=todo.repository.d.ts.map