import React from 'react'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarProps } from './sidebar.types'

export const Sidebar = ({
  tone = 'default',
  width = 400,
  className,
  children,
  ...props
}: SidebarProps) => {
  const { open, setOpen, isMobile, collapsible, side } = useSidebar()
  const sidebarRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isMobile) {
        if (open && setOpen) {
          setOpen(false)
        }
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [open, setOpen, isMobile])

  const getWidthStyle = (): React.CSSProperties => {
    if (collapsible === 'none') {
      return { width: `${width}px` }
    }

    if (collapsible === 'offcanvas') {
      if (open) {
        return isMobile ? { width: '33.333333%' } : { width: `${width}px` }
      } else {
        return isMobile ? { width: '0px' } : { width: '0px' }
      }
    }

    if (collapsible == 'icon') {
      if (open) {
        return isMobile ? { width: `${width}px` } : { width: `${width}px` }
      } else {
        return isMobile ? { width: '0px' } : { width: '80px' }
      }
    }

    return { width: `${width}px` }
  }

  const getGapClasses = () => {
    if (collapsible === 'none') {
      return 'gap-lg'
    }

    if (collapsible === 'offcanvas') {
      return open ? 'gap-lg' : 'gap-sm'
    }

    if (collapsible === 'icon') {
      return open ? 'gap-lg' : 'gap-sm'
    }

    return 'gap-lg'
  }

  const getPositionClasses = () => {
    if ((collapsible === 'offcanvas' || collapsible === 'icon') && !open && isMobile) {
      return 'absolute z-50 -translate-x-full'
    }

    if ((collapsible === 'offcanvas' || collapsible === 'icon') && open && isMobile) {
      return 'absolute z-50'
    }

    return ''
  }

  return (
    <div
      className={cn(
        'sticky left-[0px] flex h-full shrink-0 flex-col justify-between overflow-hidden border-border bg-surface transition-[width,transform] duration-300 ease-in-out',
        className,
        tone === 'ghost' && !isMobile && 'bg-transparent',
        getGapClasses(),
        getPositionClasses(),
        collapsible === 'offcanvas' && !open && 'border-none',
        open && 'p-md',
        collapsible === 'icon' && !open && 'py-md',
        isMobile && 'border-none',
        side === 'left' ? 'border-r' : 'border-l',
      )}
      ref={sidebarRef}
      style={getWidthStyle()}
      {...props}
    >
      {children}
    </div>
  )
}
