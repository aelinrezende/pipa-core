import { PipaApi } from '../../interfaces';
import { TaskCore, TaskSquad } from './hub';
import { Task, TaskToolSchema } from './task.entity';
declare const TaskHub_base: import("ts-mixer/dist/types/types").Class<any[], TaskCore & TaskSquad, typeof TaskCore & typeof TaskSquad>;
/**
 * Gerencia as tarefas atribuídas aos teammates.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/get/list/setup/update/remove/claim/complete/listBySquad/squadStatus)
 * recebendo payload único tipado.
 */
export declare class TaskHub extends TaskHub_base {
    readonly pipa: PipaApi;
    readonly folder: string;
    constructor(pipa: PipaApi, folder: string);
    /**
     * Cria uma nova tarefa a partir do payload da action 'instantiate'.
     * @param data Payload único da action 'instantiate'.
     * @returns A tarefa criada.
     */
    instantiate(data: TaskToolSchema<'instantiate'>): Task;
}
export {};
//# sourceMappingURL=task.hub.d.ts.map