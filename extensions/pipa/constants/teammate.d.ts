import type { TeammateStatus } from '../features/teammate/teammate.entity';
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
        readonly failed: readonly [string, "Falha durante início"];
        readonly denied: readonly [string, "Acesso negado para invocar colega"];
    };
    /**
     * Nudges relacionados à remoção (deleção) de um agente e subordinados (dismiss).
     */
    dismiss: {
        code: string;
        readonly failed: readonly [string, "Tentativa inválida de dispensar colega"];
        readonly denied: readonly [string, "Acesso negado"];
    };
};
export declare const TEAMMATE_STATUS_TRANSLATIONS: Record<TeammateStatus, string>;
//# sourceMappingURL=teammate.d.ts.map