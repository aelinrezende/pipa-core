import Type from 'typebox';
export declare function LiteralUnion<T extends string>(values: T[], options?: {
    description?: string;
}): Type.TUnion<[Type.TLiteral<T>, ...Type.TLiteral<T>[]]>;
//# sourceMappingURL=typebox.d.ts.map