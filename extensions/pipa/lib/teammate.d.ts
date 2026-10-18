import { CreateAgentSessionOptions } from '@earendil-works/pi-coding-agent';
type SessionToolkit = Required<Pick<CreateAgentSessionOptions, 'sessionManager' | 'modelRuntime' | 'resourceLoader'> & {
    systemPrompt: string;
}>;
type Prompts = {
    rolePrompt: string;
    harnessPolicy: string;
};
export declare function getSessionToolkit(cwd: string, parentSessionId: string, prompts: Prompts): Promise<SessionToolkit>;
export {};
//# sourceMappingURL=teammate.d.ts.map