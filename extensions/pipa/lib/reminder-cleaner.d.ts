import type { AgentMessage } from '@earendil-works/pi-agent-core';
import type { CustomMessageLike } from '../interfaces';
/**
 * Type guard: identifica notificações (nudges) customizadas com exibição oculta (`display: false`).
 */
export declare const isCustomReminder: (message: AgentMessage) => message is CustomMessageLike;
//# sourceMappingURL=reminder-cleaner.d.ts.map