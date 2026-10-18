/**
 * Dicionário de nudges padronizados para as ações da ferramenta de teammates.
 * Define códigos e mensagens de sucesso/falha/acesso negado para cada ação.
 */
export declare const TEAMMATE_TOOL_NUDGES: {
    /**
     * Nudges relacionados ao processo de subir um novo agente (instantiate).
     */
    instantiate: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
    /**
     * Nudges relacionados à remoção (deleção) de um agente e subordinados (dismiss).
     */
    dismiss: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
};
/** Valores válidos de `thinking` no frontmatter — espelha o enum do SDK (união de strings). */
export declare const TEAMMATE_THINKING_LEVELS: readonly ["off", "minimal", "low", "medium", "high", "xhigh", "max"];
//# sourceMappingURL=teammate.d.ts.map