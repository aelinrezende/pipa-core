import { TodoItem } from '../todo.entity';
/**
 * Classe responsável por validar as ações executadas na lista de afazeres,
 * retornando falhas seguras para notificação em caso de operações inválidas.
 */
export declare class TodoValidator {
    /**
     * Valida se um item é passível de ser atualizado.
     *
     * @param sessionId O ID da sessão do agente.
     * @param id O ID do item que está sendo buscado.
     * @returns Um objeto ValidationResult atestando se a ação pode prosseguir, com erro no caso negativo.
     */
    canUpdate(sessionId: string, id: string): TodoItem;
    /**
     * Valida se um item é passível de ser removido.
     *
     * @param sessionId O ID da sessão do agente.
     * @param id O ID do item que está sendo buscado.
     * @returns Um objeto ValidationResult atestando se a ação pode prosseguir, com erro no caso negativo.
     */
    canRemove(sessionId: string, id: string): TodoItem;
}
//# sourceMappingURL=validator.d.ts.map