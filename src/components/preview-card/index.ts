import { PreviewCard as PreviewCardBase } from './preview-card'
import { PreviewCardPopup } from './preview-card-popup'
import { PreviewCardTrigger } from './preview-card-trigger'

export const PreviewCard = Object.assign(PreviewCardBase, {
  Popup: PreviewCardPopup,
  Trigger: PreviewCardTrigger,
})

export type {
  PreviewCardPopupProps,
  PreviewCardProps,
  PreviewCardTriggerProps,
} from './preview-card.types'
export { PreviewCardPopup } from './preview-card-popup'
export { PreviewCardTrigger } from './preview-card-trigger'
