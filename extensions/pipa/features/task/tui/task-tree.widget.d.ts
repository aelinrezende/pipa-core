import type { Theme } from '@earendil-works/pi-coding-agent';
import type { Task } from '../task.entity';
import { AbstractTreeWidget, type TreeNode } from '../../../lib';
type TaskNode = TreeNode<Task>;
export declare class TaskTreeWidget extends AbstractTreeWidget<Task> {
    private readonly getTasks;
    private readonly theme;
    constructor(getTasks: () => Task[], theme: Theme);
    private expanded;
    render(width: number): string[];
    invalidate(): void;
    toggle(): void;
    protected renderLabel(node: TaskNode): string;
    private statusIcon;
    private label;
    private colorStatus;
}
export {};
//# sourceMappingURL=task-tree.widget.d.ts.map