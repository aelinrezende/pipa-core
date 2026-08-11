import Type from 'typebox';
export declare const DOCS_SORT_FIELDS: string[];
export declare const DOCS_SORT_ORDERS: string[];
export declare const DOCS_FRONTMATTER_FIELDS: string[];
export declare const DOCS_TOOL_SCHEMA: {
    /** Cria novo documento */
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        title: Type.TString;
        parentCode: Type.TOptional<Type.TString>;
        tags: Type.TOptional<Type.TArray<Type.TString>>;
        metadata: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
        body: Type.TString;
    }>;
    /** Lista documentos */
    list: Type.TObject<{
        action: Type.TLiteral<"list">;
        tags: Type.TOptional<Type.TArray<Type.TString>>;
        sort: Type.TOptional<Type.TObject<{
            field: Type.TUnion<[Type.TLiteral<string>, ...Type.TLiteral<string>[]]>;
            order: Type.TUnion<[Type.TLiteral<string>, ...Type.TLiteral<string>[]]>;
        }>>;
        limit: Type.TOptional<Type.TNumber>;
    }>;
    /** Atualiza frontmatter (título/tags) */
    'update-frontmatter': Type.TObject<{
        action: Type.TLiteral<"update-frontmatter">;
        code: Type.TString;
        field: Type.TUnion<[Type.TLiteral<string>, ...Type.TLiteral<string>[]]>;
        value: Type.TUnion<[Type.TString, Type.TArray<Type.TString>]>;
    }>;
    /** Atualiza conteúdo */
    'update-body': Type.TObject<{
        action: Type.TLiteral<"update-body">;
        code: Type.TString;
        mode: Type.TUnion<[Type.TLiteral<"append">, Type.TLiteral<"replace">, Type.TLiteral<"set">]>;
        value: Type.TString;
        replacement: Type.TOptional<Type.TString>;
    }>;
    /** Busca documentos via fuzzy search */
    select: Type.TObject<{
        action: Type.TLiteral<"select">;
        query: Type.TString;
    }>;
    /** Remove documento */
    remove: Type.TObject<{
        action: Type.TLiteral<"remove">;
        code: Type.TString;
    }>;
    /** Publica site estático via retypeapp */
    publish: Type.TObject<{
        action: Type.TLiteral<"publish">;
    }>;
};
export declare const DOCS_TOOL_ACTIONS_MESSAGE: {
    instantiate: string;
    list: string;
    'update-frontmatter': string;
    'update-body': string;
    select: string;
    remove: string;
    publish: string;
};
//# sourceMappingURL=docs.definitions.d.ts.map