import type { BeforeAgentStartEvent, BeforeAgentStartEventResult } from '@earendil-works/pi-coding-agent';
import { PipaBaseFeature } from '../base-feature';
import { type PipaApi } from '../../interfaces';
/**
 * Feature responsável por injetar o prompt de onboarding no agente principal (Pipa),
 * caso o ambiente ainda não possua o arquivo global de configurações (`.pi/PROFILE.md`).
 */
export declare class OnboardingFeature extends PipaBaseFeature {
    /**
     * Hook disparado antes do início da execução de qualquer agente.
     * Intercepta a inicialização do orquestrador principal (main) e, se estiver no modo onboarding,
     * anexa as diretrizes de setup (onboarding.md) ao final do System Prompt.
     *
     * @param event O evento contendo o contexto e System Prompt que será enviado ao LLM.
     * @param pipa A instância de API da Pipa.
     */
    enforceOnboarding(event: BeforeAgentStartEvent, pipa: PipaApi): BeforeAgentStartEventResult;
}
//# sourceMappingURL=onboarding.feature.d.ts.map