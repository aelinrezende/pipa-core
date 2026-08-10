export type SecureExecutorOptions = {
    cwd?: string;
    timeoutMs?: number;
    maxStreamBytes?: number;
    env?: NodeJS.ProcessEnv;
};
export type SecureExecutionResult = {
    command: string;
    args: string[];
    exitCode: number | null;
    signal: NodeJS.Signals | null;
    stdout: string;
    stderr: string;
    stdoutBytes: number;
    stderrBytes: number;
    stdoutTruncated: boolean;
    stderrTruncated: boolean;
    timedOut: boolean;
};
export declare class SecureExecutor {
    private readonly options;
    constructor(options?: SecureExecutorOptions);
    execute(command: string, args?: string[]): Promise<SecureExecutionResult>;
    searchFiles(query: string, roots?: string[]): Promise<string[]>;
    searchContent(query: string, roots?: string[]): Promise<string[]>;
    static executableName(command: string): string;
}
//# sourceMappingURL=secure-executor.d.ts.map