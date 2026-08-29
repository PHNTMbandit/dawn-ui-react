import {
  createExpandedRowModel,
  metaHelper,
  rowExpandingFeature,
  tableFeatures,
} from '@tanstack/react-table'
import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  createTableHook,
  filterFn_arrHas,
  filterFn_arrIncludes,
  filterFn_arrIncludesAll,
  filterFn_arrIncludesSome,
  filterFn_between,
  filterFn_betweenInclusive,
  filterFn_empty,
  filterFn_endsWith,
  filterFn_equals,
  filterFn_equalsString,
  filterFn_equalsStringSensitive,
  filterFn_inDateRange,
  filterFn_inNumberRange,
  filterFn_includesString,
  filterFn_includesStringSensitive,
  filterFn_notEmpty,
  filterFn_startsWith,
  filterFn_weakEquals,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_basic,
  sortFn_datetime,
  sortFn_text,
} from '@tanstack/react-table'
import { LayerTree } from './layer-tree'
import { LayerTreeBody } from './layer-tree-body'
import { LayerTreeExpandAll } from './layer-tree-expand-all'
import { LayerTreeFooter } from './layer-tree-footer'
import { LayerTreeIconCell } from './layer-tree-icon-cell'
import { LayerTreeLockedAll } from './layer-tree-locked-all'
import { LayerTreeLockedCell } from './layer-tree-locked-cell'
import { LayerTreeRow } from './layer-tree-row'
import { LayerTreeSearch } from './layer-tree-search'
import { LayerTreeSort } from './layer-tree-sort'
import { LayerTreeTextCell } from './layer-tree-text-cell'
import { LayerTreeTriggerCell } from './layer-tree-trigger-cell'
import { rowLockedFeature, rowVisibilityFeature } from './layer-tree-utils'
import { LayerTreeVisibilityAll } from './layer-tree-visibility-all'
import { LayerTreeVisibilityCell } from './layer-tree-visibility-cell'

import type { LayerTreeColumnMeta, LayerTreeTableMeta } from './layer-tree.types'

export const features = tableFeatures({
  columnFacetingFeature,
  columnFilteringFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  globalFilteringFeature,
  rowExpandingFeature,
  rowLockedFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  rowVisibilityFeature,
  expandedRowModel: createExpandedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  columnMeta: metaHelper<LayerTreeColumnMeta>(),
  tableMeta: metaHelper<LayerTreeTableMeta>(),
  filterFns: {
    includesString: filterFn_includesString,
    includesStringSensitive: filterFn_includesStringSensitive,
    startsWith: filterFn_startsWith,
    endsWith: filterFn_endsWith,
    equalsString: filterFn_equalsString,
    equalsStringSensitive: filterFn_equalsStringSensitive,
    equals: filterFn_equals,
    weakEquals: filterFn_weakEquals,
    empty: filterFn_empty,
    notEmpty: filterFn_notEmpty,
    arrIncludes: filterFn_arrIncludes,
    arrIncludesAll: filterFn_arrIncludesAll,
    arrIncludesSome: filterFn_arrIncludesSome,
    arrHas: filterFn_arrHas,
    inNumberRange: filterFn_inNumberRange,
    inDateRange: filterFn_inDateRange,
    between: filterFn_between,
    betweenInclusive: filterFn_betweenInclusive,
  },
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
    datetime: sortFn_datetime,
    basic: sortFn_basic,
  },
})

export const {
  createAppColumnHelper,
  useAppTable,
  useTableContext,
  useCellContext,
  useHeaderContext,
} = createTableHook({
  features,
  tableComponents: {
    LayerTree,
    LayerTreeBody,
    LayerTreeExpandAll,
    LayerTreeFooter,
    LayerTreeLockedAll,
    LayerTreeRow,
    LayerTreeSearch,
    LayerTreeSort,
    LayerTreeVisibilityAll,
  },
  cellComponents: {
    LayerTreeIconCell,
    LayerTreeLockedCell,
    LayerTreeTextCell,
    LayerTreeTriggerCell,
    LayerTreeVisibilityCell,
  },
  headerComponents: {},
})
