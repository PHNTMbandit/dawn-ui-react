import { cn } from '@/utils/cn'

import type { SkeletonProps } from './skeleton.types'

export const Skeleton = ({ className, children, ref, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('animate-pulse rounded-lg bg-surface-2 shadow-sm', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
