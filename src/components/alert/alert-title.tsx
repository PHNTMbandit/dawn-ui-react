import { cn } from '@/utils/cn'

import type { AlertTitleProps } from './alert.types'

export const AlertTitle = ({ className, children, ref, ...props }: AlertTitleProps) => {
  return (
    <div
      className={cn('flex items-center gap-2xs style-text-strong-0 [&_svg]:size-sm', className)}
      data-title
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
