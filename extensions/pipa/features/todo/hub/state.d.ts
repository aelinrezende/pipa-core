import type { PipaApi } from '../../../interfaces/pipa';
import { TodoItem } from '../todo.entity';
/**
 * Diretório canônico dos afazeres, DERIVADO de `sessionId` (+ identidade).
 *
 * Preserva o path histórico do workspace do agente sem consumir
 * `teammate.workspaceDir`:
 * - main: `~/.pi/sessions/<sessionId>`
 * - subagente: `~/.pi/sessions/<parentSessionId>/<sessionId>`
 *
 * Sem `parentSessionId` (identidade principal/indisponível), degrada para o
 * caminho do main — nunca inventa um caminho alternativo silencioso.
 */
export declare function todoDir(pipa: PipaApi): string;
/**
 * Mantém e gerencia a lista de afazeres dos agentes.
 *
 * O `todo` é dado **privado da sessão** (arquivo por sessão), então a fonte de
 * verdade é um repository LOCAL criado por sessão — não o registry global.
 */
export declare class TodoState {
    /** Repositories locais por sessão (a sessão é a partição natural do dado). */
    private static readonly repositories;
    /** Repository da sessão informada, criado sob demanda. */
    private static repo;
    /**
     * Carrega os afazeres persistidos em disco (todo.json do diretório derivado
     * de `sessionId`) para o repository da sessão, substituindo os itens atuais.
     */
    static load(pipa: PipaApi): void;
    /**
     * Adiciona um novo item ao repository da sessão.
     */
    static add(pipa: PipaApi, item: TodoItem): TodoItem;
    /**
     * Atualiza parcialmente um item existente no repository da sessão.
     */
    static update(pipa: PipaApi, id: string, data: Partial<TodoItem>): TodoItem | undefined;
    /**
     * Remove permanentemente um item do repository da sessão através de seu ID.
     */
    static delete(pipa: PipaApi, id: string): void;
    /**
     * Limpa integralmente a lista de afazeres do repository da sessão.
     */
    static clear(pipa: PipaApi): void;
    /**
     * Recupera os itens atuais da lista de afazeres da sessão.
     */
    static list(sessionId: string): TodoItem[];
    /**
     * Obtém um item específico da lista de afazeres por seu ID.
     */
    static get(sessionId: string, id: string): TodoItem | undefined;
}
//# sourceMappingURL=state.d.ts.map