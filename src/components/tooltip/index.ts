import { Tooltip as TooltipBase } from './tooltip'
import { TooltipContent } from './tooltip-context'
import { TooltipTrigger } from './tooltip-trigger'

export const Tooltip = Object.assign(TooltipBase, {
  Content: TooltipContent,
  Trigger: TooltipTrigger,
})

export type { TooltipContentProps, TooltipProps, TooltipTriggerProps } from './tooltip.types'
export { TooltipContent } from './tooltip-context'
export { TooltipTrigger } from './tooltip-trigger'
