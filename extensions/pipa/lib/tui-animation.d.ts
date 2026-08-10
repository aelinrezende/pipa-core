import type { ChalkInstance } from 'chalk';
export declare const ANIMATION_WORDS: string[];
export declare const ANIMATION_COLORS: ChalkInstance[];
export interface AnimatedTextOptions {
    /**
     * O passo atual da animação (tempo contínuo)
     */
    step: number;
    /**
     * String que servirá de "semente" para dessincronizar
     * o momento de transição e criar variação no array de palavras.
     */
    seedString: string;
    /**
     * Lista de palavras que serão rotacionadas.
     * @default ANIMATION_WORDS
     */
    words?: string[];
    /**
     * Lista de cores que serão aplicadas caractere a caractere.
     * @default ANIMATION_COLORS
     */
    colors?: ChalkInstance[];
    /**
     * Quantidade de steps de duração para cada palavra antes de transicionar.
     * @default 15
     */
    wordDuration?: number;
}
/**
 * Renderiza um texto animado e dessincronizado de forma determinística
 * com base na string-semente, aplicando um gradiente em movimento nas letras.
 */
export declare function renderAnimatedText({ step, seedString, words, colors, wordDuration }: AnimatedTextOptions): string;
//# sourceMappingURL=tui-animation.d.ts.map