import { Accordion as AccordionBase } from './accordion'
import { AccordionHeader } from './accordion-header'
import { AccordionIcon } from './accordion-icon'
import { AccordionItem } from './accordion-item'
import { AccordionPanel } from './accordion-panel'
import { AccordionSubtitle } from './accordion-subtitle'
import { AccordionTitle } from './accordion-title'

export const Accordion = Object.assign(AccordionBase, {
  Header: AccordionHeader,
  Item: AccordionItem,
  Panel: AccordionPanel,
  Subtitle: AccordionSubtitle,
  Title: AccordionTitle,
  Icon: AccordionIcon,
})

export type {
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionProps,
  AccordionPanelProps,
  AccordionSubtitleProps,
  AccordionTitleProps,
  AccordionIconProps,
} from './accordion.types'
export { AccordionHeader } from './accordion-header'
export { AccordionItem } from './accordion-item'
export { AccordionPanel } from './accordion-panel'
export { AccordionSubtitle } from './accordion-subtitle'
export { AccordionTitle } from './accordion-title'
export { AccordionIcon } from './accordion-icon'
