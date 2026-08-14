import Type from 'typebox';
export declare const TEAMMATE_TOOL_SCHEMA: {
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        name: Type.TString;
        goal: Type.TString;
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
    }>;
};
export declare const TEAMMATE_TOOL_ACTIONS_MESSAGE: {
    instantiate: string;
    list: string;
    online: string;
    chat: string;
    'send-inbox': string;
    'read-inbox': string;
    dismiss: string;
};
//# sourceMappingURL=teammate.definitions.d.ts.map