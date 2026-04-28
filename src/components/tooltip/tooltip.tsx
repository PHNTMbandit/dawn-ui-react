import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'

import type { TooltipProps } from './tooltip.types'

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root {...props}>{children}</BaseTooltip.Root>
    </BaseTooltip.Provider>
  )
}
