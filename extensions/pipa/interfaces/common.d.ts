import { Static, TSchema } from 'typebox';
/**
 * Achata uma união de objetos em um único tipo de objeto.
 * Chaves que não existem em todos os objetos da união se tornam opcionais/undefined.
 */
export type FlattenUnion<T> = {
    [K in T extends any ? keyof T : never]: T extends any ? (K extends keyof T ? T[K] : undefined) : never;
};
/**
 * Representa um objeto JavaScript plano padrão com chaves em string e qualquer valor.
 */
export type PlainObject<T = any> = Record<string, T>;
/**
 * Extrai e achata os tipos estáticos dos parâmetros de uma ferramenta definidos usando TypeBox.
 */
export type ToolParams<T extends Record<string, TSchema>> = FlattenUnion<Static<T[keyof T]>>;
/**
 * Extrai o tipo de payload de uma ação específica de uma ferramenta.
 * @template T - O esquema da ferramenta (um objeto com ações como chaves).
 * @template K - A chave da ação específica para a qual extrair o payload.
 */
export type ToolPayload<T extends Record<string, TSchema>, K extends keyof ToolParams<T>> = Pick<ToolParams<T>, K>;
/**
 * Extrai o tipo de payload de uma ação específica de uma ferramenta.
 * @template T - O esquema da ferramenta (um objeto com ações como chaves).
 * @template K - A chave da ação específica para a qual extrair o payload.
 */
export type ToolActionPayload<T extends Record<string, TSchema>, K extends keyof T> = {
    [P in K]: Static<T[P]>;
}[K];
/**
 * Utilitário de tipagem condicional que verifica se dois tipos X e Y são estritamente iguais.
 * Retorna o tipo A se forem iguais, caso contrário, retorna o tipo B (padrão é never).
 */
type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
/**
 * Extrai apenas as chaves de um tipo T que permitem escrita (não são readonly).
 */
type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P, never>;
}[keyof T];
/**
 * Retorna um novo tipo contendo apenas as propriedades de T que não são getters (readonly).
 */
export type OmitGetters<T> = Pick<T, WritableKeys<T>>;
/**
 * Extrai apenas as chaves de um tipo T cujos valores não sejam funções.
 */
export type NonFunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
/**
 * Representa a estrutura de dados base de uma classe T,
 * omitindo todas as funções/métodos e getters (propriedades readonly).
 * Útil para serialização ou criação de construtores de objetos puros.
 */
export type BaseClass<T> = Pick<T, WritableKeys<T> & NonFunctionKeys<T>>;
/**
 * Tupla que representa um erro de validação.
 * Formato compatível com os argumentos do PipaApi.nudge: [actionCode, title, message]
 */
export type ValidationErrorTuple = [string, string | string[], any?];
/**
 * Resultado genérico de uma validação.
 * Retorna sucesso e os dados (como a entidade validada), ou falha com os argumentos de erro.
 */
export type ValidationResult<T = void> = {
    success: true;
    data: T;
} | {
    success: false;
    error: ValidationErrorTuple;
};
export type KebabToCamel<S extends string> = S extends `${infer T}-${infer U}` ? `${Uncapitalize<T>}${Capitalize<KebabToCamel<U>>}` : Uncapitalize<S>;
export {};
//# sourceMappingURL=common.d.ts.map