import { cn } from '@/utils/cn'

import type { FormFooterProps } from './form.types'

export const FormFooter = ({
  orientation = 'horizontal',
  className,
  children,
  ref,
  ...props
}: FormFooterProps) => {
  return (
    <div
      className={cn(
        'flex gap-2xs',
        className,
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
