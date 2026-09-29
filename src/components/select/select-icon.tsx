import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectIconProps } from './select.types'

export const SelectIcon = ({ className, children, ref, ...props }: SelectIconProps) => {
  return (
    <BaseSelect.Icon
      className={cn('flex text-on-surface-variant [&>svg]:size-sm', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Icon>
  )
}
