import { TeammateFrontmatter as Frontmatter } from '../teammate.entity';
import { PipaApi } from '../../../interfaces';
export declare class TeammateFrontmatter {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    /**
     * Recupera o frontmatter de todos os teammates disponíveis.
     */
    static getTeammatesFrontmatter(cwd: string): Map<string, Frontmatter>;
    /**
     * Lista o frontmatter de todos os teammates disponíveis.
     * @returns Lista de colegas disponíveis (nome + descrição).
     */
    list(): {
        name: string;
        description: string;
    }[];
}
//# sourceMappingURL=frontmatter.d.ts.map