import { PipaApi } from '../interfaces';
import { IRepository, IRepositoryOptions } from '../interfaces/repository';
export declare class PipaRepository<T> implements IRepository<T> {
    readonly pipa: PipaApi;
    readonly entity: new (data: T) => T;
    readonly options: IRepositoryOptions<T>;
    constructor(pipa: PipaApi, entity: new (data: T) => T, options?: IRepositoryOptions<T>);
    /** Extrator de chave primária: `keyOf` injetado ou `id` por padrão. */
    private readonly keyOf;
    private readonly items;
    private flush;
    all(): T[];
    findBy(predicate: (item: T) => boolean): T[];
    getOneById(id: string): T | undefined;
    getOneByIdOrFail(id: string): T;
    findOneBy(predicate: (item: T) => boolean): T | undefined;
    add(item: T): T;
    update(id: string, patch: Partial<T>): T;
    delete(id: string): boolean;
}
//# sourceMappingURL=repository.d.ts.map