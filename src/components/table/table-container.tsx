import { cn } from '@/utils/cn'

import type { TableContainerProps } from './table.types'

export const TableContainer = ({ className, children, ref, ...props }: TableContainerProps) => {
  return (
    <table className={cn('size-full', className)} ref={ref} {...props}>
      {children}
    </table>
  )
}
