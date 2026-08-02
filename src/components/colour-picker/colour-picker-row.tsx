import { cn } from '@/utils/cn'

import type { ColourPickerRowProps } from './colour-picker.types'

export const ColourPickerRow = ({ className, children, ref, ...props }: ColourPickerRowProps) => {
  return (
    <div className={cn('flex items-center justify-between gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
