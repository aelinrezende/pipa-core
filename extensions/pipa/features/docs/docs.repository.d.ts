import { PipaRepository } from '../../core/repository';
import { PipaApi } from '../../interfaces';
import { DocItem, type DocsToolSchema } from './docs.entity';
declare module '../../interfaces/repository' {
    interface RepositoryMap {
        docs: DocItem;
    }
}
/**
 * Repository de documentos: CRUD base + consultas próprias (`listBy`).
 *
 * O tipo sai da própria classe: adicionar um método novo exige editar SÓ o
 * corpo abaixo; `RepositoryExtras` apenas referencia `DocsRepository`.
 */
export declare class DocsRepository extends PipaRepository<DocItem> {
    constructor(pipa: PipaApi);
    /**
     * Lista documentos com filtro (por tags) e ordenação.
     *
     * Consulta de dados — vive no repository. O match de tags
     * (array-contains) e o `sortBy`/`reverse` não são cobertos por
     * `Repository.list`.
     */
    listBy(criteria?: DocsToolSchema<'list'>): DocItem[];
}
//# sourceMappingURL=docs.repository.d.ts.map