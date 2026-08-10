import { BaseClass, ToolActionPayload, ToolParams } from '../../interfaces/common';
import { TODO_TOOL_SCHEMA } from './todo.definitions';
/**
 * Status possíveis para um item na lista de afazeres.
 */
export type TodoStatus = 'pending' | 'in_progress' | 'completed';
export type TodoToolParams = ToolParams<typeof TODO_TOOL_SCHEMA>;
/** Payload de cada ação da tool todo */
export type TodoToolSchema<K extends keyof typeof TODO_TOOL_SCHEMA> = ToolActionPayload<typeof TODO_TOOL_SCHEMA, K>;
/**
 * Representa um único passo na lista de afazeres do agente.
 */
export declare class TodoItem {
    constructor(data: BaseClass<TodoItem>);
    /**
     * Identificador único do item.
     */
    id: string;
    /**
     * Identificador da sessão do agente que é dono deste item.
     */
    sessionId: string;
    /**
     * Texto descrevendo a etapa ou tarefa a ser realizada.
     */
    text: string;
    /**
     * Status atual do item.
     */
    status: TodoStatus;
    /**
     * Indica se o item está pendente.
     */
    get isPending(): boolean;
    /**
     * Indica se o item está em andamento.
     */
    get isInProgress(): boolean;
    /**
     * Indica se o item está concluído.
     */
    get isCompleted(): boolean;
}
//# sourceMappingURL=todo.entity.d.ts.map