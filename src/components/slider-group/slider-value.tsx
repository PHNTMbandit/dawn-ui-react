import { useSliderGroupContext } from './slider-group-context'
import { cn } from '@/utils/cn'

import type { SliderValueProps } from './slider-group.types'

export const SliderValue = ({ className, children, ref, ...props }: SliderValueProps) => {
  const group = useSliderGroupContext()
  if (!group) return null

  const { value, min } = group
  const current = value?.[0] ?? min

  return (
    <span
      data-slot="slider-value"
      className={cn('min-w-lg text-right style-text-default--1 text-on-surface-variant', className)}
      ref={ref}
      {...props}
    >
      {children}
      {current}
    </span>
  )
}
