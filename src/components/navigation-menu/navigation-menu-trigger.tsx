import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

import type { NavigationMenuTriggerProps } from './navigation-menu.types'

export const navigationMenuTriggerVariants = cva(
  'flex items-center justify-center rounded-full bg-transparent no-underline transition-colors select-none hover:cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-1',
  {
    variants: {
      size: {
        small: 'h-lg gap-3xs px-xs style-text-default--1 [&>svg]:size-xs',
        medium: 'h-xl gap-2xs px-sm style-text-default-0 [&>svg]:size-sm',
        large: 'h-2xl gap-xs px-md style-text-default-2 [&>svg]:size-md',
      },
      tone: {
        brand:
          'text-brand-default data-popup-open:bg-brand-container data-popup-open:text-brand-on-container',
        accent:
          'text-accent-default data-popup-open:bg-accent-container data-popup-open:text-accent-on-container',
        neutral:
          'text-neutral-default data-popup-open:bg-neutral-container data-popup-open:text-neutral-on-container',
        error:
          'text-error-default data-popup-open:bg-error-container data-popup-open:text-error-on-container',
        info: 'text-info-default data-popup-open:bg-info-container data-popup-open:text-info-on-container',
        success:
          'text-success-default data-popup-open:bg-success-container data-popup-open:text-success-on-container',
        warning:
          'text-warning-default data-popup-open:bg-warning-container data-popup-open:text-warning-on-container',
      },
    },
    defaultVariants: {
      size: 'medium',
      tone: 'neutral',
    },
  },
)

export const NavigationMenuTrigger = ({
  size,
  tone,
  className,
  children,
  ref,
  ...props
}: NavigationMenuTriggerProps) => {
  return (
    <BaseNavigationMenu.Trigger
      className={cn(navigationMenuTriggerVariants({ size, tone }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseNavigationMenu.Trigger>
  )
}
