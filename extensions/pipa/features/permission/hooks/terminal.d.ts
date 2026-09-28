import type { ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
/**
 * Hook dedicado para bloquear comandos bash perigosos e avisar o supervisor em operações diretas de edição.
 */
export declare class TerminalGuard extends PipaBaseFeature {
    /**
     * Valida permissões para as ferramentas globais do sistema, como bash, edit e write.
     */
    validateTerminal({ toolName, input }: ToolCallEvent, pipa: PipaApi): Promise<ToolCallEventResult | void>;
}
//# sourceMappingURL=terminal.d.ts.map