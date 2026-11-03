/**
 * Gera instruções de lembrete para tarefas pendentes.
 * @param tasks Lista de tarefas pendentes.
 * @param supervisorId ID do supervisor, se disponível.
 * @returns Objeto contendo a mensagem e as instruções.
 */
export declare function pendingTaskReminder(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): {
    message: string;
    instructions: string[];
};
export declare const COMPLETION_REPORT_INSTRUCTION: string;
/**
 * Gera instruções de lembrete para tarefas em andamento.
 * @param tasks Lista de tarefas em andamento.
 * @param supervisorId ID do supervisor, se disponível.
 * @returns Objeto contendo a mensagem e as instruções.
 */
export declare function reminderSupervisorInstruction(supervisorId?: string): string;
/**
 * Gera instruções de lembrete para tarefas em andamento.
 * @param tasks Lista de tarefas em andamento.
 * @param supervisorId ID do supervisor, se disponível.
 * @returns Objeto contendo a mensagem e as instruções.
 */
export declare function inProgressReminderInstructions(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): string[];
/**
 * Gera instruções de lembrete para tarefas pendentes.
 * @param tasks Lista de tarefas pendentes.
 * @param supervisorId ID do supervisor, se disponível.
 * @returns Objeto contendo a mensagem e as instruções.
 */
export declare function pendingReminderInstructions(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): string[];
//# sourceMappingURL=prompts.d.ts.map