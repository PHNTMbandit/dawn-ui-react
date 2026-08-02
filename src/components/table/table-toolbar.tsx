import { cn } from '@/utils/cn'

import type { TableToolbarProps } from './table.types'

export const TableToolbar = ({
  sticky = false,
  className,
  children,
  ref,
  ...props
}: TableToolbarProps) => {
  return (
    <div
      className={cn('flex items-center gap-3xs', sticky && 'sticky top-0 z-10', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
