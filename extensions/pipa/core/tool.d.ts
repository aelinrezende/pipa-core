import type { AgentToolResult, Theme, ToolRenderResultOptions } from '@earendil-works/pi-coding-agent';
import type { Component } from '@earendil-works/pi-tui';
/**
 * Monta o resultado de uma tool no formato esperado pelo registrador de tools:
 * uma mensagem textual para o modelo e o payload estruturado em `details`.
 *
 * O texto é composto por `text` (resumo do comando) e, quando houver, pelo
 * payload serializado em linguagem natural via `toHumanReadable`. Ambos são
 * opcionais e combinados na seguinte ordem: `text` e, se não vazio, `payload`.
 *
 * @param details Payload estruturado exposto ao consumidor da tool.
 * @param text Resumo legível do comando executado.
 * @returns Um {@link AgentToolResult} pronto para ser retornado por `execute`.
 */
export declare function buildToolResult<TDetails>(details: TDetails, text: string): AgentToolResult<TDetails>;
/**
 * Renderiza o resultado de uma tool na TUI.
 *
 * O texto exibido é derivado de `options.expanded` — recolhido mostra apenas a
 * primeira linha não vazia, expandido mostra o conteúdo completo — e sempre
 * passa pelo componente `Markdown`. `defaultTextStyle` preserva a cor
 * `toolOutput` do tema, já que o `Markdown` não herda estilo por conta própria.
 *
 * @param result Resultado produzido por {@link buildToolResult}.
 * @param options Opções de renderização (expandido/parcial).
 * @param theme Tema usado para colorir a saída.
 * @returns O componente textual a ser exibido.
 */
export declare function renderToolResult<TDetails>(result: AgentToolResult<TDetails>, options: ToolRenderResultOptions, theme: Theme): Component;
//# sourceMappingURL=tool.d.ts.map