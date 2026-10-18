import type { PipaConfig } from '../interfaces/config';
import type { Leaf } from '../interfaces/common';
export type { Leaf, TKey } from '../interfaces/common';
/**
 * Locales suportados pela extensão — derivado do tipo de config.
 *
 * É o conjunto que a extensão aceita em `config.locale` e, ao mesmo tempo,
 * o conjunto que todo catálogo de feature precisa cobrir.
 */
export type SupportedLocale = NonNullable<PipaConfig['locale']>;
/** Objeto de catálogo aninhado de uma feature, em um locale. */
export type LocaleCatalog = Readonly<Record<string, string | Readonly<Record<string, unknown>>>>;
/** União dos dot-paths de folha aceitos por `t()` para um catálogo concreto. */
export type CatalogKey<C> = Leaf<C>;
/** Parâmetros de interpolação nomeada (`{id}`) aceitos por `t()`. */
export type InterpolationParams = Readonly<Record<string, string | number>>;
//# sourceMappingURL=types.d.ts.map