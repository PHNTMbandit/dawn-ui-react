import { cn } from '@/utils/cn'

import type { ColourPickerGroupProps } from './colour-picker.types'

export const ColourPickerGroup = ({
  className,
  children,
  ref,
  ...props
}: ColourPickerGroupProps) => {
  return (
    <div className={cn('flex flex-col gap-sm', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
