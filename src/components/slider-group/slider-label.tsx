import { cn } from '@/utils/cn'

import type { SliderLabelProps } from './slider-group.types'

export const SliderLabel = ({ className, children, ref, ...props }: SliderLabelProps) => {
  return (
    <span
      data-slot="slider-label"
      className={cn('style-text-default-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
}
