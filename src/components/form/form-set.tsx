import { cn } from '@/utils/cn'

import type { FormSetProps } from './form.types'

export const FormSet = ({ className, children, ref, ...props }: FormSetProps) => {
  return (
    <div className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
