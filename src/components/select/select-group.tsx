import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectGroupProps } from './select.types'

export const SelectGroup = ({ className, children, ref, ...props }: SelectGroupProps) => {
  return (
    <BaseSelect.Group
      className={cn(
        'block space-y-3xs border-border-strong not-last:border-b not-last:pb-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Group>
  )
}
