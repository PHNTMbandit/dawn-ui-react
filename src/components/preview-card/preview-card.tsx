import { PreviewCard as BasePreviewCard } from '@base-ui/react'

import type { PreviewCardProps } from './preview-card.types'

export const PreviewCard = ({ children, ...props }: PreviewCardProps) => {
  return <BasePreviewCard.Root {...props}>{children}</BasePreviewCard.Root>
}
