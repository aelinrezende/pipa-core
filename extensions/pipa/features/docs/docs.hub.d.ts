import { PipaApi } from '../../interfaces';
import { DocItem, DocsToolSchema } from './docs.entity';
import { DocsCore, DocsValidator } from './hub';
declare const DocsHub_base: import("ts-mixer/dist/types/types").Class<any[], DocsValidator & DocsCore, typeof DocsValidator & typeof DocsCore>;
/**
 * Gerencia a base de documentos do projeto.
 */
export declare class DocsHub extends DocsHub_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    instantiate(data: DocsToolSchema<'instantiate'>): {
        tags?: string[] | undefined;
        parentCode?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        title: string;
        action: "instantiate";
        body: string;
        summary: string;
    } & DocItem;
}
export {};
//# sourceMappingURL=docs.hub.d.ts.map