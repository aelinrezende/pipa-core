import { TSchema as BoxSchema } from 'typebox';
import { KebabToCamel, ToolActionPayload, ToolParams } from '../interfaces';
type BuildHub<TActions extends Record<string, BoxSchema>> = {
    [K in keyof TActions as KebabToCamel<K & string>]: (args: ToolActionPayload<TActions, K>) => any;
};
type SafeReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export declare const setToolActions: <TActions extends Record<string, BoxSchema>, THub extends BuildHub<TActions>, TData extends ToolParams<TActions>>(hub: THub, schema: TActions, payload: TData) => { [K in keyof TActions]: () => SafeReturnType<THub[KebabToCamel<K & string>]>; };
export {};
//# sourceMappingURL=tool.d.ts.map