/** Comprimento máximo do summary dos documentos */
export declare const DOC_SUMMARY_LENGTH = 200;
/** Mensagens contextuais para cada ação da tool docs */
export declare const DOCS_TOOL_NUDGES: {
    create: {
        code: string;
        readonly failed: readonly [string, "Falha ao criar documento"];
        readonly success: readonly [string, "Documento criado"];
    };
    list: {
        code: string;
        readonly failed: readonly [string, "Falha ao listar documentos"];
        readonly success: readonly [string, "Documentos listados"];
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
    remove: {
        code: string;
        readonly failed: readonly [string, "Falha ao remover documento"];
        readonly success: readonly [string, "Documento removido"];
    };
    publish: {
        code: string;
        readonly failed: readonly [string, "Falha ao publicar documentação"];
        readonly success: readonly [string, "Documentação publicada"];
    };
};
//# sourceMappingURL=docs.d.ts.map