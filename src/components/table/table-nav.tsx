import { cn } from '@/utils/cn'

import type { TableNavProps } from './table.types'

export const TableNav = ({ className, children, ref, ...props }: TableNavProps) => {
  return (
    <div
      className={cn('flex w-full items-center justify-between gap-md', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
