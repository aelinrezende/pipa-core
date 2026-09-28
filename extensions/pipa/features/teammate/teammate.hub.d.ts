import type { PipaApi } from '../../interfaces/pipa';
import { TaskRepository } from '../task/task.repository';
import { TeammateCore, TeammateExchange, TeammateFrontmatter, TeammateValidator } from './hub';
import { Teammate, TeammateToolSchema } from './teammate.entity';
import { TeammateRepository } from './teammate.repository';
declare const TeammateHub_base: import("ts-mixer/dist/types/types").Class<any[], TeammateFrontmatter & TeammateExchange & TeammateValidator & TeammateCore, typeof TeammateFrontmatter & typeof TeammateExchange & typeof TeammateValidator & typeof TeammateCore>;
/**
 * Gerencia os teammates (subagentes) do agente principal, incluindo criação,
 * armazenamento e comunicação.
 *
 * Os métodos seguem a convenção do padrão backlog: nome camelCase da action
 * (instantiate/list/online/sendInbox/readInbox/chat/dismiss) recebendo payload único tipado.
 */
export declare class TeammateHub extends TeammateHub_base {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    protected readonly taskRepo: TaskRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository, taskRepo: TaskRepository);
    /**
     * Aciona um teammate e inicia uma nova sessão para ele.
     * @param data Payload único da action 'instantiate'.
     * @returns O teammate criado (sem session/pipa, não serializáveis).
     */
    instantiate(data: TeammateToolSchema<'instantiate'>): Promise<Teammate>;
}
export {};
//# sourceMappingURL=teammate.hub.d.ts.map