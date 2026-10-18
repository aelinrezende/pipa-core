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
/**
 * Mensagem de progresso da ação da tool, exibida no model e na TUI (A11.2).
 * Status de execução, nunca instrução — por isso é traduzível.
 */
export declare const getTodoToolActionMessage: (action: keyof typeof TODO_TOOL_SCHEMA) => string;
//# sourceMappingURL=todo.definitions.d.ts.map