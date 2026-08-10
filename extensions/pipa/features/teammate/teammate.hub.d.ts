import { PipaApi } from '../../interfaces/pipa';
import { Teammate, TeammateToolSchema } from './teammate.entity';
import { TeammateCore, TeammateExchange, TeammateFrontmatter, TeammateState, TeammateValidator } from './hub';
declare const TeammateHub_base: import("ts-mixer/dist/types/types").Class<any[], TeammateFrontmatter & TeammateState & TeammateExchange & TeammateValidator & TeammateCore, typeof TeammateFrontmatter & typeof TeammateState & typeof TeammateExchange & typeof TeammateValidator & typeof TeammateCore>;
/**
 * Gerencia os teammates (subagentes) do agente principal, incluindo criação,
 * armazenamento e comunicação.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/list/online/sendInbox/readInbox/chat/dismiss) recebendo payload único tipado.
 */
export declare class TeammateHub extends TeammateHub_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    private get teammatesFileManager();
    /**
     * Aciona um teammate e inicia uma nova sessão para ele.
     * @param data Payload único da action 'instantiate'.
     * @returns O teammate criado (sem session/pipa, não serializáveis).
     */
    instantiate(data: TeammateToolSchema<'instantiate'>): Promise<Teammate>;
}
export {};
//# sourceMappingURL=teammate.hub.d.ts.map