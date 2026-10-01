import { type PipaApi } from '../../interfaces';
import { DocItem, DocsToolSchema } from './docs.entity';
import { DocsRepository } from './docs.repository';
import { DocsCore, DocsValidator } from './tooling';
declare const DocsTool_base: import("ts-mixer/dist/types/types").Class<any[], DocsValidator & DocsCore, typeof DocsValidator & typeof DocsCore>;
/**
 * Gerencia a base de documentos do projeto.
 */
export declare class DocsTool extends DocsTool_base {
    readonly pipa: PipaApi;
    protected readonly repo: DocsRepository;
    constructor(pipa: PipaApi, repo: DocsRepository);
    instantiate(data: DocsToolSchema<'instantiate'>): {
        action: "instantiate";
        title: string;
        parentCode?: string | undefined;
        tags?: string[] | undefined;
        metadata?: Record<string, unknown> | undefined;
        body: string;
        summary: string;
    } & DocItem;
}
export {};
//# sourceMappingURL=docs.tool.d.ts.map