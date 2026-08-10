import { type PipaApi } from '../interfaces';
/**
 * Verifica se a Pipa está em modo de onboarding.
 * O modo de onboarding é ativado quando não existe um perfil global gerado em '.pi/PROFILE.md'.
 *
 * @param pipa A instância da API da Pipa.
 * @returns Retorna true se estiver no modo de onboarding, caso contrário, false.
 */
export declare function isOnboarding(pipa: PipaApi): boolean;
/**
 * Tenta injetar o PROFILE.md padrão fornecido pelo pacote embutido.
 * Caso o ambiente local já possua o PROFILE.md, a injeção é abortada.
 *
 * @param pipa A instância da API da Pipa.
 */
export declare function autoInjectProfile(pipa: PipaApi): void;
//# sourceMappingURL=onboarding.d.ts.map