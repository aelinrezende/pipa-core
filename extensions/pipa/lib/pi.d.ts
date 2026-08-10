import { AgentMessage } from '@earendil-works/pi-agent-core';
import { AssistantMessage, ToolResultMessage } from '@earendil-works/pi-ai';
import { EditToolCallEvent, FindToolCallEvent, ReadToolCallEvent, ToolCallEvent, WriteToolCallEvent } from '@earendil-works/pi-coding-agent';
/**
 * Type guard para verificar se uma mensagem é uma mensagem de assistente.
 */
export declare function isAssistantMessage(message: AgentMessage): message is AssistantMessage;
/**
 * Type guard para verificar se uma mensagem é um resultado de ferramenta.
 *
 * @param message A mensagem a ser verificada.
 * @returns Verdadeiro se a mensagem for do tipo ToolResultMessage.
 */
export declare function isToolResultMessage(message: AgentMessage): message is ToolResultMessage;
/**
 * Verifica se o conteúdo de uma mensagem de assistente contém alguma chamada de ferramenta bloqueada.
 *
 * @param content O conteúdo da mensagem do assistente.
 * @param blockedIds Conjunto de IDs de chamadas de ferramentas que estão bloqueadas.
 * @returns Verdadeiro se houver alguma chamada de ferramenta bloqueada no conteúdo.
 */
export declare function hasBlockedToolCall(content: AssistantMessage['content'], blockedIds: ReadonlySet<string>): boolean;
/**
 * Verifica se uma mensagem de resultado de ferramenta corresponde a uma chamada bloqueada.
 *
 * @param message A mensagem de resultado de ferramenta a ser verificada.
 * @param blockedIds Conjunto de IDs de chamadas de ferramentas que estão bloqueadas.
 * @returns Verdadeiro se for um erro originado de uma chamada de ferramenta bloqueada.
 */
export declare function isBlockedToolResult(message: ToolResultMessage, blockedIds: ReadonlySet<string>): boolean;
/**
 * Type guard para verificar se um evento de chamada de ferramenta é uma das chamadas de ferramenta internas (built-in).
 *
 * @param event O evento de chamada de ferramenta a ser verificado.
 * @returns Verdadeiro se o evento for uma chamada de ferramenta interna.
 */
export declare function isBuiltInToolCall(event: ToolCallEvent): event is ReadToolCallEvent | EditToolCallEvent | WriteToolCallEvent | FindToolCallEvent;
//# sourceMappingURL=pi.d.ts.map