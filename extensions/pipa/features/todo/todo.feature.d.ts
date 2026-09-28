import type { ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
/**
 * Feature principal do sistema "todo", responsável por acoplar a ferramenta (tool)
 * correspondente ao agente e gerenciar seu fluxo.
 */
export declare class TodoFeature extends PipaBaseFeature {
    private mountPipa;
    /**
     * Inicializa o suporte à ferramenta 'todo' no ecossistema do Pi.
     * Registra a tool e delega o dispatch das actions ao setToolActions (padrão backlog).
     */
    initialize(pi: ExtensionAPI): void;
}
//# sourceMappingURL=todo.feature.d.ts.map