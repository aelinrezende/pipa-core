import { Teammate, TeammateFrontmatter } from '../teammate.entity';
/**
 * Mixin que fornece métodos de validação de negócios para o TeammateHub.
 * Isola as lógicas complexas de permissão, estado e checagem de erros.
 */
export declare class TeammateValidator {
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