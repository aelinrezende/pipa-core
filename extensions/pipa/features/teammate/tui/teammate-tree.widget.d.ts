import type { Theme } from '@earendil-works/pi-coding-agent';
import type { TUI } from '@earendil-works/pi-tui';
import { AbstractTreeWidget, type TreeNode } from '../../../lib';
import type { Teammate } from '../teammate.entity';
import { TuiAnimatorMixin } from './tui-animator.mixin';
type TeammateNode = TreeNode<Teammate>;
declare const TeammateTreeWidget_base: import("ts-mixer/dist/types/types").Class<any[], AbstractTreeWidget<Teammate> & TuiAnimatorMixin, (abstract new () => AbstractTreeWidget<Teammate>) & typeof TuiAnimatorMixin>;
export declare class TeammateTreeWidget extends TeammateTreeWidget_base {
    private readonly tui;
    private readonly getTeammates;
    private readonly theme;
    constructor(tui: TUI, getTeammates: () => Teammate[], theme: Theme);
    start(): void;
    stop(): void;
    render(width: number): string[];
    invalidate(): void;
    protected renderLabel(node: TeammateNode): string;
    private statusIcon;
    private colorStatus;
    private elapsedLabel;
}
export {};
//# sourceMappingURL=teammate-tree.widget.d.ts.map