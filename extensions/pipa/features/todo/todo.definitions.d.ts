import Type from 'typebox';
export declare const TODO_TOOL_SCHEMA: {
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        item: Type.TString;
    }>;
    update: Type.TObject<{
        action: Type.TLiteral<"update">;
        id: Type.TString;
        status: Type.TOptional<Type.TUnion<boolean[]>>;
        text: Type.TOptional<Type.TString>;
    }>;
    remove: Type.TObject<{
        action: Type.TLiteral<"remove">;
        id: Type.TString;
    }>;
    list: Type.TObject<{
        action: Type.TLiteral<"list">;
    }>;
    clear: Type.TObject<{
        action: Type.TLiteral<"clear">;
    }>;
};
export declare const TODO_TOOL_ACTIONS_MESSAGE: {
    instantiate: string;
    update: string;
    remove: string;
    list: string;
    clear: string;
};
//# sourceMappingURL=todo.definitions.d.ts.map