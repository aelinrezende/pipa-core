/**
 * Módulo contendo lógica de registro de dependências via decorators
 */
import 'reflect-metadata';
type PropertyKey = string | symbol;
/**
 * Decorator para injetar dependência em parâmetro de constructor.
 *
 * @param token Token da dependência a ser injetada.
 */
export declare function InjectParam(token: PropertyKey): ParameterDecorator;
/**
 * Resolve dependências de uma classe e suas mixins, instanciando-as com os
 * parâmetros injetados e preenchendo as propriedades injetadas.
 *
 * @param Type Classe a ser instanciada com dependências resolvidas.
 * @param leading Argumentos iniciais a serem passados para o constructor das classes.
 * @returns Instância da classe com dependências resolvidas.
 */
export declare function withDependenciesResolved<T extends object, Args extends unknown[]>(Type: new (...args: Args) => T, ...leading: unknown[]): T;
export {};
//# sourceMappingURL=di.d.ts.map