import type { CatalogKey, InterpolationParams, SupportedLocale } from './types';
/**
 * Resolve uma chave num catálogo, aplicando interpolação e fallback (A5).
 *
 * Ordem de fallback, nunca lançando exceção:
 * 1. catálogo do locale resolvido;
 * 2. catálogo `en`;
 * 3. a própria chave.
 *
 * `C` é o catálogo concreto da feature; `key` fica restrita a
 * `CatalogKey<C>`, então chave inexistente é erro de compilação (CA13/CA14b).
 */
export declare function translate<C>(catalogs: {
    readonly [L in SupportedLocale]?: C;
}, key: CatalogKey<C>, params?: InterpolationParams, currentLocale?: SupportedLocale): string;
/**
 * Cria o resolvedor de textos de uma feature, com o catálogo já vinculado.
 *
 * Cada feature instancia seu próprio `t()` a partir dos catálogos que declara,
 * mantendo `i18n/` livre de dependência de features específicas (A2).
 *
 * O catálogo concreto precisa chegar até aqui — se o chamador anotar a
 * constante como `Record<SupportedLocale, LocaleCatalog>`, a união de chaves
 * vira `string` e a checagem de CA14b se perde.
 */
export declare function createTranslator<C>(catalogs: {
    readonly [L in SupportedLocale]?: C;
}): (key: CatalogKey<C>, params?: InterpolationParams) => string;
//# sourceMappingURL=t.d.ts.map