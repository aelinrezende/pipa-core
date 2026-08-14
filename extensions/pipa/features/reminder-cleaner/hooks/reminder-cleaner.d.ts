import type { ContextEvent } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Limpa do contexto LLM as notificações (nudges) que já cumpriram seu papel:
 * 1. remove tool-result nudges (`task.*`, `teammates.*`, `docs.*`, `backlog.*`, `todo.*`)
 *    quando o toolResult do mesmo tool call já está no contexto (duplicação);
 * 2. colapsa reminders periódicos por identidade (`customType` + hash do conteúdo),
 *    último vence, mantendo 1 resumo consolidado (padrão TaskGuard — nunca sumir silencioso).
 *
 * Idempotente e sem estado: afeta apenas o que vai ao LLM; a session permanece append-only.
 */
export declare class ReminderCleaner {
    clean(event: ContextEvent, _pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=reminder-cleaner.d.ts.map