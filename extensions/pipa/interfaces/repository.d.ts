import { type PipaApi } from './pipa';
/**
 * Opções de criação de um repository. Hooks opcionais de persistência são
 * injetados pela feature; se ausentes, o repository opera só em memória.
 */
export interface IRepositoryOptions<T> {
    /**
     * Função para persistir os itens no armazenamento.
     * @param items
     */
    persist?: (items: T[]) => void;
    /**
     * Função para carregar os itens do armazenamento.
     * @returns Array de itens carregados ou `undefined` se não houver dados.
     */
    load?: () => T[] | undefined;
    /**
     * Extrai a chave primária de um item. Default: `item.id`.
     *
     * Entidades com chave própria (ex.: `code` em docs/backlog) informam aqui,
     * sem alterar o contrato público `Repository<T>` nem a entidade.
     */
    keyOf?: (item: T) => string;
}
/**
 * Interface CRUD mínima que toda feature expõe como fonte de dados.
 */
export declare abstract class IRepository<T> {
    readonly pipa: PipaApi;
    readonly entity: new (data: T) => T;
    readonly options: IRepositoryOptions<T>;
    constructor(pipa: PipaApi, entity: new (data: T) => T, options?: IRepositoryOptions<T>);
    /**
     * Lista todos os itens.
     * */
    abstract all(): T[];
    /**
     * Lista os itens que satisfazem um predicado.
     * */
    abstract findBy(predicate: (item: T) => boolean): T[];
    /**
     * Retorna o item com o id informado.
     * */
    abstract getOneById(id: string): T | undefined;
    /**
     * Retorna o item com o id informado. LANÇA se não existir.
     * */
    abstract getOneByIdOrFail(id: string): T;
    /**
     * Retorna o primeiro item que atenda a um predicado, ou `undefined`.
     * */
    abstract findOneBy(predicate: (item: T) => boolean): T | undefined;
    /**
     * Insere um item e retorna o que foi inserido.
     * */
    abstract add(item: T): T;
    /**
     * Aplica um patch parcial a um item existente e retorna o resultado.
     * */
    abstract update(id: string, patch: Partial<T>): T;
    /**
     * Remove um item pelo id. Retorna `true` se algo foi removido.
     * */
    abstract delete(id: string): boolean;
}
export interface RepositoryMap {
}
/** Chave de um repository registrado no mapa global. */
export type RepositoryKey = keyof RepositoryMap;
/**
 * Instância de repository para a chave `K`: o CRUD base (`IRepository<entidade>`)
 */
export type RepositoryOf<K extends RepositoryKey> = IRepository<RepositoryMap[K]>;
//# sourceMappingURL=repository.d.ts.map