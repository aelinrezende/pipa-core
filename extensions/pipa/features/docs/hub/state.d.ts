import { PipaApi } from '../../../interfaces';
import { FileManager } from '../../../lib';
import { DocItem, DocsToolSchema } from '../docs.entity';
/**
 * Utilitário de leitura: carrega entries.json do disco sob demanda.
 * Sem cache em memória. DocsCore é responsável pela escrita (persistOne).
 */
export declare class DocsState {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Carrega entries.json do disco para a store em memória, substituindo o cache atual.
     */
    static load(): void;
    private static get store();
    readonly fileManager: FileManager<DocItem[]>;
    /**
     * Lista itens com filtro (por tags) e ordenação — usa o store carregado.
     */
    static listBy(criteria?: DocsToolSchema<'list'>): DocItem[];
    /** Lista todos os itens (sem filtro) */
    static all(): DocItem[];
    /** Persiste todos os itens no disco (entries.json) via FileManager */
    saveAll(): void;
    /** Busca um item por código */
    static get(code: string): DocItem | undefined;
    /** Limpa o cache */
    static clear(): void;
    /** Adiciona um item ao cache */
    static add(item: DocItem): void;
    /** Remove um item do cache */
    static delete(code: string): boolean;
}
//# sourceMappingURL=state.d.ts.map