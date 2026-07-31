import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'
import { ComboboxItem } from './combobox-item'
import { useFilteredItems, type ComboboxVirtualizedListProps } from './combobox.types'
import { cn } from '@/utils/cn'

export const ComboboxVirtualizedList = <TItem,>({
  open,
  virtualizerRef,
  estimateSize = 32,
  overscan = 20,
  className,
  children,
  ...props
}: ComboboxVirtualizedListProps<TItem>) => {
  const filteredItems = useFilteredItems<TItem>()
  const scrollElementRef = React.useRef<HTMLDivElement | null>(null)
  const virtualizer = useVirtualizer<HTMLDivElement, HTMLDivElement>({
    enabled: open,
    count: filteredItems.length,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => estimateSize,
    overscan,
    paddingStart: 8,
    paddingEnd: 8,
    scrollPaddingStart: 8,
    scrollPaddingEnd: 8,
  })

  React.useEffect(() => {
    if (virtualizerRef) {
      virtualizerRef.current = virtualizer
    }
  }, [virtualizer, virtualizerRef])

  const handleScrollElementRef = React.useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element
      if (element) {
        virtualizer.measure()
      }
    },
    [virtualizer],
  )

  const totalSize = virtualizer.getTotalSize()

  if (!filteredItems.length) {
    return null
  }

  return (
    <div
      role="presentation"
      ref={handleScrollElementRef}
      style={{ '--total-size': `${totalSize}px` } as React.CSSProperties}
      className={cn(
        'h-[min(22.5rem,var(--total-size))] max-h-(--available-height) scroll-py-3xs overflow-auto overscroll-contain',
        className,
      )}
      {...props}
    >
      <div role="presentation" className="relative w-full" style={{ height: totalSize }}>
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = filteredItems[virtualItem.index]
          if (!item) {
            return null
          }

          return (
            <ComboboxItem
              key={virtualItem.key}
              index={virtualItem.index}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              value={item}
              aria-setsize={filteredItems.length}
              aria-posinset={virtualItem.index + 1}
              className={'first-of-type:mt-0!'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {typeof children === 'function' ? children(item) : children}
            </ComboboxItem>
          )
        })}
      </div>
    </div>
  )
}
