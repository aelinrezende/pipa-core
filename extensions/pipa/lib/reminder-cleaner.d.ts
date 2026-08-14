import type { AgentMessage } from '@earendil-works/pi-agent-core';
import type { CustomMessageLike } from '../interfaces';
/**
 * Type guard: identifica notificações (nudges) customizadas com exibição oculta (`display: false`).
 */
export declare const isCustomReminder: (message: AgentMessage) => message is CustomMessageLike;
/**
 * Verifica se um `customType` pertence a um namespace de tool-result (`task.`, `teammates.`,
 * `docs.`, `backlog.`, `todo.`) — nudge que duplica o toolResult já presente no contexto.
 */
export declare const hasToolResultNamespace: (customType: string) => boolean;
//# sourceMappingURL=reminder-cleaner.d.ts.map