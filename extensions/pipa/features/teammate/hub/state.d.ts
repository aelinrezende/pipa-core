import { Teammate } from '../teammate.entity';
export declare class TeammateState {
    /**
     * Recupera a store de teammates.
     */
    private static get store();
    /**
     * Adiciona um novo teammate à store e retorna o objeto do teammate criado.
     */
    static add(sessionId: string, teammate: Teammate): Teammate;
    /**
     * Atualiza os dados de um teammate existente na store e retorna o objeto atualizado.
     * Lança um erro se o teammate não for encontrado, garantindo que o retorno seja sempre válido.
     */
    static update(sessionId: string, data: Partial<Teammate>): Teammate;
    /**
     * Recupera um teammate da store pelo sessionId.
     * Lança um erro se o teammate não for encontrado, garantindo que o retorno seja sempre válido.
     */
    static get(sessionId: string): Teammate;
    /**
     * Recupera um teammate da store pelo sessionId.
     */
    static find(sessionId: string): Teammate | undefined;
    /**
     * Recupera um teammate da store pelo sessionId.
     */
    static search(filter: (teammate: Teammate) => boolean): Teammate | undefined;
    /**
     * Lista todos os teammates atualmente armazenados (online).
     */
    static list(): Teammate[];
    /**
     * Lista todos os subordinados recursivamente para o sessionId fornecido.
     */
    static listSubordinates(sessionId: string): Teammate[];
    static delete(sessionId: string): void;
}
//# sourceMappingURL=state.d.ts.map