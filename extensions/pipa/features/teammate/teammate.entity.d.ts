import { AgentSession } from '@earendil-works/pi-coding-agent';
import { PiEvent } from '../../constants/pipa';
import { PipaApi } from '../../interfaces/pipa';
import { OmitGetters, ToolActionPayload, ToolParams } from '../../interfaces/common';
import { TEAMMATE_TOOL_SCHEMA } from './teammate.definitions';
export type TeammateToolParams = ToolParams<typeof TEAMMATE_TOOL_SCHEMA>;
/** Payload de cada ação da tool teammates */
export type TeammateToolSchema<K extends keyof typeof TEAMMATE_TOOL_SCHEMA> = ToolActionPayload<typeof TEAMMATE_TOOL_SCHEMA, K>;
export declare class Teammate {
    constructor(data: OmitGetters<Teammate>);
    /** Nome do agente */
    name: string;
    /** Identificador da sessão do agente */
    sessionId: string;
    /** ID da sessão (agente) pai */
    parentSessionId?: string;
    /** Status atual do agente */
    status: TeammateStatus;
    /** Último evento do agente */
    lastEvent?: PiEvent;
    /** Profundidade do agente na hierarquia (0 para o agente principal) */
    depth: number;
    /** Papel do agente (ex: "main", "subagent") */
    role: 'main' | 'subagent';
    /** Objetivo principal do agente */
    goal: string;
    /** Definição do agente (obrigatório para subagentes) */
    body?: string;
    /** Descrição do agente (obrigatória para subagentes) */
    description?: string;
    /** Metadados opcionais do agente */
    frontmatter?: TeammateFrontmatter;
    /** Instancia `PipaApi` do teammate */
    pipa?: PipaApi;
    /** Instancia `AgentSession` do teammate */
    session?: AgentSession;
    /** Diretório de arquivos (logs, inbox, resultados) do agente */
    workspaceDir: string;
    /** Diretório da sessão */
    sessionDir?: string;
    /** Timestamp de quando o agente começou */
    startedAt: number;
    /** Timestamp de quando o agente foi ativado pela última vez */
    lastActiveAt: number;
    /** Nome da última ferramenta utilizada */
    lastTool?: string;
    /** Indica se o agente foi montado */
    eventsMountMap?: Record<string, boolean>;
    /** Indica se o agente está rodando */
    get isRunning(): boolean;
}
export type TeammateStatus = 'running' | 'idle' | 'failed';
export interface TeammateFrontmatter {
    name: string;
    description: string;
    body: string;
    spawnableTeammates?: Record<string, string>;
}
export type TeammatesStore = Map<string, Teammate>;
export interface TeammateInboxMessage {
    from: string;
    content: string;
    timestamp: number;
}
export declare const TeammateStatusEmojis: Record<TeammateStatus, string>;
//# sourceMappingURL=teammate.entity.d.ts.map