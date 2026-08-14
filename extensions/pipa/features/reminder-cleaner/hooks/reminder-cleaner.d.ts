import type { ContextEvent } from '@earendil-works/pi-coding-agent';
import type { ContextEventResult } from '@earendil-works/pi-coding-agent/extensions';
import type { PipaApi } from '../../../interfaces';
/**
 * Colapsa no contexto LLM as notificações (nudges) customizadas duplicadas:
 * identidade = `customType` + hash do conteúdo, último vence, mantendo 1 resumo
 * consolidado (padrão TaskGuard — nunca sumir silencioso).
 *
 * Idempotente e sem estado: afeta apenas o que vai ao LLM; a session permanece append-only.
 */
export declare class ReminderCleaner {
    clean(event: ContextEvent, _pipa: PipaApi): ContextEventResult | void;
}
//# sourceMappingURL=reminder-cleaner.d.ts.map