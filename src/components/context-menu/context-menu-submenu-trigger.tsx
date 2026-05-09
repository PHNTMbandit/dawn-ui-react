import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { CaretRightIcon } from '@phosphor-icons/react'
import {
  contextMenuSubmenuTriggerVariants,
  type ContextMenuSubmenuTriggerProps,
} from './context-menu.types'
import { cn } from '@/utils/cn'

export const ContextMenuSubmenuTrigger = ({
  className,
  children,
  ref,
  tone,
  ...props
}: ContextMenuSubmenuTriggerProps) => {
  return (
    <BaseContextMenu.SubmenuTrigger
      className={cn(contextMenuSubmenuTriggerVariants({ tone }), className)}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 flex min-w-3xl items-center gap-2xs pr-2xl">{children}</span>
      <CaretRightIcon
        className="col-start-2 size-xs place-self-end self-center"
        weight="bold"
      />{' '}
    </BaseContextMenu.SubmenuTrigger>
  )
}
