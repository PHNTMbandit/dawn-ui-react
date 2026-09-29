import { cn } from '@/utils/cn'

import type { TableNavProps } from './table.types'

export const TableNav = ({ sticky = false, className, children, ref, ...props }: TableNavProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between gap-md',
        sticky && 'sticky bottom-0 z-10 bg-inherit',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
