import * as React from 'react'

import type { TableProps } from './table.types'

type TableContextType = TableProps & {
  view: TableView
  setView: React.Dispatch<React.SetStateAction<TableView>>
}

const TableContext = React.createContext<TableContextType | null>(null)

export type TableView = 'grid' | 'list'

export const Table = ({
  defaultView = 'list',
  table,
  className,
  children,
  ref,
  ...props
}: TableProps) => {
  const [view, setView] = React.useState<TableView>(defaultView)

  return (
    <TableContext.Provider value={{ view, setView, table, className, children, ref, ...props }}>
      <div className="flex flex-col gap-sm">{children}</div>
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
