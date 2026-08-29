import { cn } from '@/utils/cn'

import type { TableViewportProps } from './table.types'

export const TableViewport = ({ className, children, ref, ...props }: TableViewportProps) => {
  return (
    <table className={cn('size-full', className)} ref={ref} {...props}>
      {children}
    </table>
  )
}
