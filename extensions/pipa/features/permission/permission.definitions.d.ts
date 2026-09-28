import type { CommandPolicy } from '../../interfaces';
/**
 * Lista global de comandos de terminal considerados perigosos.
 * Bloqueia operações que podem causar perda de dados ou processos longos/interativos.
 */
export declare const blockedCommands: string[];
/**
 * Permissões restritas exclusivas para o supervisor (main), indexadas por
 * NOME DE FERRAMENTA. O caractere '*' bloqueia o uso completo da ferramenta.
 */
export declare function blockedForMain(): Record<string, string[]>;
/**
 * Políticas específicas por executável para restringir flags perigosas.
 */
export declare const commandPolicies: Record<string, CommandPolicy>;
//# sourceMappingURL=permission.definitions.d.ts.map