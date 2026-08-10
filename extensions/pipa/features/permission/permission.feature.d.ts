import { PipaBaseFeature } from '../base-feature';
import { TerminalGuard, CustomToolsGuard } from './hooks';
declare const PermissionFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & TerminalGuard & CustomToolsGuard, typeof PipaBaseFeature & typeof TerminalGuard & typeof CustomToolsGuard>;
/**
 * Feature para controle de permissões globais e de segurança de ferramentas.
 * Deve conter apenas restrições genéricas e de segurança global do sistema.
 * Regras específicas de permissões associadas a domínios ou ciclo de vida de recursos (como tarefas ou teammates)
 * devem residir em seus respectivos hooks/features.
 */
export declare class PermissionFeature extends PermissionFeature_base {
}
export {};
//# sourceMappingURL=permission.feature.d.ts.map