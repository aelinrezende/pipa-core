import type { PipaApi } from '../../../interfaces';
import { TaskRepository } from '../../task/task.repository';
import { Teammate, TeammateFrontmatter } from '../teammate.entity';
import { TeammateRepository } from '../teammate.repository';
/**
 * Mixin que fornece métodos de validação de negócios para o TeammateTool.
 * Isola as lógicas complexas de permissão, estado e checagem de erros.
 */
export declare class TeammateValidator {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    protected readonly taskRepo: TaskRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository, taskRepo: TaskRepository);
    /**
     * Valida se um novo agente pode ser criado.
     * Verifica a existência da documentação do agente e se ele já não está rodando.
     */
    protected canSpawn(name: string, cwd: string, teammate: Teammate): TeammateFrontmatter;
    /**
     * Valida se um agente pode ser desligado.
     * Impede exclusões não autorizadas (role), de apagar o agente principal ou agentes trabalhando ativamente.
     */
    protected canDismiss(sessionId: string, parentSessionId: string, parentRole: string): {
        teammate: Teammate;
        allToDismiss: Teammate[];
    };
}
//# sourceMappingURL=validator.d.ts.map