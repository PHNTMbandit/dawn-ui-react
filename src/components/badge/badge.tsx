import { type BadgeProps, badgeVariants } from './badge.types'
import { cn } from '@/utils/cn'

export const Badge = ({ className, size, tone, variant, children, ref, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ className, size, tone, variant }))} ref={ref} {...props}>
      {children}
    </div>
  )
}
