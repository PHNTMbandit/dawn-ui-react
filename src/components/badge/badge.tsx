import { type BadgeProps, badgeVariants } from './badge.types'
import { cn } from '@/utils/cn'

export const Badge = ({ className, tone, variant, children, ref, ...props }: BadgeProps) => {
  return (
    <div className={cn(badgeVariants({ className, tone, variant }))} ref={ref} {...props}>
      {children}
    </div>
  )
}
