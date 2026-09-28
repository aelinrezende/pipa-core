import type { Theme } from '@earendil-works/pi-coding-agent';
import { AbstractTreeWidget, type TreeNode } from '../../../lib';
import type { Task } from '../task.entity';
import { TaskRepository } from '../task.repository';
type TaskNode = TreeNode<Task>;
export declare class TaskTreeWidget extends AbstractTreeWidget<Task> {
    private readonly getTasks;
    private readonly theme;
    protected readonly repo: TaskRepository;
    constructor(getTasks: () => Task[], theme: Theme, repo: TaskRepository);
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