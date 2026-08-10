/**
 * Remove a extensão do executável e retorna apenas o nome base em minúsculo.
 */
export declare function normalizeExecutable(token: string): string;
/**
 * Quebra uma linha de comando em segmentos separados por operadores lógicos (&&, ||, ;, |).
 */
export declare function splitSegments(command: string): string[];
/**
 * Quebra um segmento de comando em tokens individuais, ignorando espaços em branco.
 */
export declare function tokenize(command: string): string[];
/**
 * Verifica se um comando do terminal contém algum executável bloqueado globalmente.
 */
export declare function isBlockedCommand(command: string): boolean;
/**
 * Verifica se um comando contém flags restritas de acordo com a política definida para o executável.
 * Retorna uma string com o motivo do bloqueio ou null se for permitido.
 */
export declare function validateCommandPolicy(command: string): string | null;
//# sourceMappingURL=permission.d.ts.map