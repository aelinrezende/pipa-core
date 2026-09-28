import 'reflect-metadata';
import { RepositoryKey } from '../../interfaces/repository';
/**
 * Decorator para injetar dependência de repository em parâmetro de constructor.
 *
 * @param key Chave do repository a ser injetado.
 */
export declare function InjectRepository<K extends RepositoryKey>(key: K): ParameterDecorator;
//# sourceMappingURL=repository.d.ts.map