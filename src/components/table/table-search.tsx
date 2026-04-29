import { Input } from '../input'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableSearchProps } from './table.types'
import type * as React from 'react'

export const TableSearch = ({ className, children, ref, ...props }: TableSearchProps) => {
  const { table } = useTable()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(String(event.target.value))
  }

  return (
    <Input
      className={cn('', className)}
      onChange={handleChange}
      placeholder={`Search by ${table
        .getAllColumns()
        .map((column) => column.id)
        .join(', ')}`}
      ref={ref}
      value={table.getState().globalFilter ?? ''}
      {...props}
    >
      {children}
    </Input>
  )
}
