export declare function pendingTaskReminder(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): {
    message: string;
    instructions: string[];
};
export declare const COMPLETION_REPORT_INSTRUCTION: string;
export declare function reminderSupervisorInstruction(supervisorId?: string): string;
export declare function inProgressReminderInstructions(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): string[];
export declare function pendingReminderInstructions(tasks: {
    id: string;
    name: string;
}[], supervisorId?: string): string[];
//# sourceMappingURL=prompts.d.ts.map