import 'reflect-metadata';
import { PiEvent } from '../../constants/pipa';
export declare const PI_EVENTS_SYMBOLS: Record<"initialized" | "session_start" | "context" | "resources_discover" | "before_agent_start" | "agent_start" | "agent_end" | "tool_execution_start" | "tool_execution_update" | "tool_execution_end" | "tool_call" | "tool_result" | "message_start" | "message_update" | "message_end" | "turn_start" | "turn_end" | "session_shutdown", symbol>;
/**
 * Associa o método decorado a um evento específico do Pi, permitindo que ele seja
 * executado automaticamente quando esse evento ocorrer.
 *
 * @param event O evento do Pi ao qual o método deve ser associado (ex: "tool_call", "session_start").
 */
export declare const PipaEvent: (event: PiEvent) => MethodDecorator;
//# sourceMappingURL=events.d.ts.map