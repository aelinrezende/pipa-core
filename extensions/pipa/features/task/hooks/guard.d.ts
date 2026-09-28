import type { ContextEvent, ToolCallEvent, ToolCallEventResult } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../../teammate/teammate.repository';
import { TaskRepository } from '../task.repository';
/**
 * Bloqueia qualquer tool call feita sem uma tarefa ativa reivindicada
 * e colapsa o loop de tentativas repetidas no contexto enviado ao LLM,
 * substituindo as mensagens bloqueadas por um único aviso consolidado.
 */
export declare class TaskGuard extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TaskRepository;
    protected readonly teammateRepo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TaskRepository, teammateRepo: TeammateRepository);
    private readonly blockedToolCallIds;
    guardUnclaimedToolCall({ toolName, toolCallId }: ToolCallEvent, pipa: PipaApi): ToolCallEventResult | void;
    collapseBlockedLoop(event: ContextEvent, _pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=guard.d.ts.map