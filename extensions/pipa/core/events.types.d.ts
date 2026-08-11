import type { DocItem } from '../features/docs/docs.entity';
import type { PipaApi } from '../interfaces/pipa';
/**
 * Mapa de eventos de domínio → payload.
 *
 * Interface (e não type) para permitir declaration merging: features externas
 * estendem o mapa sem alterar o core — basta declarar a nova chave e emitir
 * no hub correspondente.
 */
export interface DomainEventMap {
    /** Dispara na action `instantiate`; payload = documento persistido. */
    'doc_created': DocItem;
    /** Dispara nas actions `update-frontmatter` e `update-body`; payload = documento atualizado. */
    'doc_updated': DocItem;
    /** Dispara na action `remove`; payload = documento removido. */
    'doc_removed': DocItem;
    /** Dispara na action `publish`; payload = caminho do site e URL servida. */
    'doc_published': {
        path: string;
        url: string;
    };
}
/** Nome de um evento de domínio (chave do mapa). */
export type DomainEventName = keyof DomainEventMap;
/** Payload de um evento de domínio, derivado do mapa. */
export type PipaPayload<E extends DomainEventName> = DomainEventMap[E];
/** Handler de evento de domínio: recebe o payload e a instância da PipaApi. */
export type DomainEventHandler<E extends DomainEventName> = (payload: PipaPayload<E>, pipa: PipaApi) => void;
//# sourceMappingURL=events.types.d.ts.map