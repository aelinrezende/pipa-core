/**
 * Gera o stub textual que substitui o conteúdo original de um tool result compactado.
 * Indica ao LLM o caminho do arquivo onde o resultado completo foi arquivado.
 */
export declare function buildCompactorStub(filePath: string, originalChars: number, toolName: string): string;
/**
 * Persiste o conteúdo completo de um tool result em disco, dentro de `.pi/compact/<sessionId>/`.
 *
 * @returns O caminho absoluto do arquivo criado.
 */
export declare function persistToolResult(sessionId: string, toolCallId: string, content: string): string;
//# sourceMappingURL=tool-result-compactor.d.ts.map