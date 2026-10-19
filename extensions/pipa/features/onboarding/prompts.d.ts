/**
 * Lê o prompt de onboarding (`onboarding.md`) e injeta o diretório real dos templates empacotados.
 * Este prompt é utilizado para guiar o setup inicial do framework quando o `.pi/PROFILE.md` não existe.
 *
 * O placeholder `{{TEMPLATES_DIR}}` é substituído pelo caminho absoluto dos templates, que varia
 * conforme a instalação (npm, git ou local). As barras são normalizadas para funcionar no Windows.
 *
 * @returns O conteúdo do onboarding.md com os caminhos resolvidos.
 */
export declare function getOnboardingPrompt(): string;
//# sourceMappingURL=prompts.d.ts.map