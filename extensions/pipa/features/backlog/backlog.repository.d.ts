import { PipaRepository } from '../../core/repository';
import { PipaApi } from '../../interfaces';
import { BacklogItem, type BacklogToolSchema } from './backlog.entity';
declare module '../../interfaces/repository' {
    interface RepositoryMap {
        backlog: BacklogItem;
    }
}
export declare class BacklogRepository extends PipaRepository<BacklogItem> {
    constructor(pipa: PipaApi);
    /**
     * Lista itens com filtro (por status/tipo) e ordenação.
     *
     * Filtro multi-predicado +
     * `sortBy`/`reverse` não são cobertos por `Repository.list`.
     */
    listBy(criteria?: BacklogToolSchema<'list'>): BacklogItem[];
}
//# sourceMappingURL=backlog.repository.d.ts.map