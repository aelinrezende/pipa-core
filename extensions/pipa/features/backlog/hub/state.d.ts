import { PipaApi, ToolParams } from '../../../interfaces';
import { FileManager } from '../../../lib';
import { BACKLOG_TOOL_SCHEMA } from '../backlog.definitions';
import { BacklogItem, BacklogToolSchema } from '../backlog.entity';
/** Critérios de filtro/ordenação para listagem do backlog */
export type BacklogListCriteria = Partial<Pick<BacklogItem, 'status' | 'type'>> & {
    sort: ToolParams<typeof BACKLOG_TOOL_SCHEMA>['sort'];
    limit?: number;
};
/**
 * Utilitário de leitura: carrega backlog.json do disco sob demanda.
 * Sem cache em memória. BacklogCore é responsável pela escrita (persistOne).
 */
export declare class BacklogState {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    static get fileManager(): FileManager<BacklogItem[]>;
    private static get store();
    /**
     * Carrega backlog.json do disco para a store em memória, substituindo o cache atual.
     */
    static load(): void;
    /**
     * Salva silenciosamente o estado atual para o disco em JSON.
     */
    private static persist;
    /**
     * Lista itens com filtro e ordenação — escaneia o disco.
     */
    static listBy(criteria?: BacklogToolSchema<'list'>): BacklogItem[];
    /** Lista todos os itens (sem filtro) */
    static all(): BacklogItem[];
    /**
     * Busca um item por código — escaneia o disco.
     */
    static get(code: string): BacklogItem | undefined;
    /** Limpa o cache do backlog */
    static clear(): void;
    /** Adiciona um item ao cache do backlog */
    static add(item: BacklogItem): void;
    /**
     * Atualiza os dados de um item existente na store e retorna o item atualizado.
     */
    static update(id: string, data: Partial<BacklogItem>): BacklogItem;
    /** Remove um item do cache do backlog */
    static delete(code: string): boolean;
}
//# sourceMappingURL=state.d.ts.map