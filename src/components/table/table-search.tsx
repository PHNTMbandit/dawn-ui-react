import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableSearchProps } from './table.types'
import type * as React from 'react'

export const TableSearch = ({ className, children, ref, ...props }: TableSearchProps) => {
  const table = useTableContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(String(event.target.value))
  }

  return (
    <table.Subscribe selector={(state) => state.globalFilter}>
      {(globalFilter) => (
        <InputGroup>
          <InputGroupAddon>
            <MagnifyingGlassIcon weight="bold" />
          </InputGroupAddon>
          <InputGroupInput
            className={cn('', className)}
            onChange={handleChange}
            ref={ref}
            value={globalFilter ?? ''}
            {...props}
          >
            {children}
          </InputGroupInput>
        </InputGroup>
      )}
    </table.Subscribe>
  )
}
