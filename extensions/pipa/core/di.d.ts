import { IPipaProvidersContainer } from '../interfaces/di';
declare global {
    var providers: IPipaProvidersContainer;
}
declare class PipaProvidersContainer extends IPipaProvidersContainer {
    readonly providers: Map<string | symbol, unknown>;
    register<T>(token: string | symbol, provider: T): T;
    resolve<T>(token: string | symbol): T;
    has(token: string | symbol): boolean;
}
export declare const container: PipaProvidersContainer;
export {};
//# sourceMappingURL=di.d.ts.map