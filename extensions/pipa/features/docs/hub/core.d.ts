import type { PipaApi } from '../../../interfaces';
import { DocListItem } from '../../../lib/doc';
import { DocItem, DocsToolSchema } from '../docs.entity';
import { DocsState } from './state';
import { DocsValidator } from './validator';
declare const DocsCore_base: import("ts-mixer/dist/types/types").Class<any[], DocsValidator & DocsState, typeof DocsValidator & typeof DocsState>;
/**
 * Núcleo de CRUD dos documentos.
 * Síncrono. Persiste todos os itens como um único entries.json.
 * Leitura (list/get) delega para DocsState.
 */
export declare class DocsCore extends DocsCore_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /** Persiste um único item no disco via DocsState (FileManager.save) */
    persistOne(item: DocItem): void;
    /** Busca item por código */
    get(code: string): DocItem | undefined;
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
export {};
//# sourceMappingURL=core.d.ts.map