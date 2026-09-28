import { type ExtensionAPI } from '@earendil-works/pi-coding-agent';
import { type PipaApi } from '../interfaces';
type Dependencies = {
    [dependency: string]: {
        retrieve: () => any;
        dependencies?: Dependencies;
    };
};
export declare abstract class PipaBaseFeature {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Método de inicialização da feature, chamado uma vez durante o setup da extensão.
     *
     * @returns Um objeto contendo as dependências da feature, caso existam, ou void caso não haja dependências.
     */
    initialize?(pi: ExtensionAPI): Promise<void | Dependencies> | void | Dependencies;
}
export type PipaBaseFeatureConstructor = new (pipa: PipaApi) => PipaBaseFeature;
export declare function visitDependencies(dependencies: Dependencies, visit: (name: string, dependency: Dependencies[string]) => void): void;
export {};
//# sourceMappingURL=base-feature.d.ts.map