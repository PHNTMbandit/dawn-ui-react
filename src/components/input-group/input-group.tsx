import { inputVariants } from '../input/input.types'
import { cn } from '@/utils/cn'

import type { InputGroupProps } from './input-group.types'

export const InputGroup = ({ variant, className, children, ref, ...props }: InputGroupProps) => {
  return (
    <div className={cn(inputVariants({ variant }), 'py-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
