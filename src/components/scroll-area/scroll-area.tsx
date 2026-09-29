import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area'
import { scrollAreaVariants, type ScrollAreaProps } from './scroll-area.types'
import { cn } from '@/utils/cn'

export const ScrollArea = ({
  defaultHeight = 200,
  orientation,
  variant,
  className,
  children,
  ref,
  ...props
}: ScrollAreaProps) => {
  return (
    <BaseScrollArea.Root
      className={cn(className, scrollAreaVariants({ orientation, variant }))}
      ref={ref}
      style={{
        height: orientation === 'vertical' ? `${defaultHeight}px` : '100%',
      }}
      {...props}
    >
      <BaseScrollArea.Viewport
        data-viewport
        className={cn(
          'flex h-full gap-xs overscroll-contain',
          orientation === 'horizontal' && 'flex-row pb-md',
          orientation === 'vertical' && 'flex-col',
        )}
      >
        {children}
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        data-scrollbar
        className={cn(
          'ml-sm opacity-0 transition-opacity delay-300 hover:cursor-pointer data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-75 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-75',
          orientation === 'vertical' && 'my-2xs mr-3xs w-2xs',
          orientation === 'horizontal' && 'mx-xs mb-xs h-2xs',
        )}
        orientation={orientation!}
      >
        <BaseScrollArea.Thumb className={'size-full rounded-full bg-accent-default shadow-xs'} />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  )
}
