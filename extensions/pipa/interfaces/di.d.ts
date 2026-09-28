/**
 * Contrato para o container de provedores da Pipa.
 */
export declare abstract class IPipaProvidersContainer {
    /**
     * Mapa de provedores registrados, onde a chave é o token do provedor e o valor é a instância do provedor.
     */
    readonly providers: Map<string | symbol, unknown>;
    /**
     * Registra um provedor no container global.
     * @param token Token do provedor a ser registrado.
     * @param provider Instância do provedor a ser registrada.
     * @returns A instância do provedor registrada.
     */
    abstract register<T>(token: string | symbol, provider: T): T;
    /**
     * Resolve um provedor registrado no container global.
     * @param token Token do provedor a ser resolvido.
     * @returns Instância do provedor registrado.
     */
    abstract resolve<T>(token: string | symbol): T;
    /**
     * Verifica se um provedor está registrado no container global.
     * @param token Token do provedor a ser verificado.
     * @returns `true` se o provedor estiver registrado, caso contrário, `false`.
     */
    abstract has(token: string | symbol): boolean;
}
//# sourceMappingURL=di.d.ts.map