import 'reflect-metadata';
import { PiEvent } from '../../constants/pipa';
import type { DomainEventName } from '../events.types';
export declare const PI_EVENTS_SYMBOLS: Record<"agent_end" | "agent_start" | "before_agent_start" | "context" | "initialized" | "message_end" | "message_start" | "message_update" | "resources_discover" | "session_shutdown" | "session_start" | "tool_call" | "tool_execution_end" | "tool_execution_start" | "tool_execution_update" | "tool_result" | "turn_end" | "turn_start", symbol>;
/** Lista [evento, símbolo] de todos os eventos registráveis (agente + domínio). */
export declare function listEventSymbols(): Array<[PiEvent | DomainEventName, symbol]>;
/**
 * Associa o método decorado a um evento específico do Pi, permitindo que ele seja
 * executado automaticamente quando esse evento ocorrer.
 *
 * @param event O evento ao qual o método deve ser associado: evento fixo do agente
 * (ex: "tool_call", "session_start") ou evento de domínio (ex: "doc_created").
 */
export declare const PipaEvent: (event: PiEvent | DomainEventName) => MethodDecorator;
//# sourceMappingURL=events.d.ts.map