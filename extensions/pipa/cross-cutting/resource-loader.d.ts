import { DefaultResourceLoader } from '@earendil-works/pi-coding-agent';
/**
 * Retorna uma instância compartilhada do ResourceLoader para ser usada por subagentes.
 * Isso garante que todos os subagentes tenham acesso aos mesmos recursos e extensões carregados.
 */
export declare function getSharedResourceLoader(cwd: string): Promise<DefaultResourceLoader>;
export declare function ensureResourceLoaderReloaded(): Promise<void>;
//# sourceMappingURL=resource-loader.d.ts.map