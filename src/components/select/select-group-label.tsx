import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectGroupLabelProps } from './select.types'

export const SelectGroupLabel = ({ className, children, ref, ...props }: SelectGroupLabelProps) => {
  return (
    <BaseSelect.GroupLabel
      className={cn(
        'sticky top-[0px] z-1 cursor-default bg-surface-2 px-2xs py-3xs style-text-default--2 leading-xs text-on-surface-variant select-none',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.GroupLabel>
  )
}
