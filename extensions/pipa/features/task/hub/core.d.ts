import { PipaApi } from '../../../interfaces';
import { Task, TaskToolSchema } from '../task.entity';
import { TaskState } from './state';
import { TaskValidator } from './validator';
declare const TaskCore_base: import("ts-mixer/dist/types/types").Class<any[], TaskValidator & TaskState, typeof TaskValidator & typeof TaskState>;
/**
 * Mixin central de operações e regras de negócio para tarefas no TaskHub.
 */
export declare class TaskCore extends TaskCore_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Obtém os detalhes de uma tarefa específica pelo seu ID.
     * @param data Payload único da action 'get'.
     * @returns A tarefa encontrada.
     * @throws PipaException quando o ID não existe.
     */
    get({ id }: TaskToolSchema<'get'>): Task;
    /**
     * Lista as tarefas do quadro, com suporte a filtro opcional por status.
     * @param data Payload único da action 'list'.
     * @returns A lista de tarefas.
     */
    list({ status }: TaskToolSchema<'list'>): Task[];
    /**
     * Inicializa uma nova tarefa com metadados básicos e a marca como em andamento.
     * @param data Payload único da action 'setup'.
     * @returns A tarefa configurada.
     */
    setup({ id, updates }: TaskToolSchema<'setup'>): Task;
    /**
     * Atualiza os metadados de uma tarefa existente.
     * @param data Payload único da action 'update'.
     * @returns A tarefa atualizada.
     */
    update({ id, updates }: TaskToolSchema<'update'>): Task;
    /**
     * Remove permanentemente uma tarefa do quadro de pendências.
     * @param data Payload único da action 'remove'.
     */
    remove({ id, force }: TaskToolSchema<'remove'>): void;
    /**
     * Reivindica e associa uma tarefa ao subagente atual, colocando-a em andamento.
     * @param data Payload único da action 'claim'.
     * @returns A tarefa reivindicada.
     */
    claim({ id }: TaskToolSchema<'claim'>): Task;
    /**
     * Conclui uma tarefa, sinalizando seu encerramento e notificando o supervisor.
     * @param data Payload único da action 'complete'.
     * @returns A tarefa concluída.
     */
    complete({ id, artifactFile, force }: TaskToolSchema<'complete'>): Task;
    /**
     * Proativamente avisa subagentes que estão ociosos sobre novas tarefas disponíveis.
     */
    notifyEligibleIdleTeammates(): void;
}
export {};
//# sourceMappingURL=core.d.ts.map