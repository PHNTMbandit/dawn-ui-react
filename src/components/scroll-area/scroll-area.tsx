import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area'
import { cn } from '@/utils/cn'

import type { ScrollAreaProps } from './scroll-area.types'

export const ScrollArea = ({
  orientation = 'vertical',
  defaultHeight = 200,
  className,
  children,
  ref,
  ...props
}: ScrollAreaProps) => {
  return (
    <BaseScrollArea.Root
      className={cn(
        className,
        `overflow-hidden rounded-xl bg-surface-low`,
        orientation === 'horizontal' && 'h-full',
      )}
      ref={ref}
      style={{
        height: orientation === 'vertical' ? `${defaultHeight}px` : '100%',
      }}
      {...props}
    >
      <BaseScrollArea.Viewport
        className={cn(
          'flex h-full gap-xs overscroll-contain rounded-xl bg-surface-low py-xs pr-md inset-shadow-2xs before:pointer-events-none before:absolute before:top-0 before:left-0 before:block before:h-[min(40px,var(--scroll-area-overflow-y-start))] before:w-full before:bg-linear-to-b before:from-shadow before:to-transparent before:transition-[height] before:duration-100 before:ease-out before:content-[""] before:[--scroll-area-overflow-y-start:inherit] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:block after:h-[min(40px,var(--scroll-area-overflow-y-end,40px))] after:w-full after:bg-linear-to-t after:from-shadow after:to-transparent after:transition-[height] after:duration-100 after:ease-out after:content-[""] after:[--scroll-area-overflow-y-end:inherit]',
          orientation === 'horizontal' && 'flex-row pb-md pl-sm',
          orientation === 'vertical' && 'flex-col pl-sm',
        )}
      >
        {children}
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        className={cn(
          'ml-sm opacity-0 transition-opacity delay-300 hover:cursor-pointer data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-75 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-75',
          orientation === 'vertical' && 'my-xs mr-2xs w-2xs',
          orientation === 'horizontal' && 'mx-xs mb-xs h-2xs',
        )}
        orientation={orientation}
      >
        <BaseScrollArea.Thumb className={'size-full rounded-full bg-accent-default shadow-xs'} />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  )
}
