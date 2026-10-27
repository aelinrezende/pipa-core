import Type from 'typebox';
export declare const TEAMMATE_TOOL_SCHEMA: {
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        name: Type.TString;
        goal: Type.TString;
        parentTaskId: Type.TOptional<Type.TString>;
        outputDirectory: Type.TString;
    }>;
    list: Type.TObject<{
        action: Type.TLiteral<"list">;
    }>;
    online: Type.TObject<{
        action: Type.TLiteral<"online">;
    }>;
    'send-inbox': Type.TObject<{
        action: Type.TLiteral<"send-inbox">;
        teammateId: Type.TString;
        message: Type.TString;
    }>;
    chat: Type.TObject<{
        action: Type.TLiteral<"chat">;
        teammateId: Type.TString;
        message: Type.TString;
    }>;
    'read-inbox': Type.TObject<{
        action: Type.TLiteral<"read-inbox">;
    }>;
    dismiss: Type.TObject<{
        action: Type.TLiteral<"dismiss">;
        teammateId: Type.TString;
        reason: Type.TString;
        force: Type.TOptional<Type.TBoolean>;
    }>;
};
/**
 * Mensagem de progresso da ação da tool, exibida no model e na TUI (A11.2).
 * Status de execução, nunca instrução — por isso é traduzível.
 */
export declare const getTeammateToolActionMessage: (action: keyof typeof TEAMMATE_TOOL_SCHEMA) => string;
//# sourceMappingURL=teammate.definitions.d.ts.map