export declare namespace IString {
    type UpdateMode = 'set' | 'append' | 'replace';
    type UpdateBodyInput = {
        mode: 'set';
        value: string;
    } | {
        mode: 'append';
        value: string;
    } | {
        mode: 'replace';
        value: string;
        replacement: string;
    };
}
//# sourceMappingURL=string.d.ts.map