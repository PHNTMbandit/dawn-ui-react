/**
 * Base constraint for tree node data types used by layer tree utilities.
 */
export type LayerTreeNodeBase = { id: string; children?: LayerTreeNodeBase[] }

/**
 * Recursively searches for a node by ID in a nested tree structure.
 *
 * @param nodes - The array of nodes to search through
 * @param nodeId - The ID of the node to find
 * @returns The matching node or `null` if not found
 *
 * @example
 * ```ts
 * const node = findLayerTreeNode(layers, 'layer-001')
 * if (node) console.log(node.name)
 * ```
 */
export const findLayerTreeNode = <TData extends LayerTreeNodeBase>(
  nodes: TData[],
  nodeId: string,
): TData | null => {
  for (const node of nodes) {
    if (node.id === nodeId) return node
    if (node.children?.length) {
      const match = findLayerTreeNode(node.children as TData[], nodeId)
      if (match) return match
    }
  }
  return null
}

/**
 * Removes a node from a nested tree structure by ID.
 *
 * @param nodes - The array of nodes to remove from
 * @param nodeId - The ID of the node to remove
 * @returns An object containing the updated tree and the removed node (if found)
 *
 * @example
 * ```ts
 * const { nextNodes, removedNode } = removeLayerTreeNode(layers, 'layer-001')
 * if (removedNode) setLayers(nextNodes)
 * ```
 */
export const removeLayerTreeNode = <TData extends LayerTreeNodeBase>(
  nodes: TData[],
  nodeId: string,
): { nextNodes: TData[]; removedNode: TData | null } => {
  let removedNode: TData | null = null

  const nextNodes = nodes.flatMap((node) => {
    if (node.id === nodeId) {
      removedNode = node
      return []
    }
    if (!node.children?.length) return [node]

    const result = removeLayerTreeNode(node.children as TData[], nodeId)
    if (!result.removedNode) return [node]

    removedNode = result.removedNode
    return [{ ...node, children: result.nextNodes }]
  })

  return { nextNodes, removedNode }
}

/**
 * Inserts a node as a child of the specified folder node.
 *
 * @param nodes - The array of nodes to search through
 * @param folderId - The ID of the folder to insert into
 * @param nodeToInsert - The node to insert
 * @returns A new tree with the node inserted
 *
 * @example
 * ```ts
 * const newTree = insertLayerTreeNode(layers, 'folder-001', newLayer)
 * setLayers(newTree)
 * ```
 */
export const insertLayerTreeNode = <TData extends LayerTreeNodeBase>(
  nodes: TData[],
  folderId: string,
  nodeToInsert: TData,
): TData[] => {
  return nodes.map((node) => {
    if (node.id === folderId) {
      return { ...node, children: [...(node.children ?? []), nodeToInsert] }
    }
    if (!node.children?.length) return node
    return {
      ...node,
      children: insertLayerTreeNode(node.children as TData[], folderId, nodeToInsert),
    }
  })
}

/**
 * Moves a node from its current position into a target folder.
 * Prevents circular references by checking if target is a descendant of source.
 *
 * @param nodes - The array of nodes
 * @param sourceId - The ID of the node to move
 * @param targetId - The ID of the folder to move into
 * @returns A new tree with the node moved, or the original tree if the move is invalid
 *
 * @example
 * ```ts
 * const newTree = moveLayerTreeNode(layers, 'layer-001', 'folder-002')
 * setLayers(newTree)
 * ```
 */
export const moveLayerTreeNode = <TData extends LayerTreeNodeBase>(
  nodes: TData[],
  sourceId: string,
  targetId: string,
): TData[] => {
  if (sourceId === targetId) return nodes

  const sourceNode = findLayerTreeNode(nodes, sourceId)
  const targetNode = findLayerTreeNode(nodes, targetId)

  // Target must exist and be a folder (have children array)
  if (!sourceNode || !targetNode?.children) return nodes
  // Prevent circular reference: can't move into own descendant
  if (findLayerTreeNode((sourceNode.children ?? []) as TData[], targetId)) return nodes

  const { nextNodes, removedNode } = removeLayerTreeNode(nodes, sourceId)
  if (!removedNode) return nodes

  return insertLayerTreeNode(nextNodes, targetId, removedNode)
}

/**
 * Moves a node to the root level of the tree.
 *
 * @param nodes - The array of nodes
 * @param sourceId - The ID of the node to move
 * @returns A new tree with the node at root level
 *
 * @example
 * ```ts
 * const newTree = moveLayerTreeNodeToRoot(layers, 'layer-001')
 * setLayers(newTree)
 * ```
 */
export const moveLayerTreeNodeToRoot = <TData extends LayerTreeNodeBase>(
  nodes: TData[],
  sourceId: string,
): TData[] => {
  const { nextNodes, removedNode } = removeLayerTreeNode(nodes, sourceId)
  if (!removedNode) return nodes
  return [...nextNodes, removedNode]
}
