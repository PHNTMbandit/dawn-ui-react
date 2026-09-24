import { Popover as BasePopover } from '@base-ui/react/popover'
import { cva, type VariantProps } from 'class-variance-authority'
import { Button } from '..'

export const popoverPanelVariants = cva(
  'relative z-99 h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) overflow-hidden rounded-2xl text-on-surface transition-[width,height,opacity,scale] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0',
  {
    variants: {
      elevation: {
        low: 'bg-surface shadow-sm',
        medium: 'bg-surface-2 shadow-md',
        high: 'bg-surface-3 shadow-lg',
      },
    },
    defaultVariants: {
      elevation: 'medium',
    },
  },
)

export type PopoverProps = React.ComponentProps<typeof BasePopover.Root>
export type PopoverTriggerProps = React.ComponentProps<typeof BasePopover.Trigger>
export type PopoverPanelProps = React.ComponentProps<typeof BasePopover.Positioner> &
  VariantProps<typeof popoverPanelVariants>
export type PopoverTitleProps = React.ComponentProps<typeof BasePopover.Title>
export type PopoverDescriptionProps = React.ComponentProps<typeof BasePopover.Description>
export type PopoverHeaderProps = React.ComponentProps<'div'>
export type PopoverContentProps = React.ComponentProps<'div'>
export type PopoverButtonProps = React.ComponentProps<typeof Button>
export const popoverHandle = BasePopover.createHandle<React.ComponentType>()
