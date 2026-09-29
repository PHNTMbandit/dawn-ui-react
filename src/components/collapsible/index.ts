import { Collapsible as CollapsibleBase } from './collapsible'
import { CollapsiblePanel } from './collapsible-panel'
import { CollapsibleTrigger } from './collapsible-trigger'

export const Collapsible = Object.assign(CollapsibleBase, {
  Panel: CollapsiblePanel,
  Trigger: CollapsibleTrigger,
})

export { CollapsiblePanel } from './collapsible-panel'
export { CollapsibleTrigger } from './collapsible-trigger'
export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsiblePanelProps,
} from './collapsible.types'
