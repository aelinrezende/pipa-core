export declare function getFilename(metaUrl: string): string;
export declare function getDirname(metaUrl: string): string;
export declare function getPackageRoot(): string;
export declare function getBundledTeammatesDir(): string;
/**
 * Retorna o caminho do diretório embutido da extensão que contém templates.
 *
 * @returns O caminho do diretório templates.
 */
export declare function getBundledTemplatesDir(): string;
/**
 * Retorna o caminho do diretório embutido da extensão que contém os core prompts.
 *
 * @returns O caminho do diretório prompts.
 */
export declare function getBundledPromptsDir(): string;
export declare function findProjectTeammatesDir(cwd: string): string | null;
export declare function getProjectPiDir(cwd?: string): string | null;
export declare function getProjectFilePath(filename: string, cwd?: string): string | null;
export declare function getProjectConfigPath(cwd?: string): string | null;
export declare function getProjectProfilePath(cwd?: string): string | null;
/**
 * Caminho do SYSTEM_PIPA.md do agente principal.
 *
 * O diretório de teammates do projeto sobrescreve o bundle, seguindo a mesma
 * precedência usada para SYSTEM_AGENTS.md. Sem cópia no projeto, cai no pacote.
 *
 * @param cwd Diretório de trabalho usado para localizar o `.pi` do projeto.
 * @returns Caminho do arquivo existente, ou null se não houver em nenhum lugar.
 */
export declare function getSystemPipaPath(cwd?: string): string | null;
//# sourceMappingURL=paths.d.ts.map