import { cn } from '@/utils/cn'

import type { ColourPickerLabelProps } from './colour-picker.types'

export const ColourPickerLabel = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerLabelProps) => {
  return (
    <span className={cn('style-text-default-0', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
