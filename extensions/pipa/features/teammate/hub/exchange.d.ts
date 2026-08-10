import { PipaApi } from '../../../interfaces';
import { TeammateInboxMessage, TeammateToolSchema } from '../teammate.entity';
/**
 * Mixin que fornece métodos de comunicação assíncrona (inbox) e síncrona (chat) entre agentes.
 */
export declare class TeammateExchange {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Envia mensagem assíncrona para a caixa de entrada do teammate identificado pelo sessionId.
     * @param data Payload único da action 'send-inbox'.
     */
    sendInbox({ teammateId, message }: TeammateToolSchema<'send-inbox'>): void;
    /**
     * Envia uma mensagem síncrona para o teammate identificado pelo sessionId.
     * O nudge ao destinatário é o efeito central da action (cross-agent) e é preservado.
     * @param data Payload único da action 'chat'.
     * @returns Confirmação de entrega.
     */
    chat({ teammateId, message }: TeammateToolSchema<'chat'>): {
        recipient: {
            id: string;
            name: string;
        };
        from: string;
        message: string;
        delivered: boolean;
    };
    /**
     * Lê e esvazia a caixa de entrada do teammate.
     * @returns As mensagens lidas.
     */
    readInbox(): TeammateInboxMessage[];
}
//# sourceMappingURL=exchange.d.ts.map