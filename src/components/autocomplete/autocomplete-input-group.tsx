import { inputVariants } from '../input/input.types'
import { cn } from '@/utils/cn'

import type { AutocompleteInputGroupProps } from './autocomplete.types'

export const AutocompleteInputGroup = ({
  variant,
  className,
  children,
  ref,
  ...props
}: AutocompleteInputGroupProps) => {
  return (
    <div className={cn(inputVariants({ variant }), className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
