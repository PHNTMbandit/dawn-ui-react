import { useCellContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableImageCellProps } from './table.types'

export const TableImageCell = ({ className, ref, ...props }: TableImageCellProps) => {
  const cell = useCellContext<string>()

  return (
    <img src={cell.getValue()} className={cn('my-xs size-xl', className)} ref={ref} {...props} />
  )
}
