export declare const TASK_TOOL_NUDGES: {
    /**
     * Nudges relacionados à consulta de uma tarefa.
     */
    get: {
        code: string;
        readonly failed: readonly [string, string];
    };
    /**
     * Nudges relacionados à configuração de tarefas.
     */
    setup: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
    /**
     * Nudges relacionados ao início de tarefas atribuídas.
     */
    start: {
        code: string;
        readonly failed: readonly [string, string];
    };
    /**
     * Nudges relacionados à criação de novas tarefas.
     */
    instantiate: {
        code: string;
        readonly failed: readonly [string, string];
    };
    /**
     * Nudges relacionados à atualização de tarefas.
     */
    update: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
    /**
     * Nudges relacionados à remoção (deleção) de tarefas.
     */
    remove: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
    /**
     * Nudges relacionados à reabertura de uma tarefa concluída.
     */
    reopen: {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    /**
     * Nudges relacionados à pausa de uma tarefa em andamento.
     */
    pause: {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    /**
     * Nudges relacionados à retomada de uma tarefa pausada.
     */
    resume: {
        code: string;
        readonly failed: readonly [string, string];
        readonly success: readonly [string, string];
    };
    /**
     * Nudges relacionados à marcação de uma tarefa como concluída.
     */
    complete: {
        code: string;
        readonly failed: readonly [string, string];
        readonly denied: readonly [string, string];
    };
};
//# sourceMappingURL=task.d.ts.map