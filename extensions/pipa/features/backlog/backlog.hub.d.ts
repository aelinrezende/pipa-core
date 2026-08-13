import { PipaApi } from '../../interfaces';
import { BacklogItem, BacklogToolSchema } from './backlog.entity';
import { BacklogCore, BacklogValidator } from './hub';
declare const BacklogHub_base: import("ts-mixer/dist/types/types").Class<any[], BacklogValidator & BacklogCore, typeof BacklogValidator & typeof BacklogCore>;
/**
 * Gerencia o backlog local de tarefas do projeto.
 * Persiste todos os itens como um único backlog.json.
 */
export declare class BacklogHub extends BacklogHub_base {
    readonly pipa: PipaApi;
    constructor(pipa: PipaApi);
    instantiate(data: BacklogToolSchema<'instantiate'>): {
        action: "instantiate";
        title: string;
        type: import("./backlog.entity").BacklogItemType;
        priority: import("./backlog.entity").BacklogPriority;
        domain?: import("./backlog.entity").BacklogDomain[] | undefined;
        parentCode?: string | undefined;
        tags?: string[] | undefined;
        metadata?: Record<string, unknown> | undefined;
        body: string;
    } & BacklogItem;
}
export {};
//# sourceMappingURL=backlog.hub.d.ts.map