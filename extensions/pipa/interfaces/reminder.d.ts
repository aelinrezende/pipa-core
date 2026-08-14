import type { AgentMessage } from '@earendil-works/pi-agent-core';
/**
 * Contrato de mensagem customizada que representa uma notificação (nudge) oculta
 * (`display: false`) — alvo de limpeza do ReminderCleaner.
 */
export type CustomMessageLike = AgentMessage & {
    role: 'custom';
    customType: string;
    content: string | readonly {
        type: 'text';
        text: string;
    }[];
    display: boolean;
};
//# sourceMappingURL=reminder.d.ts.map