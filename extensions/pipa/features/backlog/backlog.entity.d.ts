import { BaseClass, ToolActionPayload, ToolParams } from '../../interfaces/common';
import { BACKLOG_TOOL_SCHEMA } from './backlog.definitions';
export type BacklogItemType = 'epic' | 'story' | 'task' | 'bugfix';
export type BacklogStatus = 'triage' | 'in_progress' | 'done' | 'blocked' | 'cancelled';
export type BacklogPriority = 'low' | 'medium' | 'high' | 'critical';
export type BacklogDomain = 'api' | 'ui' | 'integration';
export type BacklogToolParams = ToolParams<typeof BACKLOG_TOOL_SCHEMA>;
/** Payload de cada ação da tool backlog */
export type BacklogToolSchema<K extends keyof typeof BACKLOG_TOOL_SCHEMA> = ToolActionPayload<typeof BACKLOG_TOOL_SCHEMA, K>;
/** Representa um item do backlog de tarefas do projeto */
export declare class BacklogItem {
    constructor(data: BaseClass<BacklogItem>);
    /** Código curto gerado via nanoid(8) */
    code: string;
    /** Título descritivo da tarefa */
    title: string;
    /** Tipo do item: epic, story, task, bugfix */
    type: BacklogItemType;
    /** Status atual do item */
    status: BacklogStatus;
    /** Conteúdo markdown (objetivo, critérios…) */
    body: string;
    /** ISO date de criação */
    createdAt: string;
    /** ISO date da última modificação */
    updatedAt: string;
    /** Prioridade do item */
    priority?: BacklogPriority;
    /** Domínios relacionados */
    domain?: BacklogDomain[];
    /** Código do item pai (epic ou story) */
    parentCode?: string;
    /** Ordem de exibição */
    order?: number;
    /** Etiquetas livres */
    tags?: string[];
    /** Campo livre para dados arbitrários (links, IDs externos, flags) */
    metadata?: Record<string, unknown>;
}
/** Campos do frontmatter editáveis — union type derivado de BacklogItem */
export type BacklogItemFrontmatter = keyof Pick<BacklogItem, 'code' | 'title' | 'type' | 'status' | 'body' | 'createdAt' | 'updatedAt' | 'parentCode' | 'priority' | 'domain' | 'tags' | 'order'>;
export type BacklogStore = Map<string, BacklogItem>;
//# sourceMappingURL=backlog.entity.d.ts.map