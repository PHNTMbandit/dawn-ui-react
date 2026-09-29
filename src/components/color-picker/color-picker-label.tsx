import { cn } from '@/utils/cn'

import type { ColorPickerLabelProps } from './color-picker.types'

export const ColorPickerLabel = ({ className, children, ref, ...props }: ColorPickerLabelProps) => {
  return (
    <span className={cn('style-text-default-0', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
