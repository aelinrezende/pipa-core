import type { PipaApi } from '../../../interfaces';
import { BacklogItem, BacklogToolSchema } from '../backlog.entity';
import { BacklogState } from './state';
import { BacklogValidator } from './validator';
declare const BacklogCore_base: import("ts-mixer/dist/types/types").Class<any[], BacklogValidator & BacklogState, typeof BacklogValidator & typeof BacklogState>;
/**
 * Núcleo de CRUD do backlog.
 * Síncrono. Persiste todos os itens como um único backlog.json.
 * Leitura (list/get) delega para BacklogState, que carrega o disco sob demanda.
 */
export declare class BacklogCore extends BacklogCore_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /** Persiste um único item no disco via BacklogState (FileManager.save) */
    persistOne(item: BacklogItem): void;
    /** Busca item por código — delega ao BacklogState (escaneia disco) */
    get(code: string): BacklogItem | undefined;
    /** Lista itens com filtro e ordenação — delega ao BacklogState (escaneia disco) */
    list(sort: BacklogToolSchema<'list'>): BacklogItem[];
    /** Atualiza campo do frontmatter e persiste o backlog.json */
    updateFrontmatter({ code, field, value }: BacklogToolSchema<'update-frontmatter'>): BacklogItem;
    /**
     * Deriva o status esperado de um nó a partir do status dos filhos.
     * Regra (aprovada): sem filhos → não muda; todos os filhos com o MESMO status → esse status;
     * mix não uniforme → in_progress.
     */
    private deriveStatus;
    /**
     * Deriva o status de um nó a partir do status dos filhos e persiste no store se mudou.
     * Regra (aprovada): sem filhos → não muda; todos os filhos com o MESMO status → esse status;
     * mix não uniforme → in_progress.
     */
    private deriveNodeStatus;
    /**
     * Recalcula o status dos ancestrais em cascata até a raiz, a partir de um item.
     * Guarda contra parentCode cíclico: interrompe ao reencontrar um código já visitado.
     * Persiste uma única vez no fim da cascata.
     */
    protected recalculateAncestors(code: string): void;
    /** Normaliza quebras de linha — aceita \\n literal ou newline real */
    private normalizeBody;
    /** Manipula corpo markdown e persiste o backlog.json */
    updateBody({ code, mode, value, replacement }: BacklogToolSchema<'update-body'>): BacklogItem;
    /** Faz merge de dados livres (metadata) no item e persiste o backlog.json */
    updateMetadata({ code, metadata }: BacklogToolSchema<'update-metadata'>): BacklogItem;
    /** Busca fuzzy por título/código/tags via fuse.js */
    select({ query }: BacklogToolSchema<'select'>): BacklogItem[];
    /** Remove item do backlog e recalcula o antigo pai em cascata */
    remove({ code }: BacklogToolSchema<'remove'>): BacklogItem;
}
export {};
//# sourceMappingURL=core.d.ts.map