import * as React from 'react'
import { cn } from '@/utils/cn'

import type { FilterType, TableDataSet, TableProps, TableView } from './table.types'
import type { RowData } from '@tanstack/react-table'

type TableContextType<TData, TValue> = {
  table: TableProps<TData, TValue>['table']
  dataSets?: TableDataSet<TData, TValue>[]
  currentDataSet?: TableDataSet<TData, TValue>
  setCurrentDataSet?: React.Dispatch<React.SetStateAction<TableDataSet<TData, TValue>>>
  view: TableView
  setView: React.Dispatch<React.SetStateAction<TableView>>
}

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterType?: FilterType
  }
}

const TableContext = React.createContext<TableContextType<any, any> | null>(null)

export const Table = <TData, TValue>({
  currentDataSet,
  setCurrentDataSet,
  dataSets,
  defaultView = 'list',
  table,
  className,
  children,
  ref,
  ...props
}: TableProps<TData, TValue>) => {
  const [view, setView] = React.useState<TableView>(defaultView)

  return (
    <TableContext.Provider
      value={{ dataSets, currentDataSet, setCurrentDataSet, table, view, setView }}
    >
      <div className={cn('flex flex-col gap-xs', className)} {...props} ref={ref}>
        {children}
      </div>
    </TableContext.Provider>
  )
}

export const useTable = () => {
  const context = React.useContext(TableContext)

  if (!context) {
    throw new Error('useTable must be used within a TableProvider')
  }

  return context
}
