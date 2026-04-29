import { useFieldContext } from '../form/form-context'
import { Slider } from '../slider'
import { cn } from '@/utils/cn'

import type { FieldSliderProps } from './field.types'

export const FieldSlider = ({ className, ref, ...props }: FieldSliderProps) => {
  const field = useFieldContext<number | readonly number[]>()

  return (
    <Slider
      className={cn('', className)}
      onValueChange={(value) => field.setValue(value)}
      ref={ref}
      value={field.state.value}
      {...props}
    />
  )
}
