import type { Teammate } from '../../teammate/teammate.entity';
import type { Task } from '../task.entity';
/**
 * Notifica o agente pai que todos os filhos diretos foram concluídos.
 * @param parent Tarefa pai
 * @param teammate Teammate atual
 * @param wasReady Estado anterior de prontidão da tarefa pai
 * @param isReady Estado atual de prontidão da tarefa pai
 */
export declare function notifyParentReady(parent: Task | undefined, teammate: Teammate | undefined, wasReady: boolean, isReady: boolean): void;
//# sourceMappingURL=helpers.d.ts.map