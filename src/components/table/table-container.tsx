import { cn } from '@/utils/cn'

import type { TableContainerProps } from './table.types'

export const TableContainer = ({ className, children, ref, ...props }: TableContainerProps) => {
  return (
    <table className={cn('w-full', className)} ref={ref} {...props}>
      {children}
    </table>
  )
}
