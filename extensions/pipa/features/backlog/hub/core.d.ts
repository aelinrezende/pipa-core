import type { PipaApi } from '../../../interfaces';
import { BacklogItem, BacklogToolSchema } from '../backlog.entity';
import { BacklogRepository } from '../backlog.repository';
import { BacklogValidator } from './validator';
/**
 * Núcleo de CRUD do backlog.
 * Síncrono. Persiste todos os itens como um único backlog.json.
 * O repository é resolvido sob demanda via `Repositories.resolve('backlog')`.
 */
export declare class BacklogCore extends BacklogValidator {
    readonly pipa: PipaApi;
    protected readonly repo: BacklogRepository;
    constructor(pipa: PipaApi, repo: BacklogRepository);
    /** Lista itens com filtro e ordenação — o repository semeia o disco sob demanda */
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
    /** Manipula corpo markdown e persiste o backlog.json */
    updateBody({ code, mode, value, replacement }: BacklogToolSchema<'update-body'>): BacklogItem;
    /** Faz merge de dados livres (metadata) no item e persiste o backlog.json */
    updateMetadata({ code, metadata }: BacklogToolSchema<'update-metadata'>): BacklogItem;
    /** Busca fuzzy por título/código/tags via fuse.js */
    select({ query }: BacklogToolSchema<'select'>): BacklogItem[];
    /** Remove item do backlog e recalcula o antigo pai em cascata */
    remove({ code }: BacklogToolSchema<'remove'>): BacklogItem;
}
//# sourceMappingURL=core.d.ts.map