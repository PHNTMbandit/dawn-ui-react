import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectValueProps } from './select.types'

export const SelectValue = ({ className, children, ref, ...props }: SelectValueProps) => {
  return (
    <BaseSelect.Value
      data-value
      className={cn(
        'flex items-center justify-start gap-2xs data-placeholder:opacity-70',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Value>
  )
}
