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
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    create: {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    'update-frontmatter': {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    'update-body': {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    'update-metadata': {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    select: {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
};
//# sourceMappingURL=backlog.d.ts.map