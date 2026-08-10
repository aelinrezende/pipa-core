import { Task } from '../task/task.entity';
/**
 * Gera o prompt de squad para o spawned.
 * @param squad O squad herdado pela tarefa atual (se houver).
 * @param epics A lista de tarefas que possuem squad.
 */
export declare function getSquadPrompt(squad?: string, epics?: Task[]): string;
export declare const PIPA_AGENTS_PROMPT: {
    main: string;
    subagent: string;
};
export declare const TEAMMATE_SPAWN_PROMPT: string;
//# sourceMappingURL=prompts.d.ts.map