import type { SupportedLocale } from './types';
declare const DEFAULT_LOCALE: SupportedLocale;
declare const SUPPORTED_LOCALES: readonly SupportedLocale[];
/**
 * Resolve o locale a partir do config (A3).
 *
 * Regras:
 * - `en` e `pt-BR` são aceitos literalmente.
 * - Ausente, vazio ou não suportado resolve para `en`, silenciosamente
 *   (sem warning e sem exceção — CA4).
 * - Nenhuma variável de ambiente é lida (CA8).
 * - Resolução idempotente, sem cache por sessão (H1).
 */
declare function resolveLocale(value: unknown): SupportedLocale;
/**
 * Locale atual, resolvido a cada leitura (H1).
 *
 * É função, não `const` de módulo: `core/config.ts` resolve via top-level await,
 * então um valor capturado no import de `locale.ts` pode congelar em `en` caso
 * este módulo seja avaliado antes do config terminar. Avaliar por chamada
 * garante que qualquer consumidor receba o locale já resolvido, nunca
 * `undefined` e nunca um valor pré-resolução.
 */
export declare function getLocale(): SupportedLocale;
export { DEFAULT_LOCALE, SUPPORTED_LOCALES, resolveLocale };
//# sourceMappingURL=locale.d.ts.map