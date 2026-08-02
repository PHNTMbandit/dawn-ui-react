import { cn } from '@/utils/cn'

import type { FormSetHeadingProps } from './form.types'

export const FormSetHeading = ({ className, children, ref, ...props }: FormSetHeadingProps) => {
  return (
    <span className={cn('style-text-strong-1', className)} ref={ref} {...props}>
      {children}
    </span>
  )
}
