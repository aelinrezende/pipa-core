/**
 * Catálogo pt-BR centralizado da extensão.
 *
 * Um arquivo por locale, com uma chave de topo por feature (`task`, ...). Todo
 * dot-path entregue a `t()` carrega o prefixo da feature, então N features
 * convivem no mesmo arquivo sem colisão de chave.
 *
 * Cobre as superfícies de leitor humano da feature `task`: widget `task-tree` e
 * status, mais as mensagens de status de tool (A11.2).
 *
 * Fora daqui de propósito: `description` de tool schema, `TASK_TOOL_NUDGES`,
 * `tooling/*` e `hooks/*` — instrução de agente, mantida fixa (A11, CA5).
 *
 * `label` de tool entra porque é o nome da ferramenta exibido na TUI (leitor
 * humano), não instrução ao modelo.
 *
 * O namespace `animation` guarda uma chave por palavra do spinner da TUI.
 * Palavras numeradas (`word01`..`word52`) em vez de nomeadas: o catálogo exige
 * valor `string` (não aceita array), as gírias não têm nome estável em inglês e
 * o número preserva a ordem e a paridade entre locales sem ambiguidade.
 *
 * Os valores são `string` (não literais) para que `en` reuse a forma do tipo sem
 * herdar os textos em PT.
 */
export declare const ptBR: {
    task: {
        label: string;
        widget: {
            title: string;
            empty: string;
            showMore: string;
            collapse: string;
            unassigned: string;
            blocked: string;
        };
        status: {
            'in-progress': string;
            pending: string;
            stopped: string;
            completed: string;
            setup: string;
        };
        toolActions: {
            instantiate: string;
            get: string;
            setup: string;
            start: string;
            update: string;
            list: string;
            remove: string;
            complete: string;
            reopen: string;
            pause: string;
            resume: string;
            'list-by-squad': string;
            'squad-status': string;
        };
        taskCompleted: string;
        parentTaskCompleted: string;
        parentTaskReopened: string;
        blockedDependents: string;
        taskReopenedBySupervisor: string;
        taskReopened: string;
        parentTaskPaused: string;
        taskPaused: string;
        parentTaskResumed: string;
        taskResumed: string;
        nudges: {
            get: {
                failed: string;
            };
            setup: {
                failed: string;
                denied: string;
            };
            start: {
                failed: string;
            };
            instantiate: {
                failed: string;
            };
            update: {
                failed: string;
                denied: string;
            };
            remove: {
                failed: string;
                denied: string;
            };
            reopen: {
                failed: string;
                success: string;
            };
            pause: {
                failed: string;
                success: string;
            };
            resume: {
                failed: string;
                success: string;
            };
            complete: {
                failed: string;
                denied: string;
            };
        };
        errors: {
            notFound: string;
            nameTaken: string;
            dependencyMissing: string;
            startForbidden: string;
            startBlocked: string;
            startNotPending: string;
            setupWrongStatus: string;
            updateForbidden: string;
            dependencyCycle: string;
            removeInProgress: string;
            forceForbidden: string;
            forceOnlyMain: string;
            artifactFileRequired: string;
            artifactFileNotFound: string;
            artifactFileInvalid: string;
            pauseReasonRequired: string;
            completeNotOwner: string;
            notCompleted: string;
            reopenNoOwner: string;
            reopenNotOwner: string;
            reopenReasonRequired: string;
            reopenReasonRequiredOther: string;
            notInProgress: string;
            pauseNoOwner: string;
            pauseNotOwner: string;
            notPaused: string;
            resumeNoOwner: string;
            resumeNotOwner: string;
            activeTaskRequired: string;
            uncompletedSubtasks: string;
            uncompletedSubtasksForce: string;
        };
    };
    teammate: {
        label: string;
        spawnOnline: string;
        spawnMessages: string;
        spawnGoal: string;
        status: {
            running: string;
            idle: string;
            failed: string;
            stopping: string;
            compacting: string;
        };
        toolActions: {
            instantiate: string;
            list: string;
            online: string;
            chat: string;
            'send-inbox': string;
            'read-inbox': string;
            dismiss: string;
        };
        widget: {
            title: string;
            empty: string;
            waiting: string;
            waitingShort: string;
            failedShort: string;
            lastAction: string;
            steps: string;
            dismissReason: string;
        };
        newMessage: string;
        nudges: {
            instantiate: {
                failed: string;
                denied: string;
            };
            dismiss: {
                failed: string;
                denied: string;
            };
        };
        errors: {
            teammateNotFound: string;
            notAllowedToSpawn: string;
            invalidThinking: string;
            alreadyOnline: string;
            dismissNotFound: string;
            dismissMainForbidden: string;
            dismissDenied: string;
            dismissShuttingDown: string;
            dismissWithOpenTasks: string;
        };
    };
    docs: {
        label: string;
        toolActions: {
            instantiate: string;
            list: string;
            'update-frontmatter': string;
            'update-body': string;
            'update-metadata': string;
            select: string;
            remove: string;
            publish: string;
        };
        commands: {
            publish: string;
        };
        nudges: {
            create: {
                failed: string;
                success: string;
            };
            list: {
                failed: string;
                success: string;
            };
            'update-frontmatter': {
                failed: string;
                success: string;
            };
            'update-body': {
                failed: string;
                success: string;
            };
            'update-metadata': {
                failed: string;
                success: string;
            };
            select: {
                failed: string;
                success: string;
            };
            remove: {
                failed: string;
                success: string;
            };
            publish: {
                failed: string;
                success: string;
            };
        };
        errors: {
            documentNotFound: string;
            parentNotFound: string;
            hierarchyCycle: string;
            titleTooShort: string;
            publishFailed: string;
            replacementRequired: string;
            buildStaticSiteFailed: string;
        };
    };
    permission: {
        confirm: {
            removeBacklog: string;
            removeBacklogBody: string;
            write: string;
            writeBody: string;
        };
        reason: {
            dismissed: string;
            toolNotAllowed: string;
            commandNotAllowed: string;
            noQuestions: string;
            noSpawn: string;
            onlyMainRemoves: string;
            backlogRemovalCancelled: string;
            writeCancelled: string;
            blockedCommand: string;
            policyBlocked: string;
        };
    };
    backlog: {
        label: string;
        toolActions: {
            instantiate: string;
            list: string;
            'update-frontmatter': string;
            'update-body': string;
            'update-metadata': string;
            select: string;
            remove: string;
        };
        nudges: {
            list: {
                failed: string;
                success: string;
            };
            create: {
                failed: string;
                success: string;
            };
            'update-frontmatter': {
                failed: string;
                success: string;
            };
            'update-body': {
                failed: string;
                success: string;
            };
            'update-metadata': {
                failed: string;
                success: string;
            };
            select: {
                failed: string;
                success: string;
            };
        };
        errors: {
            itemNotFound: string;
            itemNotFoundShort: string;
            invalidType: string;
            titleTooShort: string;
        };
    };
    todo: {
        label: string;
        toolActions: {
            instantiate: string;
            update: string;
            remove: string;
            list: string;
            clear: string;
        };
        nudges: {
            update: {
                failed: string;
            };
            remove: {
                failed: string;
            };
        };
        errors: {
            itemNotFound: string;
            unknownAction: string;
        };
    };
    animation: {
        word01: string;
        word02: string;
        word03: string;
        word04: string;
        word05: string;
        word06: string;
        word07: string;
        word08: string;
        word09: string;
        word10: string;
        word11: string;
        word12: string;
        word13: string;
        word14: string;
        word15: string;
        word16: string;
        word17: string;
        word18: string;
        word19: string;
        word20: string;
        word21: string;
        word22: string;
        word23: string;
        word24: string;
        word25: string;
        word26: string;
        word27: string;
        word28: string;
        word29: string;
        word30: string;
        word31: string;
        word32: string;
        word33: string;
        word34: string;
        word35: string;
        word36: string;
        word37: string;
        word38: string;
        word39: string;
        word40: string;
        word41: string;
        word42: string;
        word43: string;
        word44: string;
        word45: string;
        word46: string;
        word47: string;
        word48: string;
        word49: string;
        word50: string;
        word51: string;
        word52: string;
    };
};
/**
 * Forma do catálogo derivada do pt-BR (fonte única da verdade).
 *
 * Inferir daqui garante que todo locale declare exatamente as mesmas chaves:
 * chave faltando em `en` quebra o build por ausência de propriedade, e chave
 * extra quebra por excesso. Ver a nota sobre `string` não-literal no cabeçalho.
 */
export type CatalogShape = typeof ptBR;
//# sourceMappingURL=pt-BR.d.ts.map