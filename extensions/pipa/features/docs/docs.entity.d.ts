import { BaseClass, ToolActionPayload, ToolParams } from '../../interfaces/common';
import { DOCS_TOOL_SCHEMA } from './docs.definitions';
export type DocsToolParams = ToolParams<typeof DOCS_TOOL_SCHEMA>;
export type DocsToolSchema<K extends keyof typeof DOCS_TOOL_SCHEMA> = ToolActionPayload<typeof DOCS_TOOL_SCHEMA, K>;
export declare class DocItem {
    constructor(data: BaseClass<DocItem>);
    /** Código curto (nanoid) */
    code: string;
    /** Título do documento */
    title: string;
    /** Conteúdo markdown */
    body: string;
    /** ISO date de criação */
    createdAt: string;
    /** ISO date da última modificação */
    updatedAt: string;
    /** Etiquetas livres para categorização */
    tags?: string[];
    /** Metadados arbitrários */
    metadata?: Record<string, unknown>;
}
export type DocsStore = Map<string, DocItem>;
//# sourceMappingURL=docs.entity.d.ts.map