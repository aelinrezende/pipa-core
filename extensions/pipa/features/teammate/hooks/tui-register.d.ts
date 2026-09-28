import type { PipaApi } from '../../../interfaces';
import { PipaBaseFeature } from '../../base-feature';
import { TeammateRepository } from '../teammate.repository';
/**
 * Hook para registrar o widget TUI de gerenciamento de teammates.
 */
export declare class TeammateTuiRegister extends PipaBaseFeature {
    readonly pipa: PipaApi;
    protected readonly repo: TeammateRepository;
    constructor(pipa: PipaApi, repo: TeammateRepository);
    initialize(): void;
}
//# sourceMappingURL=tui-register.d.ts.map