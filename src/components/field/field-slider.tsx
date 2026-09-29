import { useFieldContext } from '../form/form-contexts'
import { Slider } from '../slider'
import { cn } from '@/utils/cn'

import type { FieldSliderProps } from './field.types'

export const FieldSlider = ({ className, ref, ...props }: FieldSliderProps) => {
  const field = useFieldContext<number | readonly number[]>()
  const fieldName = field.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())

  return (
    <Slider
      aria-label={fieldName}
      className={cn('', className)}
      onValueChange={(value) => field.setValue(value)}
      ref={ref}
      value={field.state.value}
      {...props}
    />
  )
}
