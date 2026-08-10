import type { DocItem } from '../docs.entity';
/** Valida regras de negócio antes de operações em documentos */
export declare class DocsValidator {
    /** Verifica se o documento existe e retorna. Throw PipaException se não encontrado. */
    protected canUpdate(code: string, action?: string): DocItem;
    /** Verifica se o documento existe para remoção. */
    protected canRemove(code: string): DocItem;
    /** Verifica se o documento existe para operação select. */
    protected canSelect(code: string): DocItem;
    /** Valida dados para criação. */
    protected canCreate({ title }: Pick<DocItem, 'title'>): void;
}
//# sourceMappingURL=validator.d.ts.map