/**
 * Define políticas de execução para comandos do terminal.
 */
export type CommandPolicy = {
    /**
     * Conjunto de flags que estão estritamente bloqueadas para este comando.
     */
    blockedFlags?: ReadonlySet<string>;
};
//# sourceMappingURL=permission.d.ts.map