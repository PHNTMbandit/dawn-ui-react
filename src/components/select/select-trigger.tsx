import { Select as BaseSelect } from '@base-ui/react/select'
import { selectVariants, type SelectTriggerProps } from './select.types'
import { cn } from '@/utils/cn'

export const SelectTrigger = ({
  variant,
  size,
  className,
  children,
  ref,
  ...props
}: SelectTriggerProps) => {
  return (
    <BaseSelect.Trigger
      className={cn(selectVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Trigger>
  )
}
