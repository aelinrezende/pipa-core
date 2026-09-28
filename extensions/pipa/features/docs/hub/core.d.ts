import type { PipaApi } from '../../../interfaces';
import { DocListItem } from '../../../lib/doc';
import { DocItem, DocsToolSchema } from '../docs.entity';
import { DocsRepository } from '../docs.repository';
import { DocsValidator } from './validator';
/**
 * Núcleo de CRUD dos documentos.
 * Síncrono. Persiste todos os itens como um único entries.json.
 * O repository é resolvido sob demanda via Repositories.resolve('doc').
 */
export declare class DocsCore extends DocsValidator {
    readonly pipa: PipaApi;
    protected readonly repo: DocsRepository;
    constructor(pipa: PipaApi, repo: DocsRepository);
    /** Lista itens com filtro e ordenação */
    list(sort: DocsToolSchema<'list'>): DocListItem[];
    /** Atualiza campo do frontmatter e persiste o entries.json */
    updateFrontmatter({ code, field, value }: DocsToolSchema<'update-frontmatter'>): DocItem;
    /** Manipula corpo markdown e persiste o entries.json */
    updateBody({ code, mode, value, replacement, summary }: DocsToolSchema<'update-body'>): DocItem;
    /** Faz merge de dados livres (metadata) no item e persiste o entries.json */
    updateMetadata({ code, metadata }: DocsToolSchema<'update-metadata'>): DocItem;
    /** Busca fuzzy por título/código/tags via fuse.js */
    select({ query }: DocsToolSchema<'select'>): DocItem[];
    /** Remove item e salva json */
    remove({ code }: DocsToolSchema<'remove'>): DocItem;
    /** Publica site estático extraindo .md e rodando retypeapp */
    publish(): Promise<{
        path: string;
        url: string;
    }>;
}
//# sourceMappingURL=core.d.ts.map