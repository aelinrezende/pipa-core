import { DOCS_TOOL_NUDGES } from '../../../constants/docs';
import type { DocItem } from '../docs.entity';
/** Valida regras de negócio antes de operações em documentos */
export declare class DocsValidator {
    /** Verifica se o documento existe e retorna. Throw PipaException se não encontrado. */
    protected canUpdate(code: string, action?: Exclude<keyof typeof DOCS_TOOL_NUDGES, 'publish'>): DocItem;
    /** Verifica se o documento existe para remoção. */
    protected canRemove(code: string): DocItem;
    /** Verifica se o documento existe para operação select. */
    protected canSelect(code: string): DocItem;
    /** Valida dados para criação. */
    protected canCreate({ title, parentCode }: Pick<DocItem, 'title' | 'parentCode'>): void;
    /**
     * Valida reparent: pai deve existir e não pode ser descendente do próprio documento.
     * parentCode vazio/undefined torna o documento raiz (sem pai).
     */
    protected assertParentValid(code: string, parentCode?: string): void;
}
//# sourceMappingURL=validator.d.ts.map