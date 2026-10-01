import { TSchema as BoxSchema } from 'typebox';
import { KebabToCamel, ToolActionPayload, ToolParams } from '../interfaces';
type BuildTool<TActions extends Record<string, BoxSchema>> = {
    [K in keyof TActions as KebabToCamel<K & string>]: (args: ToolActionPayload<TActions, K>) => any;
};
type SafeReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export declare const setToolActions: <TActions extends Record<string, BoxSchema>, TTool extends BuildTool<TActions>, TData extends ToolParams<TActions>>(tool: TTool, schema: TActions, payload: TData) => { [K in keyof TActions]: () => SafeReturnType<TTool[KebabToCamel<K & string>]>; };
export {};
//# sourceMappingURL=tool.d.ts.map