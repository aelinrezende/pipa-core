import { TodoValidator } from './validator';
import { PipaApi } from '../../../interfaces';
import { FileManager } from '../../../lib';
import { TodoItem, TodoToolSchema } from '../todo.entity';
/**
 * Mixin central responsável pela manipulação persistente da lista de afazeres no TodoHub.
 */
export declare class TodoCore extends TodoValidator {
    readonly pipa: PipaApi;
    readonly fileManager: FileManager<TodoItem[]>;
    constructor(pipa: PipaApi);
    get sessionId(): string;
    persist(): void;
    /**
     * Atualiza um item de afazer existente e persiste as mudanças.
     * @param data Payload único da action 'update'.
     * @returns O item atualizado.
     */
    update({ id, action, ...updates }: TodoToolSchema<'update'>): TodoItem;
    /**
     * Remove uma etapa da lista e persiste o novo estado.
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