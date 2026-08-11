import { BaseClass, PipaApi } from '../../../interfaces';
import { FileManager } from '../../../lib';
import { Teammate } from '../../teammate/teammate.entity';
import { Task } from '../task.entity';
export declare class TaskState {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    static get fileManager(): FileManager<Task[]>;
    /**
     * Recupera a store de tarefas.
     */
    private static get store();
    /**
     * Carrega as tarefas persistidas em disco para a store em memória.
     * O diretório é o da sessão principal (~/.pi/tasks/<sessionId-do-main>/tasks.json).
     */
    static load(): void;
    /**
     * Salva silenciosamente o estado atual para o disco em JSON.
     */
    private static persist;
    /**
     * Adiciona uma nova tarefa à store e retorna a tarefa criada.
     */
    static add(task: BaseClass<Task>): Task;
    /**
     * Atualiza os dados de uma tarefa existente na store e retorna a tarefa atualizada.
     */
    static update(id: string, data: Partial<Task>): Task;
    /**
     * Recupera uma tarefa da store pelo id.
     * Lança um erro se a tarefa não for encontrada.
     */
    static get(id: string): Task;
    /**
     * Recupera uma tarefa da store pelo id.
     */
    static find(id: string): Task | undefined;
    /**
     * Lista todas as tarefas atualmente armazenadas.
     */
    static list(sessionId?: string): Task[];
    /**
     * Busca tarefas que atendam a um predicado.
     */
    static search(filter: (task: Task) => boolean): Task[];
    /**
     * Busca a primeira tarefa que atenda a um predicado.
     */
    static findOne(filter: (task: Task) => boolean): Task | undefined;
    /**
     * Remove uma tarefa da store pelo id.
     */
    static delete(id: string): void;
    /**
     * Limpa o cache de tarefas em memória.
     */
    static clear(): void;
    /**
     * Verifica se uma tarefa não possui nenhum bloqueio pendente.
     * Bloqueios do tipo 'hard' exigem que a tarefa dependente esteja concluída.
     * Bloqueios do tipo 'soft' apenas sinalizam a pendência.
     */
    static isUnblocked(task: Task): boolean;
    /**
     * Verifica se um teammate é elegível para uma tarefa.
     * Criador online → self-only por sessão. Criador offline → fallback via nome do teammate (role).
     */
    static isEligibleForTask(task: Task, teammate: Teammate): boolean;
    /**
     * Lista todas as tarefas livres (pending, sem owner) e não bloqueadas.
     */
    static listAvailable(): Task[];
    /**
     * Lista todas as tarefas atribuídas a um determinado teammate.
     */
    static listByOwner(sessionId: string): Task[];
    /**
     * Lista todas as tarefas que estão ativas (em andamento ou em setup).
     */
    static listActive(): Task[];
    /**
     * Verifica se um determinado teammate possui uma tarefa ativa (em andamento ou em setup).
     */
    static hasActiveTask(sessionId: string): boolean;
    /**
     * Retorna a task de setup ou em andamento de um agente, ou undefined.
     */
    static getActiveTask(sessionId: string): Task | undefined;
    /**
     * Retorna as dependências "hard" não concluídas de uma tarefa.
     */
    static getUncompletedHardDependencies(task: Task): Task[];
    /**
     * Verifica se há alguma dependência "hard" pendente.
     */
    static hasUncompletedHardDependency(task: Task): boolean;
    /**
     * Sincroniza o status de uma tarefa pai com base nas suas filhas.
     * Retorna true se o status foi alterado.
     */
    static syncParentStatus(parentId: string): boolean;
}
//# sourceMappingURL=state.d.ts.map