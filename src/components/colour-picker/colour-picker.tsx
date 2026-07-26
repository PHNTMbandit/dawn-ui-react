import { cn } from '@/utils/cn'

import type { ColourPickerProps } from './colour-picker.types'

export const ColourPicker = ({ className, children, ref, ...props }: ColourPickerProps) => {
  return (
    <div className={cn('', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
