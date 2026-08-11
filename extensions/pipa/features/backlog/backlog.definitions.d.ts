import Type from 'typebox';
export declare const BACKLOG_TOOL_SCHEMA: {
    /** Cria novo item no backlog com parâmetros diretos */
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        title: Type.TString;
        type: Type.TUnion<[Type.TLiteral<import("./backlog.entity").BacklogItemType>, ...Type.TLiteral<import("./backlog.entity").BacklogItemType>[]]>;
        priority: Type.TUnion<[Type.TLiteral<import("./backlog.entity").BacklogPriority>, ...Type.TLiteral<import("./backlog.entity").BacklogPriority>[]]>;
        domain: Type.TOptional<Type.TArray<Type.TUnion<[Type.TLiteral<import("./backlog.entity").BacklogDomain>, ...Type.TLiteral<import("./backlog.entity").BacklogDomain>[]]>>>;
        parentCode: Type.TOptional<Type.TString>;
        tags: Type.TOptional<Type.TArray<Type.TString>>;
        metadata: Type.TOptional<Type.TRecord<"^.*$", Type.TUnknown>>;
        body: Type.TString;
    }>;
    /** Lista itens do backlog com filtro, ordenação e limite */
    list: Type.TObject<{
        action: Type.TLiteral<"list">;
        status: Type.TOptional<Type.TUnion<[Type.TLiteral<import("./backlog.entity").BacklogStatus>, ...Type.TLiteral<import("./backlog.entity").BacklogStatus>[]]>>;
        type: Type.TOptional<Type.TUnion<[Type.TLiteral<import("./backlog.entity").BacklogItemType>, ...Type.TLiteral<import("./backlog.entity").BacklogItemType>[]]>>;
        sort: Type.TOptional<Type.TObject<{
            field: Type.TUnion<[Type.TLiteral<"updatedAt" | "order">, ...Type.TLiteral<"updatedAt" | "order">[]]>;
            order: Type.TUnion<[Type.TLiteral<"ASC" | "DESC">, ...Type.TLiteral<"ASC" | "DESC">[]]>;
        }>>;
        limit: Type.TOptional<Type.TNumber>;
    }>;
    /** Atualiza metadados YAML de um item do backlog */
    'update-frontmatter': Type.TObject<{
        action: Type.TLiteral<"update-frontmatter">;
        code: Type.TString;
        field: Type.TUnion<[Type.TLiteral<"type" | "title" | "createdAt" | "updatedAt" | "tags" | "parentCode" | "body" | "order" | "code" | "status" | "priority" | "domain">, ...Type.TLiteral<"type" | "title" | "createdAt" | "updatedAt" | "tags" | "parentCode" | "body" | "order" | "code" | "status" | "priority" | "domain">[]]>;
        value: Type.TString;
    }>;
    /** Manipula o corpo markdown de um item do backlog */
    'update-body': Type.TObject<{
        action: Type.TLiteral<"update-body">;
        code: Type.TString;
        mode: Type.TUnion<[Type.TLiteral<"append">, Type.TLiteral<"replace">, Type.TLiteral<"set">]>;
        value: Type.TString;
        replacement: Type.TOptional<Type.TString>;
    }>;
    /** Faz merge de dados livres (metadata) em um item do backlog */
    'update-metadata': Type.TObject<{
        action: Type.TLiteral<"update-metadata">;
        code: Type.TString;
        metadata: Type.TRecord<"^.*$", Type.TUnknown>;
    }>;
    /** Busca item do backlog por título, código ou tags */
    select: Type.TObject<{
        action: Type.TLiteral<"select">;
        query: Type.TOptional<Type.TString>;
    }>;
    /** Remove item do backlog por código */
    remove: Type.TObject<{
        action: Type.TLiteral<"remove">;
        code: Type.TString;
    }>;
};
export declare const BACKLOG_TOOL_ACTIONS_MESSAGE: {
    list: string;
    instantiate: string;
    'update-frontmatter': string;
    'update-body': string;
    'update-metadata': string;
    select: string;
    remove: string;
};
//# sourceMappingURL=backlog.definitions.d.ts.map