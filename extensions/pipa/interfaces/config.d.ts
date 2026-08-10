/** Configurações dos gatilhos e modelos para alternância automática. */
export interface PipaTeammateCyclingConfig {
    /** Gatilhos para alternância: 'error' e/ou 'concurrency'. */
    events: ('error' | 'concurrency')[];
    /** Model IDs para alternar. Se vazio, a alternância do Pi é usada. */
    models: string[];
}
/** Configurações de comportamento e limites do agente na extensão Pipa. */
export interface PipaTeammateConfig {
    /**
     * Define como as notificações (nudges) interrompem ou direcionam o agente.
     * 'steer': guia o agente sem abortar a geração atual.
     * 'abort': cancela a geração em andamento e força o agente a processar a notificação.
     */
    nudgeMode: 'steer' | 'abort';
    /** Se verdadeiro, oculta a exibição das chamadas de ferramentas no terminal/interface. */
    hideTools: boolean;
    /** Se verdadeiro, oculta o nome do modelo sendo utilizado pelo teammate. */
    hideModelName: boolean;
    /** Lista de IDs de modelos que podem ser usados concorrentemente por múltiplos teammates. */
    concurrentlyModels: string[];
    /** Configuração de alternância de modelo. */
    cycling: PipaTeammateCyclingConfig;
}
/** Configurações da exibição de tarefas. */
export interface PipaTasksConfig {
    /** Número máximo de tarefas visíveis/listadas simultaneamente na interface. */
    maxVisible: number;
}
/** Configuração principal do pipa.jsonl. */
export interface PipaConfig {
    /** Opções e comportamentos dos agentes da equipe. */
    teammate: PipaTeammateConfig;
    /** Opções visuais do painel de tarefas. */
    tasks: PipaTasksConfig;
}
//# sourceMappingURL=config.d.ts.map