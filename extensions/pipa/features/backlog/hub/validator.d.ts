import { BACKLOG_TOOL_NUDGES } from '../../../constants/backlog';
import type { PipaApi } from '../../../interfaces';
import type { BacklogItem } from '../backlog.entity';
import { BacklogRepository } from '../backlog.repository';
/** Valida regras de negócio antes de operações no backlog */
export declare class BacklogValidator {
    readonly pipa: PipaApi;
    protected readonly repo: BacklogRepository;
    constructor(pipa: PipaApi, repo: BacklogRepository);
    /** Verifica se o item existe e retorna. Throw PipaException se não encontrado. */
    protected canUpdate(code: string, action?: Exclude<keyof typeof BACKLOG_TOOL_NUDGES, 'remove'>): BacklogItem;
    /** Verifica se o item existe para remoção. Throw PipaException se não encontrado. */
    protected canRemove(code: string): BacklogItem;
    /** Verifica se o item existe para operação select. */
    protected canSelect(code: string): BacklogItem;
    /** Valida dados para criação. Throw PipaException se inválido. */
    protected canCreate({ type, title }: Pick<BacklogItem, 'type' | 'title'>): void;
}
//# sourceMappingURL=validator.d.ts.map