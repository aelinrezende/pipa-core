import { PipaRepository } from '../../core/repository';
import { type PipaApi } from '../../interfaces';
import type { Teammate } from '../teammate/teammate.entity';
import { TeammateRepository } from '../teammate/teammate.repository';
import { Task, TaskStatus } from './task.entity';
declare module '../../interfaces/repository' {
    interface RepositoryMap {
        task: Task;
    }
}
export declare class TaskRepository extends PipaRepository<Task> {
    readonly pipa: PipaApi;
    readonly teammateRepo: TeammateRepository;
    constructor(pipa: PipaApi, teammateRepo: TeammateRepository);
    /** Remove todas as tarefas (uma a uma, para persistir cada remoção). */
    clear(): void;
    /**
     * Verifica se uma tarefa não possui bloqueio pendente.
     * Bloqueios `hard` exigem a dependente concluída; `soft` apenas sinalizam.
     * Dependência inexistente não bloqueia.
     */
    isUnblocked(task: Task): boolean;
    isEligibleForTask(task: Task, teammate: Pick<Teammate, 'sessionId' | 'name'>): boolean;
    listAvailable(): Task[];
    listByOwner(sessionId: string): Task[];
    listActive(): Task[];
    isActiveStatus(task: Task): boolean;
    /**
     * Verifica se um dono possui alguma tarefa ativa (in-progress ou setup).
     *
     * @param sessionId Sessão do dono das tarefas.
     * @param all Universo de tarefas a inspecionar.
     */
    hasActiveTask(sessionId: string): boolean;
    getActiveTask(sessionId: string): Task | undefined;
    /**
     * Lista as tarefas principais (épicos) de todos os squads em andamento ou registrados.
     */
    getActiveSquads(): Task[];
    /**
     * Retorna as dependências `hard` não concluídas de uma tarefa.
     * Dependências inexistentes são descartadas.
     */
    getUncompletedHardDependencies(task: Task): Task[];
    hasUncompletedHardDependency(task: Task): boolean;
    /**
     * Calcula o novo status de uma tarefa pai a partir das filhas.
     *
     * `allCompleted → anyInProgress → allPending`, senão mantém o status atual.
     *
     * @param parentStatus Status atual da tarefa pai.
     * @param children Filhas da tarefa pai.
     */
    resolveParentStatus(parentStatus: TaskStatus, children: Task[]): TaskStatus;
    /**
     * Sincroniza o status de uma tarefa pai com base nas suas filhas.
     * Retorna true se o status foi alterado.
     *
     * Delega a decisão à regra pura `resolveParentStatus`.
     */
    syncParentStatus(parentId: string): boolean;
}
//# sourceMappingURL=task.repository.d.ts.map