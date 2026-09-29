import { Separator } from '../separator'
import { cn } from '@/utils/cn'

import type { InputGroupSeparatorProps } from './input-group.types'

export const InputGroupSeparator = ({
  className,
  children,
  ref,
  ...props
}: InputGroupSeparatorProps) => {
  return (
    <Separator className={cn('h-2/4', className)} ref={ref} {...props}>
      {children}
    </Separator>
  )
}
