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
            outputDirectory: Type.TString;
            status: Type.TOptional<Type.TUnion<boolean[]>>;
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
            outputDirectory: Type.TOptional<Type.TString>;
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
    start: Type.TObject<{
        action: Type.TLiteral<"start">;
        id: Type.TString;
    }>;
    complete: Type.TObject<{
        action: Type.TLiteral<"complete">;
        id: Type.TString;
        artifactName: Type.TString;
        report: Type.TString;
        force: Type.TOptional<Type.TBoolean>;
    }>;
    reopen: Type.TObject<{
        action: Type.TLiteral<"reopen">;
        id: Type.TString;
        reason: Type.TString;
    }>;
    pause: Type.TObject<{
        action: Type.TLiteral<"pause">;
        id: Type.TString;
        reason: Type.TString;
    }>;
    resume: Type.TObject<{
        action: Type.TLiteral<"resume">;
        id: Type.TString;
    }>;
};
/**
 * Mensagem de status de cada ação da tool, resolvida por locale (A11.2).
 *
 * A chave é exatamente a ação de `TASK_TOOL_SCHEMA`, então adicionar ação nova
 * ao schema sem entrada no catálogo quebra o build.
 */
export declare function getTaskToolActionMessage(action: keyof typeof TASK_TOOL_SCHEMA): string;
//# sourceMappingURL=task.definitions.d.ts.map