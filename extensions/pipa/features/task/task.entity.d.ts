import { BaseClass, ToolActionPayload, ToolParams } from '../../interfaces/common';
import { Teammate } from '../teammate/teammate.entity';
import { TASK_TOOL_SCHEMA } from './task.definitions';
export type DependencyStatus = 'hard' | 'soft';
export interface Dependency {
    id: string;
    type: DependencyStatus;
}
export type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'stopped' | 'setup';
export type TaskToolParams = ToolParams<typeof TASK_TOOL_SCHEMA>;
/** Payload de cada ação da tool task */
export type TaskToolSchema<K extends keyof typeof TASK_TOOL_SCHEMA> = ToolActionPayload<typeof TASK_TOOL_SCHEMA, K>;
export declare class Task {
    constructor(data: BaseClass<Task>);
    /** ID único da tarefa, gerado automaticamente */
    id: string;
    /** Nome curto e descritivo da tarefa */
    name: string;
    /** Descrição detalhada da tarefa, incluindo critérios de aceitação e informações relevantes para execução */
    description: string;
    /** Status da tarefa */
    status: TaskStatus;
    /** Dados do teammate proprietário da tarefa (mantido mesmo se o teammate sair) */
    owner?: Pick<Teammate, 'sessionId' | 'name'>;
    /** Lista de dependências que bloqueiam a execução desta tarefa */
    blockedBy: Dependency[];
    /** ID da tarefa pai à qual esta subtask pertence */
    parentTaskId?: string;
    /** Nome do squad ao qual esta tarefa pertence */
    squad?: string;
    /** Diretório onde os arquivos relacionados à tarefa serão armazenados */
    directory: string;
    /** Caminho do artefato que comprova o resultado final da tarefa */
    artifactFile?: string;
    /** ID da sessão/agente criador da tarefa */
    creatorId: string;
    /** Nome do teammate capaz de executar a tarefa */
    role: string;
    /** Timestamp de quando a tarefa foi criada */
    createdAt: number;
    /** Timestamp de quando a tarefa foi concluída */
    completedAt?: number;
    /** Indica se a tarefa está pendente */
    get isPending(): boolean;
    /** Indica se a tarefa está concluída */
    get isCompleted(): boolean;
    /** Indica se a tarefa está em andamento */
    get isInProgress(): boolean;
    /** Indica se a tarefa está setup */
    get isSetup(): boolean;
    /** Indica se a tarefa está atribuída a algum teammate */
    get isAssigned(): boolean;
    /**
     * Verifica se o teammate tem permissão para gerenciar esta tarefa
     * @param teammate - O teammate a ser verificado
     * @returns True se o teammate pode gerenciar a tarefa, false caso contrário
     */
    canManage(teammate: Teammate): boolean;
}
export type TasksStore = Map<string, Task>;
//# sourceMappingURL=task.entity.d.ts.map