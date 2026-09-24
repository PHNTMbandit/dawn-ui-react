import { Input } from '../input'
import { useSliderGroupContext } from './slider-group-context'
import { cn } from '@/utils/cn'

import type { SliderInputProps } from './slider-group.types'

export const SliderInput = ({ className, ref, ...props }: SliderInputProps) => {
  const group = useSliderGroupContext()
  if (!group) return null

  const { value, setValue, min, max, step } = group
  const current = value?.[0] ?? min

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const raw = event.target.value
    if (raw === '') return
    const parsed = Number(raw)
    if (Number.isNaN(parsed)) return
    const clamped = Math.min(max, Math.max(min, parsed))
    const next = value ? [...value] : [clamped]
    next[0] = clamped
    setValue(next)
  }

  return (
    <Input
      data-slot="slider-input"
      className={cn('w-[4rem]', className)}
      ref={ref}
      {...props}
      type="number"
      min={min}
      max={max}
      step={step}
      value={current}
      onChange={handleChange}
    />
  )
}
