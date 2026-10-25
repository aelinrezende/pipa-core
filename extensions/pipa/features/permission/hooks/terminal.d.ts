import type { ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../../base-feature';
/**
 * Hook dedicado para bloquear comandos bash perigosos.
 */
export declare class TerminalGuard extends PipaBaseFeature {
    /**
     * Valida permissões para as ferramentas globais do sistema, como bash.
     */
    validateTerminal({ toolName, input }: ToolCallEvent): Promise<ToolCallEventResult | void>;
}
//# sourceMappingURL=terminal.d.ts.map