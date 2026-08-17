import { Theme } from '@earendil-works/pi-coding-agent';
import { IString } from '../interfaces/string';
export declare const dedent: (input: string) => string;
export declare const slugfy: (input: string, maxLength?: number) => string;
export declare const assembleLine: (theme: Theme, separator: string, ...parts: (string | undefined | null)[]) => string;
export declare const isLowercase: (input: string) => boolean;
/** Hash determinístico (FNV-1a) de uma string — identidade de colapso (decisão D2). */
export declare const hashFnv1a: (input: string) => string;
/**
 * Transforma um array de strings em um parágrafo, adicionando ponto final em cada string se necessário.
 * @param input Array de strings para transformar em parágrafo
 * @returns Array de strings transformadas em parágrafo
 */
export declare const paragraph: (...input: string[]) => string;
/**
 * Substitui placeholders no formato [param] pelos valores fornecidos no objeto.
 * @param template String contendo os placeholders.
 * @param values Objeto contendo os valores para substituição.
 * @returns String com os valores interpolados.
 */
export declare const interpolate: (template: string, values: Record<string, any>) => string;
/** Normaliza quebras de linha */
export declare const normalizeLineBreaks: (text: string) => string;
/**
 * Atualiza o texto com base no modo de atualização fornecido.
 * @param current Texto atual.
 * @param input Objeto contendo o modo de atualização e os valores.
 * @param normalize Função para normalizar o valor.
 * @returns Texto atualizado.
 */
export declare const updateText: (current: string | null | undefined, input: IString.UpdateBodyInput, exception?: Error) => string;
//# sourceMappingURL=string.d.ts.map