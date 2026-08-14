import { TeammateToolSchema } from '../teammate.entity';
import { PipaApi } from '../../../interfaces';
import { TeammateValidator } from './validator';
/**
 * Mixin central de operações de negócio e gerenciamento para o TeammateHub.
 */
export declare class TeammateCore extends TeammateValidator {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Lista teammates com sessão ativa.
     * @returns Lista de teammates online com status e tokens.
     */
    online(): {
        id: string;
        name: string;
        status: import("../teammate.entity").TeammateStatus;
        statusEmoji: string;
        tokens_in: string;
        tokens_out: string;
    }[];
    /**
     * Remove um teammate (subagente) e todos os seus subordinados.
     * @param data Payload único da action 'dismiss'.
     * @returns Confirmação com o agente removido e a quantidade de sessões encerradas.
     */
    dismiss({ teammateId, reason }: TeammateToolSchema<'dismiss'>): Promise<{
        dismissed: {
            id: string;
            name: string;
        };
        count: number;
        reason: string;
    }>;
}
//# sourceMappingURL=core.d.ts.map