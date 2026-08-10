import { TodoItem } from '../todo.entity';
/**
 * Mantém e gerencia o estado em memória da lista de afazeres dos agentes.
 */
export declare class TodoState {
    /**
     * Recupera a store global de todos.
     */
    static get store(): Map<string, TodoItem>;
    /**
     * Carrega os afazeres persistidos em disco (todo.json do workspace do agente)
     * para a store em memória, substituindo os itens atuais da sessão.
     */
    static load(workspaceDir: string, sessionId: string): void;
    /**
     * Adiciona um novo item ao estado.
     */
    static add(item: TodoItem): TodoItem;
    /**
     * Atualiza parcialmente um item existente no estado.
     */
    static update(id: string, data: Partial<TodoItem>): TodoItem | undefined;
    /**
     * Remove permanentemente um item do estado através de seu ID.
     */
    static delete(id: string): void;
    /**
     * Limpa integralmente a lista de afazeres de um agente específico.
     */
    static clear(sessionId: string): void;
    /**
     * Recupera a lista contendo todos os itens atuais da lista de afazeres de um agente.
     */
    static list(sessionId: string): TodoItem[];
    /**
     * Obtém um item específico da lista de afazeres por seu ID.
     */
    static get(id: string): TodoItem | undefined;
}
//# sourceMappingURL=state.d.ts.map