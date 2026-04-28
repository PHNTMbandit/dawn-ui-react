import { Checkbox as BaseCheckbox } from '@base-ui/react'
import { CheckboxIndicator } from './checkbox-indicator'
import { checkboxVariants, type CheckboxRootProps } from './checkbox.types'
import { cn } from '@/utils/cn'

export const Checkbox = ({ variant, className, ref, ...props }: CheckboxRootProps) => {
  return (
    <div className="flex items-center gap-xs">
      <BaseCheckbox.Root
        className={cn(checkboxVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <CheckboxIndicator />
      </BaseCheckbox.Root>
    </div>
  )
}
