/**
 * Transforma um objeto, array ou valor primitivo em uma string bem formatada legível por humanos e LLMs,
 * traduzindo chaves conhecidas para o português e organizando com listas e indentação.
 *
 * @param details - O valor a ser formatado (objeto, array ou primitivo).
 * @param level - O nível de indentação atual (usado internamente para recursão).
 * @returns Uma string formatada e estruturada.
 *
 * @example
 * // Exemplo 1 - Objeto Simples:
 * toHumanReadable({ name: "Aelin", status: "running" });
 * // =>
 * // * **Nome**: Aelin
 * // * **Status**: running
 *
 * @example
 * // Exemplo 2 - Listas Simples:
 * toHumanReadable({ roles: ["frontend", "backend"] });
 * // =>
 * // * **Papéis capacitados**:
 * //   - frontend
 * //   - backend
 *
 * @example
 * // Exemplo 3 - Listas Complexas Aninhadas:
 * toHumanReadable({ blockedBy: [{ id: "T-100" }] });
 * // =>
 * // * **Dependências**:
 * //   - Item 1:
 * //     * **ID**: T-100
 */
export declare function toHumanReadable(details: any, level?: number): string;
//# sourceMappingURL=llm.d.ts.map