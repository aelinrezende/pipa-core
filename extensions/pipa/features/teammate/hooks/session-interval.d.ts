import type { Teammate, TeammateStatus } from '../teammate.entity';
/**
 * Registra intervalos periódicos vinculados a uma sessão Pi e centraliza o cleanup.
 * Pensado para hooks que reagem a eventos em cadência fixa (ex.: polling de inbox).
 */
export declare class SessionIntervalRegistry {
    private readonly intervals;
    /**
     * Executa callback a cada intervalMs, independentemente de existir teammate.
     *
     * @param intervalMs Intervalo entre execuções, em milissegundos.
     * @param callback Função invocada a cada tick.
     */
    every(intervalMs: number, callback: () => void): void;
    /**
     * Executa callback a cada intervalMs somente quando houver teammate para sessionId.
     *
     * @param sessionId Identificador da sessão Pi monitorada.
     * @param intervalMs Intervalo entre execuções, em milissegundos.
     * @param callback Função invocada com o teammate encontrado.
     */
    everyForTeammate(sessionId: string, intervalMs: number, callback: (teammate: Teammate) => void): void;
    /**
     * Executa callback quando o teammate mantiver um status específico sem atualizar 'lastActiveAt'
     * por thresholdMs ou mais.
     * O tick roda a cada checkIntervalMs; use um intervalo menor que o limiar para detectar antes.
     *
     * @param status O status esperado ('idle', 'running', 'failed').
     * @param sessionId Identificador da sessão Pi monitorada.
     * @param thresholdMs Tempo sem ação (desde lastActiveAt) no mesmo status.
     * @param checkIntervalMs Intervalo entre verificações, em milissegundos.
     * @param callback Função invocada enquanto o teammate atingir a condição de tempo no status especificado.
     */
    everyWhenTeammateIs(status: TeammateStatus, sessionId: string, thresholdMs: number, checkIntervalMs: number, callback: (teammate: Teammate) => void): void;
    /**
     * Executa callback a cada checkIntervalMs somente quando o teammate estiver com status 'failed'.
     *
     * @param slug Identificador único do intervalo
     * @param sessionId Identificador da sessão Pi monitorada.
     * @param checkIntervalMs Intervalo entre verificações, em milissegundos.
     * @param callback Função invocada se o teammate estiver com falha.
     */
    everyWhenTeammateFailed(sessionId: string, checkIntervalMs: number, callback: (teammate: Teammate) => void): void;
    /**
     * Cancela todos os intervalos registrados nesta instância.
     */
    clearAll(sessionId: string): void;
}
/**
 * Base para hooks que registram intervalos na mesma sessão.
 * Compartilhada via herança para evitar colisão de campos privados no ts-mixer.
 */
export declare class TeammateSessionIntervalsHost {
    readonly sessionIntervals: SessionIntervalRegistry;
}
//# sourceMappingURL=session-interval.d.ts.map