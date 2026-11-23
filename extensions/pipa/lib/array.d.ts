import { PlainObject } from '../interfaces';
/**
 * Ordena um array baseado na ordem dos itens de um array de referência.
 * Itens que não forem encontrados no array de referência serão movidos para o final da lista.
 *
 * @param items Array que será ordenado.
 * @param referenceArray Array de referência com a ordem desejada.
 * @param iteratee Função opcional para extrair o valor de comparação de cada item do array.
 */
export declare function sortByReference<T, R>(items: T[], referenceArray: R[], iteratee?: (item: T) => R): T[];
/**
 * Verifica se um array contém apenas strings.
 *
 * @param items Array a ser verificado.
 * @returns True se o array contém apenas strings, false caso contrário.
 */
export declare function isArrayOfStrings(items: unknown[]): items is string[];
/**
 * Cria um objeto indexado por uma chave específica, omitindo essa chave dos valores.
 *
 * @param items Array de objetos a serem indexados.
 * @param key Chave que será usada para indexar os objetos.
 * @returns Um objeto onde cada chave é o valor da propriedade especificada e o valor é o objeto original sem essa propriedade.
 */
export declare function keyByAndOmit<T extends PlainObject, K extends keyof T>(items: T[], key: K): Record<string, Omit<T, K>>;
//# sourceMappingURL=array.d.ts.map