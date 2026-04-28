import type { Button } from '../button'
import type { inputVariants } from '../input/input.types'
import type { TableView } from './table'
import type { Row, Table as TanstackTable } from '@tanstack/react-table'
import type { VariantProps } from 'class-variance-authority'

export type TableFilterProps = React.ComponentProps<typeof Button>
export type TableFirstPageProps = React.ComponentProps<typeof Button>
export type TableFooterProps = React.ComponentProps<'tfoot'>
export type TableHeaderProps = React.ComponentProps<'thead'>
export type TableLastPageProps = React.ComponentProps<typeof Button>
export type TablePaginationProps = React.ComponentProps<'div'> & {
  truncateFrom?: number
  truncateTo?: number
}
export type TableNextPageProps = React.ComponentProps<typeof Button>
export type TableResultsProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children: (start: number, end: number, totalRows: number) => React.ReactElement
}
export type TablePreviousPageProps = React.ComponentProps<typeof Button>
export type TableRefreshProps = React.ComponentProps<typeof Button>
export type TableSearchProps = React.ComponentProps<'input'> & VariantProps<typeof inputVariants>
export type TableProps = React.ComponentProps<'div'> & {
  defaultView?: TableView
  table: TanstackTable<any>
}
export type TableSortProps = React.ComponentProps<typeof Button>
export type TableRowListProps = React.ComponentProps<'tr'> & {
  // biome-ignore lint/suspicious/noExplicitAny: This is a generic type that can be specified by the user when using the Table component. It allows for flexibility in the type of data being used in the table.
  row: Row<any>
}
export type TableBodyProps = Omit<React.ComponentProps<'tbody'>, 'children'> & {
  // biome-ignore lint/suspicious/noExplicitAny: This is a generic type that can be specified by the user when using the Table component. It allows for flexibility in the type of data being used in the table.
  children?: (row: Row<any>) => React.ReactNode
  rowGridOverride?: React.ComponentType<TableRowGridProps>
  rowListOverride?: React.ComponentType<TableRowListProps>
}
export type TableRowGridProps = React.ComponentProps<'tr'> & {
  // biome-ignore lint/suspicious/noExplicitAny: This is a generic type that can be specified by the user when using the Table component. It allows for flexibility in the type of data being used in the table.
  row: Row<any>
}
export type TableNavProps = React.ComponentProps<'div'>
export type TableContentProps = React.ComponentProps<'table'>
