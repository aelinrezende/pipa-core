import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { TodoReminders } from './hooks';
declare const TodoFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & TodoReminders, typeof PipaBaseFeature & typeof TodoReminders>;
/**
 * Feature principal do sistema "todo", responsável por acoplar a ferramenta (tool)
 * correspondente ao agente e gerenciar seu fluxo.
 */
export declare class TodoFeature extends TodoFeature_base {
    private mountPipa;
    /**
     * Inicializa o suporte à ferramenta 'todo' no ecossistema do Pi.
     * Registra a tool e delega o dispatch das actions ao setToolActions (padrão backlog).
     */
    initialize(pi: ExtensionAPI): void;
}
export {};
//# sourceMappingURL=todo.feature.d.ts.map