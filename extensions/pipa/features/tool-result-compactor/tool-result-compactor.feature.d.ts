import { PipaBaseFeature } from '../base-feature';
import { ToolResultCompactor } from './hooks/compactor';
declare const ToolResultCompactorFeature_base: import("ts-mixer/dist/types/types").Class<any[], PipaBaseFeature & ToolResultCompactor, typeof PipaBaseFeature & typeof ToolResultCompactor>;
/**
 * Feature de higiene de contexto: substitui o conteúdo de tool results antigos e volumosos
 * por um stub com caminho de arquivo, realizando micro-compactações periódicas sem intervenção
 * do usuário.
 */
export declare class ToolResultCompactorFeature extends ToolResultCompactorFeature_base {
}
export {};
//# sourceMappingURL=tool-result-compactor.feature.d.ts.map