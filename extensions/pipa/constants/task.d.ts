import type { TaskStatus } from '../features/task/task.entity';
/**
 * Dicionário de nudges padronizados para as ações da ferramenta de tarefas.
 * Define códigos e mensagens de sucesso/falha/acesso negado para cada ação.
 */
export declare const TASK_TOOL_NUDGES: {
    /**
     * Nudges relacionados à consulta de uma tarefa.
     */
    get: {
        code: string;
        readonly failed: readonly [string, "Falha durante consulta"];
    };
    /**
     * Nudges relacionados à configuração de tarefas.
     */
    setup: {
        code: string;
        readonly failed: readonly [string, "Falha durante configuração"];
        readonly denied: readonly [string, "Acesso negado para configurar"];
    };
    /**
     * Nudges relacionados à reivindicação de tarefas por colegas (subagents).
     */
    claim: {
        code: string;
        readonly failed: readonly [string, "Falha durante reivindicação"];
    };
    /**
     * Nudges relacionados à criação de novas tarefas.
     */
    instantiate: {
        code: string;
        readonly failed: readonly [string, "Falha durante criação"];
    };
    /**
     * Nudges relacionados à atualização de tarefas.
     */
    update: {
        code: string;
        readonly failed: readonly [string, "Falha durante atualização"];
        readonly denied: readonly [string, "Acesso negado para editar"];
    };
    /**
     * Nudges relacionados à remoção (deleção) de tarefas.
     */
    remove: {
        code: string;
        readonly failed: readonly [string, "Falha durante remoção"];
        readonly denied: readonly [string, "Acesso negado"];
    };
    /**
     * Nudges relacionados à marcação de uma tarefa como concluída.
     */
    complete: {
        code: string;
        readonly failed: readonly [string, "Falha durante conclusão"];
        readonly denied: readonly [string, "Acesso negado"];
    };
};
export declare const TASK_STATUS_TRANSLATIONS: Record<TaskStatus, string>;
//# sourceMappingURL=task.d.ts.map