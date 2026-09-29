import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectListProps } from './select.types'

export const SelectList = ({ className, children, ref, ...props }: SelectListProps) => {
  return (
    <BaseSelect.List
      className={cn(
        'relative max-h-(--available-height) scroll-py-md space-y-3xs overflow-y-auto',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.List>
  )
}
