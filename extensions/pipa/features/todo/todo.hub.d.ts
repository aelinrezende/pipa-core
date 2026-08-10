import { PipaApi } from '../../interfaces';
import { TodoItem, TodoToolSchema } from './todo.entity';
import { TodoValidator, TodoCore } from './hub';
declare const TodoHub_base: import("ts-mixer/dist/types/types").Class<any[], TodoValidator & TodoCore, typeof TodoValidator & typeof TodoCore>;
/**
 * Gerencia a ferramenta local de TODO do agente (Subagente).
 * Responsável pela persistência em disco do passo-a-passo.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/update/remove/list/clear) recebendo payload único tipado.
 */
export declare class TodoHub extends TodoHub_base {
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
//# sourceMappingURL=todo.hub.d.ts.map