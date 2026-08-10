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
//# sourceMappingURL=paths.d.ts.map