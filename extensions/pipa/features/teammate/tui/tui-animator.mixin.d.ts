import type { TUI } from '@earendil-works/pi-tui';
export declare class TuiAnimatorMixin {
    step: number;
    private animationInterval?;
    /**
     * Inicia o intervalo da animação.
     * @param tui A instância do TUI para solicitar repintura
     * @param intervalMs Duração do intervalo em milissegundos
     */
    startAnimation(tui: TUI, intervalMs?: number): void;
    /**
     * Interrompe o intervalo da animação e limpa a referência.
     */
    stopAnimation(): void;
}
//# sourceMappingURL=tui-animator.mixin.d.ts.map