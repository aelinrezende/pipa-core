import type { ContextEvent, TurnEndEvent } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Substitui o conteúdo de tool results antigos e volumosos por um stub com caminho de arquivo,
 * reduzindo o contexto enviado ao LLM a cada turn (micro-compact periódico).
 *
 * Regras de elegibilidade (todas devem ser satisfeitas):
 *   1. O tool result não é de erro (`isError === false`).
 *   2. O turn em que foi produzido é anterior à janela de turns recentes (`COMPACTOR_RECENT_TURNS`).
 *   3. O conteúdo textual total supera `COMPACTOR_MIN_CHARS` caracteres.
 *
 * Idempotente: resultados já compactados (conteúdo curto) não serão reprocessados.
 * Sem estado persistido: o Map é reconstruído a cada sessão via eventos `turn_end`.
 */
export declare class ToolResultCompactor {
    private readonly toolResultTurns;
    private currentTurn;
    trackTurn(event: TurnEndEvent, _pipa: PipaApi): void;
    compact(event: ContextEvent, pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=compactor.d.ts.map