import { cn } from '@/utils/cn'

import type { BentoBoxContentProps } from './bento-box.types'

export function BentoBoxContent({ className, ref, ...props }: BentoBoxContentProps) {
  return <div className={cn('min-h-0 flex-1', className)} ref={ref} {...props} />
}
