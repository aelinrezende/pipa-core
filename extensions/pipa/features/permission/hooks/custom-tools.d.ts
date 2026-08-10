import type { ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { PipaApi } from '../../../interfaces';
/**
 * Hook dedicado a gerenciar permissões de ferramentas específicas (como task, todo, teammates e ask_user_question).
 */
export declare class CustomToolsGuard {
    /**
     * Valida permissões customizadas definidas em blockedForMain e outras regras de ciclo de vida.
     */
    validateTools({ toolName, input }: ToolCallEvent, pipa: PipaApi): Promise<ToolCallEventResult | void>;
}
//# sourceMappingURL=custom-tools.d.ts.map