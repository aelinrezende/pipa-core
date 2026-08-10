import type { Component } from '@earendil-works/pi-tui';
import type { Theme } from '@earendil-works/pi-coding-agent';
/**
 * Representa um nó em uma estrutura de árvore, contendo os dados originais
 * mais um array de seus filhos.
 */
export type TreeNode<T> = T & {
    children: TreeNode<T>[];
};
/**
 * Opções para construir uma árvore a partir de uma lista plana de itens.
 */
export interface BuildTreeOptions<T extends object> {
    /**
     * O array plano de itens a partir do qual a árvore será construída.
     */
    items: T[];
    /**
     * Função para extrair o identificador único de um item.
     */
    getId: (item: T) => string;
    /**
     * Função para extrair o identificador do pai de um item.
     * Se retornar nulo ou indefinido, o item será considerado um nó raiz.
     */
    getParentId: (item: T) => string | undefined | null;
    /**
     * Função opcional para ordenar um array de nós.
     * Aplicada recursivamente aos nós filhos e aos nós raízes resultantes.
     */
    sortNodes?: (nodes: TreeNode<T>[]) => TreeNode<T>[];
}
/**
 * Constrói uma estrutura de árvore hierárquica a partir de um array plano de itens.
 * Preserva os protótipos originais dos objetos (métodos e getters).
 *
 * @param options - As opções de configuração para construção da árvore.
 * @returns Um array de nós raízes, cada um contendo seus respectivos filhos.
 */
export declare function buildTree<T extends object>(options: BuildTreeOptions<T>): TreeNode<T>[];
/**
 * Classe base abstrata para widgets que renderizam uma estrutura de árvore na TUI.
 * Fornece a lógica recursiva de renderização para desenhar os galhos da árvore em ASCII.
 */
export declare abstract class AbstractTreeWidget<T> implements Component {
    abstract render(width: number): string[];
    abstract invalidate(): void;
    /**
     * Renderiza o conteúdo específico (rótulo, ícones, etc.) para um determinado nó.
     * @param node - O nó a ser renderizado.
     * @returns A representação em string formatada do conteúdo do nó.
     */
    protected abstract renderLabel(node: TreeNode<T>): string;
    /**
     * Renderiza recursivamente um nó e seus filhos com os prefixos de galho ASCII apropriados.
     *
     * @param node - O nó a ser renderizado.
     * @param prefix - A string de prefixo acumulada dos níveis pais.
     * @param isLast - Se este nó é o último filho no seu grupo de irmãos.
     * @returns Um array de strings representando as linhas renderizadas para este nó e sua subárvore.
     */
    protected renderNode(node: TreeNode<T>, prefix: string, isLast: boolean): string[];
}
/**
 * Trunca um texto para no máximo maxLength caracteres,
 * adicionando '…' se excedido.
 */
export declare function truncateText(text: string, maxLength: number): string;
/**
 * Retorna tag formatada para squad, se presente.
 */
export declare function squadTag(squad: string | undefined, theme: Theme): string;
//# sourceMappingURL=tui.d.ts.map