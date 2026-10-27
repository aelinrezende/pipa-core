import type { PipaApi } from '../../interfaces';
import { TeammateRepository } from '../teammate/teammate.repository';
import { TaskCore } from './tooling';
import { Task, TaskToolSchema } from './task.entity';
import { TaskRepository } from './task.repository';
/**
 * Gerencia as tarefas atribuídas aos teammates.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/get/list/setup/start/update/remove/complete/reopen/pause/resume)
 * recebendo payload único tipado.
 */
export declare class TaskTool extends TaskCore {
    readonly pipa: PipaApi;
    readonly folder: string;
    protected readonly repo: TaskRepository;
    protected readonly teammateRepo: TeammateRepository;
    constructor(pipa: PipaApi, folder: string, repo: TaskRepository, teammateRepo: TeammateRepository);
    /**
     * Cria uma nova tarefa a partir do payload da action 'instantiate'.
     * @param data Payload único da action 'instantiate'.
     * @returns A tarefa criada.
     */
    instantiate(data: TaskToolSchema<'instantiate'>): Task;
}
//# sourceMappingURL=task.tool.d.ts.map