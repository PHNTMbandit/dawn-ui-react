import { cn } from '@/utils/cn'

import type { KbdGroupProps } from './kbd.types'

export const KbdGroup = ({ className, children, ref, ...props }: KbdGroupProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-2xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
