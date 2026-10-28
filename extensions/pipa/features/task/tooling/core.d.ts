import type { PipaApi } from '../../../interfaces';
import { TeammateRepository } from '../../teammate/teammate.repository';
import { Task, TaskToolSchema } from '../task.entity';
import { TaskRepository } from '../task.repository';
import { TaskValidator } from './validator';
/**
 * Mixin central de operações e regras de negócio para tarefas no TaskTool.
 */
export declare class TaskCore extends TaskValidator {
    readonly pipa: PipaApi;
    protected readonly repo: TaskRepository;
    constructor(pipa: PipaApi, repo: TaskRepository, teammateRepo: TeammateRepository);
    protected notifyParentReady(parentId: string, wasReady: boolean): void;
    protected reopenParent(parentId: string): void;
    private compactTerminalSession;
    get({ id }: TaskToolSchema<'get'>): Task;
    /**
     * Lê uma tarefa pelo ID a partir do repository de tarefas.
     * @throws PipaException quando o ID não existe (ou o repo de task não está registrado).
     */
    protected task(id: string): Task;
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
     * Inicia uma tarefa pendente já atribuída ao solicitante.
     */
    start({ id }: TaskToolSchema<'start'>): Task;
    /**
     * Conclui uma tarefa, sinalizando seu encerramento e notificando o supervisor.
     * @param data Payload único da action 'complete'.
     * @returns A tarefa concluída.
     */
    complete({ id, artifactName, report, force }: TaskToolSchema<'complete'>): Promise<Task>;
    /**
     * Reopens a completed task, returning it to in-progress and notifying the owner or supervisor.
     * @param data The task ID and required reason for reopening.
     * @returns The reopened task.
     */
    reopen({ id, reason }: TaskToolSchema<'reopen'>): Task;
    /**
     * Pausa uma tarefa em andamento, movendo-a para 'stopped'.
     * Cascata no status do épico.
     * @param data Payload único da action 'pause': o ID da tarefa.
     * @returns A tarefa pausada.
     */
    pause({ id, reason }: TaskToolSchema<'pause'>): Task;
    /**
     * Retoma uma tarefa pausada, devolvendo-a para 'in-progress'.
     * Preserva o owner atual (§D13). Simétrico a 'pause'.
     * @param data Payload único da action 'resume': o ID da tarefa.
     * @returns A tarefa retomada.
     */
    resume({ id }: TaskToolSchema<'resume'>): Task;
}
//# sourceMappingURL=core.d.ts.map