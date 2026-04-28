import { Popover as BasePopover } from '@base-ui/react/popover'

export type PopoverProps = React.ComponentProps<typeof BasePopover.Root>
export type PopoverTriggerProps = React.ComponentProps<typeof BasePopover.Trigger>
export type PopoverPanelProps = React.ComponentProps<typeof BasePopover.Positioner>
export type PopoverTitleProps = React.ComponentProps<typeof BasePopover.Title>
export type PopoverDescriptionProps = React.ComponentProps<typeof BasePopover.Description>
export type PopoverHeaderProps = React.ComponentProps<'div'>
export type PopoverContentProps = React.ComponentProps<'div'>
export const popoverHandle = BasePopover.createHandle<React.ComponentType>()
