import { PipaApi } from '../../../interfaces';
import { TeammateFrontmatter as Frontmatter } from '../teammate.entity';
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
    list(): Partial<MapIterator<Frontmatter>>;
}
//# sourceMappingURL=frontmatter.d.ts.map