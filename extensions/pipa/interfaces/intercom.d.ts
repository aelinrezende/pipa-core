export interface Intercom {
    /**
     * Envia mensagem para a inbox do teammate, enfileirando o prompt para o
     * agente (steering message) e salvando conteúdo no disco.
     * @param to Identificador do teammates.
     * @param message Conteúdo da mensagem a ser enviada.
     */
    send(to: string, message: string): void;
}
//# sourceMappingURL=intercom.d.ts.map