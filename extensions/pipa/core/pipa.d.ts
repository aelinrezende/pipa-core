import { ExtensionAPI, ExtensionContext } from '@earendil-works/pi-coding-agent';
import { PipaApi } from '../interfaces/pipa';
/**
 * Retorna a instância principal da PipaApi, referente a sessão principal.
 */
export declare const pipa: () => Readonly<PipaApi>;
/**
 * Constrói a API da Pipa para ser utilizada nos features, encapsulando o ExtensionAPI
 * e adicionando funcionalidades customizadas.
 *
 * Inicializa a instância principal da PipaApi, garantindo que o contexto seja atualizado
 * a cada evento disparado.
 *
 * @param pi O ExtensionAPI fornecido pelo Pi Coding Agent.
 * @param context O contexto de execução do evento.
 * @returns Uma instância de PipaApi, pronta para ser utilizada pelos features da Pipa.
 */
export declare function buildPipaApi(pi: ExtensionAPI, context: ExtensionContext): PipaApi;
//# sourceMappingURL=pipa.d.ts.map