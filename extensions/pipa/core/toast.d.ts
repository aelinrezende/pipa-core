import type { Notification } from 'node-notifier';
export interface ToastOptions extends Notification {
    message: string;
}
export declare class Toast {
    private readonly interpolations;
    private readonly activeToasts;
    constructor(interpolations: () => Record<string, string | number>);
    private sendToast;
    show(message: string, options?: Omit<ToastOptions, 'message'>): Promise<void>;
}
export type ToastService = Toast;
//# sourceMappingURL=toast.d.ts.map