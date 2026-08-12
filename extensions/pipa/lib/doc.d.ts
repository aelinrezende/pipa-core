export interface DocListSource {
    code: string;
    title: string;
    summary: string;
    createdAt: string;
    updatedAt: string;
    parentCode?: string;
    tags?: string[];
    body?: unknown;
    metadata?: unknown;
}
export type DocListItem = Omit<DocListSource, 'body' | 'metadata'>;
export declare function toDocListItem(item: DocListSource): DocListItem;
/** Tipo estrutural mínimo para resolver caminhos de publicação de documentos */
export interface DocPathNode {
    code: string;
    title: string;
    parentCode?: string;
}
/**
 * Resolve o caminho relativo de publicação de um documento subindo a cadeia de parentCode.
 * Pai ausente (órfão) interrompe a subida e trata o documento como raiz.
 */
export declare function resolveDocPath(document: DocPathNode, allDocuments: Map<string, DocPathNode>): string;
/**
 * Resolve o caminho relativo de cada documento no publish, aplicando o sufixo
 * `-<code>` quando o slug colide na mesma pasta.
 */
export declare function resolvePublishPaths(documents: DocPathNode[]): Map<string, string>;
//# sourceMappingURL=doc.d.ts.map