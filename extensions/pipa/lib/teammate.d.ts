import { CreateAgentSessionOptions } from '@earendil-works/pi-coding-agent';
type SessionToolkit = Required<Pick<CreateAgentSessionOptions, 'sessionManager' | 'modelRuntime' | 'resourceLoader'> & {
    systemPrompt: string;
}>;
export declare function getSessionToolkit(cwd: string, parentSessionId: string, systemPrompt: string): Promise<SessionToolkit>;
export {};
//# sourceMappingURL=teammate.d.ts.map