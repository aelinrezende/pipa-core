import { PipaBaseFeature } from '../../features/base-feature';
import { PipaApi } from '../../interfaces';
type Constructor = new (pipa: PipaApi, ...args: any[]) => PipaBaseFeature;
export declare const MIXIN_CLASSES: unique symbol;
/**
 * Decorator para marcar uma classe como um mixin de outra classe.
 * @param mixins Mixins a serem aplicados à classe alvo.
 */
export declare function PipaMixin<L extends [Constructor, ...Constructor[]]>(...mixins: L): ClassDecorator;
/**
 * Obtém os mixins aplicados a uma classe.
 * @param target Classe alvo.
 * @returns Array de mixins aplicados à classe alvo.
 */
export declare const getMixins: (target: Constructor) => Constructor[];
export {};
//# sourceMappingURL=mixin.d.ts.map