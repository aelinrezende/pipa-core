import { Api, Model } from '@earendil-works/pi-ai';
import type { EventBus, ExtensionAPI, ExtensionContext } from '@earendil-works/pi-coding-agent';
import type { ToastService } from '../core/toast';
export interface PipaApi extends Pick<ExtensionAPI, 'registerTool' | 'sendMessage' | 'appendEntry' | 'getAllTools'> {
    events: EventBus;
    context: ExtensionContext;
    sessionId: string;
    toast: ToastService;
    /**
     * Envia uma notificação para o agente, podendo ser usada para solicitar ações ou informar sobre eventos.
     * @param action Ação ou tipo da notificação, que pode ser usada para categorizar ou identificar a mensagem.
     * @param message Conteúdo da mensagem para o usuário.
     * @param details Informações adicionais enviadas para o agente (não exibida no terminal)
     */
    nudge(action: string, message: string | string[] | undefined, details?: any): void;
    /**
     * Alterna para o próximo modelo disponível em `cycling.models`, respeitando `concurrentlyModels`
     * e os modelos já em uso por outros teammates. Não faz nada se `cycling.models` estiver vazio
     * ou se todos os candidatos estiverem ocupados.
     */
    cycleModel(): Promise<void>;
    /**
     * Retorna o primeiro modelo livre baseado nas configurações de cycling e concorrência,
     * ou faz fallback para o modelo fornecido.
     */
    getAvailableModel(fallbackModel: Model<Api>): Model<Api>;
}
//# sourceMappingURL=pipa.d.ts.map