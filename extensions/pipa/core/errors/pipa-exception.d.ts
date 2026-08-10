/** Exceção para erros de validação que propaga direto ao harness. */
export declare class PipaException extends Error {
    /** Ação que gerou o erro (ex: de "task.create" extrai "create"). */
    readonly action: string;
    /** Ferramenta que gerou o erro (ex: de "task.create" extrai "task"). */
    readonly tool: string;
    /**
     * @param intent String "ferramenta.acao" (ex: "task.create").
     * @param messages Linhas de erro exibidas abaixo do cabeçalho `[{action}]`.
     * @example
     * ```ts
     * throw new PipaException(...TASK_TOOL_NUDGES.setup.failed, `Tarefa não encontrada.`);
     * ```
     */
    constructor(intent: string, ...messages: string[]);
}
//# sourceMappingURL=pipa-exception.d.ts.map