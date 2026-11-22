/**
 * Utilitário para formatação de conteúdo em Markdown.
 */
export declare class Markdown {
    /** Formata uma lista de itens em Markdown, usando um formatador opcional para personalizar a exibição de cada item.
     * @param items Array de itens a serem formatados.
     * @param formatter Função opcional para formatar cada item. Pode retornar uma string simples, um array [título, descrição]
     * ou um array [título, descrição, marcador] para personalizar o marcador da lista.
     * @param emptyMessage Mensagem a ser exibida caso o array de itens esteja vazio. Padrão é "—".
     * @returns String formatada em Markdown representando a lista de itens.
     */
    static unorderedList<T>(items: T[], formatter?: (item: T) => string | [string, string] | {
        content: string;
        marker?: '-' | '*' | '└';
    }, emptyMessage?: string): string;
}
//# sourceMappingURL=markdown.d.ts.map