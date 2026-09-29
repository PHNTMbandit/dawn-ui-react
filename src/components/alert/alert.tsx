import { type AlertProps, alertVariants } from './alert.types'
import { cn } from '@/utils/cn'

export const Alert = ({ tone, className, children, ref, ...props }: AlertProps) => {
  return (
    <div className={cn(alertVariants({ tone, className }))} ref={ref} {...props}>
      {children}
    </div>
  )
}
