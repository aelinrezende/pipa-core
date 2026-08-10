import type { ContextEvent, ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Bloqueia write/edit/read em backlog.json dentro de BACKLOG_BASE_DIR.
 * Força uso da tool backlog para manipular tarefas.
 */
export declare class BacklogGuard {
    private readonly blockedToolCallIds;
    guardBacklogWrite(event: ToolCallEvent, _pipa: PipaApi): ToolCallEventResult | void;
    collapseBlockedLoop(event: ContextEvent, _pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=guard.d.ts.map