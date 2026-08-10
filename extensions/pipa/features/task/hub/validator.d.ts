import { Teammate } from '../../teammate/teammate.entity';
import { Dependency, Task } from '../task.entity';
/**
 * Mixin que fornece métodos de validação de negócios para o TaskHub.
 * Isola as lógicas complexas de permissão, estado e checagem de erros.
 */
export declare class TaskValidator {
    /**
     * Valida unicidade de nome da tarefa.
     */
    private validateUniqueName;
    /**
     * Valida integridade de dependências (anti-órfão).
     */
    private validateAntiOrphan;
    /**
     * Valida se uma nova tarefa pode ser criada.
     * Verifica unicidade do nome para evitar duplicidades de escopo.
     * Verifica integridade de referências (anti-órfãos).
     */
    protected canCreate(taskName: string, blockedBy?: Dependency[]): void;
    /**
     * Valida se uma tarefa pode receber a ação de setup.
     * Aceita setup apenas de tarefas que estão no status 'setup'.
     */
    protected canSetup(id: string, updates: Partial<Task>, teammate: Teammate): Task;
    /**
     * Valida se uma tarefa pode ser atualizada pelo teammate.
     */
    protected canUpdate(id: string, updates: Partial<Task>, teammate: Teammate): Task;
    /**
     * Valida se uma tarefa pode ser removida pelo teammate.
     * Verifica se a tarefa existe e se o usuário tem permissão para forçar a remoção caso esteja em andamento.
     */
    protected canRemove(id: string, teammate: Teammate, force?: boolean): Task;
    /**
     * Valida se uma tarefa pode ser reivindicada pelo teammate.
     * Verifica o estado pendente da tarefa, se o solicitante é elegível (criador online → self-only;
     * criador offline → fallback via role) e se existem dependências hard não concluídas.
     */
    protected canClaim(id: string, teammate: Teammate): Task;
    /**
     * Valida se uma tarefa pode ser concluída.
     * Verifica a existência da tarefa, exigência do artefato, se o usuário
     * é o dono da tarefa (ou supervisor/main no caso de force) e subtarefas.
     * A orientação de force só é exibida para main (não-main não pode usar force).
     */
    protected canComplete(id: string, teammate: Teammate, artifactFile?: string, force?: boolean): Task;
}
//# sourceMappingURL=validator.d.ts.map