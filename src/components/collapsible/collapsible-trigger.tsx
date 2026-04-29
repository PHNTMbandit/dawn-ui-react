import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible'
import { CaretRightIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { CollapsibleTriggerProps } from './collapsible.types'

export const CollapsibleTrigger = ({
  className,
  children,
  ref,
  ...props
}: CollapsibleTriggerProps) => {
  return (
    <BaseCollapsible.Trigger
      render={(renderProps) => (
        <Button
          {...renderProps}
          tone="neutral"
          variant={'ghost'}
          className={cn(
            'group/trigger flex w-full justify-start gap-xl hover:shadow-2xs data-panel-open:bg-surface data-panel-open:shadow-2xs',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
          <CaretRightIcon
            weight="bold"
            className="ml-auto text-on-surface-variant transition-all ease-out group-data-panel-open/trigger:rotate-90"
          />
        </Button>
      )}
    />
  )
}
