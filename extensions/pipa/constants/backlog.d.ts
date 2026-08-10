import type { BacklogDomain, BacklogItem, BacklogItemFrontmatter, BacklogItemType, BacklogPriority, BacklogStatus } from '../features/backlog/backlog.entity';
/** Tipos válidos de item do backlog */
export declare const BACKLOG_ITEM_TYPES: BacklogItemType[];
/** Status válidos do backlog */
export declare const BACKLOG_STATUSES: BacklogStatus[];
/** Prioridades válidas */
export declare const BACKLOG_PRIORITIES: BacklogPriority[];
/** Domínios válidos */
export declare const BACKLOG_DOMAINS: BacklogDomain[];
/** Campos de ordenação da listagem */
export declare const BACKLOG_SORT_FIELDS: (keyof Pick<BacklogItem, 'updatedAt' | 'order'>)[];
/** Direções de ordenação */
export declare const BACKLOG_SORT_ORDERS: ('ASC' | 'DESC')[];
/** Campos do frontmatter editáveis via update-frontmatter */
export declare const BACKLOG_FRONTMATTER_FIELDS: BacklogItemFrontmatter[];
/** Mensagens contextuais para cada ação da tool backlog */
export declare const BACKLOG_TOOL_NUDGES: {
    list: {
        code: string;
        readonly failed: readonly [string, "Falha ao listar backlog"];
        readonly success: readonly [string, "Backlog listado com sucesso"];
    };
    create: {
        code: string;
        readonly failed: readonly [string, "Falha ao criar item no backlog"];
        readonly success: readonly [string, "Item criado no backlog"];
    };
    'update-frontmatter': {
        code: string;
        readonly failed: readonly [string, "Falha ao atualizar frontmatter"];
        readonly success: readonly [string, "Frontmatter atualizado"];
    };
    'update-body': {
        code: string;
        readonly failed: readonly [string, "Falha ao atualizar corpo markdown"];
        readonly success: readonly [string, "Corpo markdown atualizado"];
    };
    'update-metadata': {
        code: string;
        readonly failed: readonly [string, "Falha ao atualizar metadata"];
        readonly success: readonly [string, "Metadata atualizado"];
    };
    select: {
        code: string;
        readonly failed: readonly [string, "Falha na busca"];
        readonly success: readonly [string, "Busca concluída"];
    };
};
//# sourceMappingURL=backlog.d.ts.map