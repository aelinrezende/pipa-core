/**
 * Graph utilities for analyzing dependencies and structure.
 */
export interface GraphNode {
    id: string;
    neighbors: string[];
}
/**
 * Detects if there is a cycle in a directed graph starting from a specific node.
 *
 * @param startNodeId The ID of the node to start the search from.
 * @param getNeighbors A function that returns the neighbors (dependencies) of a given node ID.
 * @returns The path of the cycle if found, otherwise null.
 */
export declare function detectCycle(startNodeId: string, getNeighbors: (nodeId: string) => string[]): string[] | null;
//# sourceMappingURL=graph.d.ts.map