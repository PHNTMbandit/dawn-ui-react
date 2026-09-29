import { PreviewCard as BasePreviewCard } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { PreviewCardTriggerProps } from './preview-card.types'

export const PreviewCardTrigger = ({
  className,
  children,
  ref,
  ...props
}: PreviewCardTriggerProps) => {
  return (
    <BasePreviewCard.Trigger className={cn('', className)} ref={ref} {...props}>
      {children}
    </BasePreviewCard.Trigger>
  )
}
