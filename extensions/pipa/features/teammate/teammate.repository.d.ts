import { PipaRepository } from '../../core/repository';
import { PipaApi } from '../../interfaces';
import { Teammate } from './teammate.entity';
declare module '../../interfaces/repository' {
    interface RepositoryMap {
        teammate: Teammate;
    }
}
export declare class TeammateRepository extends PipaRepository<Teammate> {
    constructor(pipa: PipaApi);
    /**
     * Recupera um teammate pelo sessionId. Lança com a lista de colegas online
     * quando não encontrado.
     */
    findOneOrFail(sessionId: string): Teammate;
    /** Conta os subordinados diretos ainda presentes no repositório. */
    countDirectSubordinates(sessionId: string): number;
    /**
     * Lista todos os subordinados recursivamente para o sessionId fornecido.
     */
    listSubordinates(sessionId: string): Teammate[];
}
//# sourceMappingURL=teammate.repository.d.ts.map