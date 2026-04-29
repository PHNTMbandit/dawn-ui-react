import { cn } from '@/utils/cn'

import type { TableContentProps } from './table.types'

export const TableContent = ({ className, children, ref, ...props }: TableContentProps) => {
  return (
    <table className={cn('', className)} ref={ref} {...props}>
      {children}
    </table>
  )
}
