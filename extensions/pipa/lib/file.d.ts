/** Returns whether a path points to a regular, readable file. */
export declare function isReadableFile(filename: string): boolean;
export declare class FileManager<T extends Record<string, any> | Record<string, any>[]> {
    readonly folder: string;
    constructor(folder: string);
    save(filename: string, entry: T, updater?: (entry: T, current: T) => T): T;
    read(filename: string): T | null;
}
//# sourceMappingURL=file.d.ts.map