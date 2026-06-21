import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
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
    <InputGroup>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput
        className={cn('', className)}
        onChange={handleChange}
        ref={ref}
        value={table.getState().globalFilter ?? ''}
        {...props}
      >
        {children}
      </InputGroupInput>
    </InputGroup>
  )
}
