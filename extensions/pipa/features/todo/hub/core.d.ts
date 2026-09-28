import { PipaApi } from '../../../interfaces';
import { TodoItem, TodoToolSchema } from '../todo.entity';
import { TodoValidator } from './validator';
/**
 * Mixin central responsável pela manipulação persistente da lista de afazeres no TodoHub.
 *
 * A persistência é responsabilidade do repository local da sessão
 * (`TodoState` → `createTodoRepository`): `add/update/delete` já persistem.
 */
export declare class TodoCore extends TodoValidator {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    get sessionId(): string;
    /**
     * Atualiza um item de afazer existente.
     * @param data Payload único da action 'update'.
     * @returns O item atualizado.
     */
    update({ id, action, ...updates }: TodoToolSchema<'update'>): TodoItem;
    /**
     * Remove uma etapa da lista.
     * @param data Payload único da action 'remove'.
     */
    remove({ id }: TodoToolSchema<'remove'>): void;
    /**
     * Limpa inteiramente o histórico e os afazeres da lista.
     */
    clear(): void;
    /**
     * Recupera todos os passos atuais da lista de afazeres.
     * @returns Os itens da lista de afazeres.
     */
    list(): TodoItem[];
}
//# sourceMappingURL=core.d.ts.map