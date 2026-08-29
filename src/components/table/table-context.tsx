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
  metaHelper,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_basic,
  sortFn_datetime,
  sortFn_text,
  tableFeatures,
} from '@tanstack/react-table'
import { TableBadgeCell } from './table-badge-cell'
import { TableBody } from './table-body'
import { TableCheckboxCell } from './table-checkbox-cell'
import { TableColumnToggle } from './table-column-toggle'
import { TableContainer } from './table-container'
import { TableDateCell } from './table-date-cell'
import { TableFilterList } from './table-filter-list'
import { TableFilterMenu } from './table-filter-menu'
import { TableFirstPage } from './table-first-page'
import { TableFooter } from './table-footer'
import { TableHeader } from './table-header'
import { TableImageCell } from './table-image-cell'
import { TableLastPage } from './table-last-page'
import { TableNav } from './table-nav'
import { TableNextPage } from './table-next-page'
import { TableNumberCell } from './table-number-cell'
import { TablePagination } from './table-pagination'
import { TablePaging } from './table-paging'
import { TablePreviousPage } from './table-previous-page'
import { TableSearch } from './table-search'
import { TableSelectHeader } from './table-select-header'
import { TableSortList } from './table-sort-list'
import { TableSortMenu } from './table-sort-menu'
import { TableTextCell } from './table-text-cell'
import { TableToolbar } from './table-toolbar'
import { TableViewport } from './table-viewport'
import { dateFilterFn, numberFilterFn, selectFilterFn, stringFilterFn } from './table.utils'

import type { TableColumnMeta, TableMeta } from './table.types'

export const features = tableFeatures({
  columnFacetingFeature,
  columnFilteringFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  globalFilteringFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  columnMeta: metaHelper<TableColumnMeta>(),
  tableMeta: metaHelper<TableMeta>(),
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
    date: dateFilterFn,
    string: stringFilterFn,
    number: numberFilterFn,
    select: selectFilterFn,
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
  getRowId: (row, index, parent) => row.id ?? (parent ? `${parent.id}.${index}` : String(index)),
  tableComponents: {
    TableBody,
    TableColumnToggle,
    TableContainer,
    TableFirstPage,
    TableFilterMenu,
    TableFilterList,
    TableFooter,
    TableHeader,
    TableLastPage,
    TableNav,
    TableNextPage,
    TablePagination,
    TablePaging,
    TablePreviousPage,
    TableSearch,
    TableSortMenu,
    TableSortList,
    TableToolbar,
    TableViewport,
  },
  cellComponents: {
    TableCheckboxCell,
    TableDateCell,
    TableImageCell,
    TableNumberCell,
    TableBadgeCell,
    TableTextCell,
  },
  headerComponents: { TableSelectHeader },
})
