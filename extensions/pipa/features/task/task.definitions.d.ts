import Type from 'typebox';
export declare const TASK_TOOL_SCHEMA: {
    instantiate: Type.TObject<{
        action: Type.TLiteral<"instantiate">;
        task: Type.TObject<{
            name: Type.TString;
            description: Type.TString;
            blockedBy: Type.TArray<Type.TObject<{
                id: Type.TString;
                type: Type.TUnion<boolean[]>;
            }>>;
            parentTaskId: Type.TOptional<Type.TString>;
            squad: Type.TOptional<Type.TString>;
        }>;
    }>;
    get: Type.TObject<{
        action: Type.TLiteral<"get">;
        id: Type.TString;
    }>;
    setup: Type.TObject<{
        action: Type.TLiteral<"setup">;
        id: Type.TString;
        updates: Type.TObject<{
            blockedBy: Type.TOptional<Type.TArray<Type.TObject<{
                id: Type.TString;
                type: Type.TUnion<boolean[]>;
            }>>>;
            name: Type.TOptional<Type.TString>;
            parentTaskId: Type.TOptional<Type.TString>;
        }>;
    }>;
    update: Type.TObject<{
        action: Type.TLiteral<"update">;
        id: Type.TString;
        updates: Type.TObject<{
            name: Type.TOptional<Type.TString>;
            description: Type.TOptional<Type.TString>;
            blockedBy: Type.TOptional<Type.TArray<Type.TObject<{
                id: Type.TString;
                type: Type.TUnion<boolean[]>;
            }>>>;
            parentTaskId: Type.TOptional<Type.TString>;
            squad: Type.TOptional<Type.TString>;
        }>;
    }>;
    list: Type.TObject<{
        action: Type.TLiteral<"list">;
        status: Type.TOptional<Type.TUnion<boolean[]>>;
    }>;
    remove: Type.TObject<{
        action: Type.TLiteral<"remove">;
        id: Type.TString;
        force: Type.TOptional<Type.TBoolean>;
    }>;
    claim: Type.TObject<{
        action: Type.TLiteral<"claim">;
        id: Type.TString;
    }>;
    complete: Type.TObject<{
        action: Type.TLiteral<"complete">;
        id: Type.TString;
        artifactFile: Type.TString;
        force: Type.TOptional<Type.TBoolean>;
    }>;
    reopen: Type.TObject<{
        action: Type.TLiteral<"reopen">;
        id: Type.TString;
    }>;
    pause: Type.TObject<{
        action: Type.TLiteral<"pause">;
        id: Type.TString;
    }>;
    resume: Type.TObject<{
        action: Type.TLiteral<"resume">;
        id: Type.TString;
    }>;
    'list-by-squad': Type.TObject<{
        action: Type.TLiteral<"list-by-squad">;
        squad: Type.TString;
    }>;
    'squad-status': Type.TObject<{
        action: Type.TLiteral<"squad-status">;
        squad: Type.TString;
    }>;
};
export declare const TASK_TOOL_ACTIONS_MESSAGE: Record<keyof typeof TASK_TOOL_SCHEMA, string>;
//# sourceMappingURL=task.definitions.d.ts.map