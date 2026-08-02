import { cn } from '@/utils/cn'

import type { FormSetContentProps } from './form.types'

export const FormSetContent = ({ className, children, ref, ...props }: FormSetContentProps) => {
  return (
    <div className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
