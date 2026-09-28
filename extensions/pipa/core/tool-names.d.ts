declare global {
    var toolNames: Set<string> | undefined;
}
/**
 * Registra o nome de uma ferramenta. IDEMPOTENTE — tolera re-execuções do
 * `initialize()`.
 */
export declare function registerToolName(name: string): void;
/** Indica se a ferramenta está registrada. */
export declare function isToolName(name: string): boolean;
//# sourceMappingURL=tool-names.d.ts.map