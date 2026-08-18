import { inputVariants } from '../input/input.types'
import { cn } from '@/utils/cn'

import type { InputGroupProps } from './input-group.types'

export const InputGroup = ({
  variant,
  size,
  className,
  children,
  ref,
  ...props
}: InputGroupProps) => {
  return (
    <div className={cn(inputVariants({ variant, size }), className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
