import type { ContextEvent, ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Bloqueia qualquer tool call feita sem uma tarefa ativa reivindicada
 * e colapsa o loop de tentativas repetidas no contexto enviado ao LLM,
 * substituindo as mensagens bloqueadas por um único aviso consolidado.
 */
export declare class TaskGuard {
    private readonly blockedToolCallIds;
    guardUnclaimedToolCall({ toolName, toolCallId }: ToolCallEvent, pipa: PipaApi): ToolCallEventResult | void;
    collapseBlockedLoop(event: ContextEvent, _pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=guard.d.ts.map