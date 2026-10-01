import { PipaApi } from '../../interfaces';
import { TodoCore, TodoValidator } from './tooling';
import { TodoItem, TodoToolSchema } from './todo.entity';
declare const TodoTool_base: import("ts-mixer/dist/types/types").Class<any[], TodoValidator & TodoCore, typeof TodoValidator & typeof TodoCore>;
/**
 * Gerencia a lista local de afazeres do agente (subagente).
 * Responsável pela persistência em disco do passo-a-passo.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/update/remove/list/clear) recebendo payload único tipado.
 */
export declare class TodoTool extends TodoTool_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Adiciona um novo item à lista de afazeres, persistindo-o no arquivo local.
     *
     * @param data Payload único da action 'instantiate' contendo o texto descritivo do passo.
     * @returns O item criado.
     */
    instantiate(data: TodoToolSchema<'instantiate'>): TodoItem;
}
export {};
//# sourceMappingURL=todo.tool.d.ts.map