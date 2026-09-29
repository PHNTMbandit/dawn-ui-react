import { LayerTree as LayerTreeBase } from './layer-tree'
import { LayerTreeBody } from './layer-tree-body'
import { LayerTreeExpandAll } from './layer-tree-expand-all'
import { LayerTreeFooter } from './layer-tree-footer'
import { LayerTreeIconCell } from './layer-tree-icon-cell'
import { LayerTreeLockedAll } from './layer-tree-locked-all'
import { LayerTreeLockedCell } from './layer-tree-locked-cell'
import { LayerTreeNodeIcon } from './layer-tree-node-icon'
import { LayerTreeRow } from './layer-tree-row'
import { LayerTreeSearch } from './layer-tree-search'
import { LayerTreeSort } from './layer-tree-sort'
import { LayerTreeTextCell } from './layer-tree-text-cell'
import { LayerTreeTriggerCell } from './layer-tree-trigger-cell'
import { LayerTreeVisibilityAll } from './layer-tree-visibility-all'
import { LayerTreeVisibilityCell } from './layer-tree-visibility-cell'

export const LayerTree = Object.assign(LayerTreeBase, {
  Body: LayerTreeBody,
  ExpandAll: LayerTreeExpandAll,
  Footer: LayerTreeFooter,
  IconCell: LayerTreeIconCell,
  LockedAll: LayerTreeLockedAll,
  LockedCell: LayerTreeLockedCell,
  TextCell: LayerTreeTextCell,
  TriggerCell: LayerTreeTriggerCell,
  Row: LayerTreeRow,
  Search: LayerTreeSearch,
  Sort: LayerTreeSort,
  VisibilityAll: LayerTreeVisibilityAll,
  VisibilityCell: LayerTreeVisibilityCell,
  NodeIcon: LayerTreeNodeIcon,
})

export {
  createAppColumnHelper as createLayerTreeColumnHelper,
  features as layerTreeFeatures,
  useAppTable as useLayerTreeTable,
  useCellContext as useLayerTreeCellContext,
  useHeaderContext as useLayerTreeHeaderContext,
  useTableContext as useLayerTreeContext,
} from './layer-tree-context'
export type {
  LayerTreeBodyProps,
  LayerTreeColumnMeta,
  LayerTreeExpandAllProps,
  LayerTreeFooterProps,
  LayerTreeIconCellProps,
  LayerTreeLockedAllProps,
  LayerTreeLockedCellProps,
  LayerTreeTextCellProps,
  LayerTreeProps,
  LayerTreeRowProps,
  LayerTreeSearchProps,
  LayerTreeSortProps,
  LayerTreeTableMeta,
  LayerTreeTriggerCellProps,
  LayerTreeVisibilityAllProps,
  LayerTreeVisibilityCellProps,
  RowLockedState,
  RowVisibilityState,
  LayerTreeNodeIconProps,
} from './layer-tree.types'
export { useLayerTree } from './layer-tree'
export { LayerTreeBody } from './layer-tree-body'
export { LayerTreeExpandAll } from './layer-tree-expand-all'
export { LayerTreeFooter } from './layer-tree-footer'
export { LayerTreeIconCell } from './layer-tree-icon-cell'
export { LayerTreeLockedAll } from './layer-tree-locked-all'
export { LayerTreeLockedCell } from './layer-tree-locked-cell'
export { LayerTreeTextCell } from './layer-tree-text-cell'
export { LayerTreeTriggerCell } from './layer-tree-trigger-cell'
export { LayerTreeRow } from './layer-tree-row'
export { LayerTreeSearch } from './layer-tree-search'
export { LayerTreeSort } from './layer-tree-sort'
export { LayerTreeVisibilityAll } from './layer-tree-visibility-all'
export { LayerTreeVisibilityCell } from './layer-tree-visibility-cell'
export { LayerTreeNodeIcon } from './layer-tree-node-icon'
export {
  findLayerTreeNode,
  insertLayerTreeNode,
  moveLayerTreeNode,
  moveLayerTreeNodeToRoot,
  removeLayerTreeNode,
  rowLockedFeature,
  rowVisibilityFeature,
  type LayerTreeNodeBase,
} from './layer-tree-utils'
