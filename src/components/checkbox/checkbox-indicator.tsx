import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import { CheckIcon, MinusIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { CheckboxIndicatorProps } from './checkbox.types'

export const CheckboxIndicator = ({ className, ...props }: CheckboxIndicatorProps) => {
  return (
    <BaseCheckbox.Indicator
      className={cn('flex', className)}
      {...props}
      render={(props, state) => {
        return state.indeterminate ? (
          <MinusIcon weight="bold" {...props} className="text-accent-default" />
        ) : (
          <CheckIcon weight="bold" {...props} />
        )
      }}
    />
  )
}
