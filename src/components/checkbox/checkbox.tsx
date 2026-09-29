import { Checkbox as BaseCheckbox } from '@base-ui/react'
import { Label } from '../label'
import { CheckboxIndicator } from './checkbox-indicator'
import { checkboxVariants, type CheckboxRootProps } from './checkbox.types'
import { cn } from '@/utils/cn'

export const Checkbox = ({ variant, className, ref, label, ...props }: CheckboxRootProps) => {
  return (
    <div className="flex items-center gap-xs">
      <BaseCheckbox.Root
        aria-label={typeof label === 'string' ? label : undefined}
        className={cn(checkboxVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <CheckboxIndicator />
      </BaseCheckbox.Root>
      {label && <Label htmlFor={props.id}>{label}</Label>}
    </div>
  )
}
