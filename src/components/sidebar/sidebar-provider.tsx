import React from 'react'
import { cn } from '@/utils/cn'

type SidebarContextProps = React.ComponentProps<'div'> & {
  id: string
  defaultOpen?: boolean
  trigger?: () => void
  open?: boolean
  setOpen?: (open: boolean) => void
  isMobile?: boolean
  setIsMobile?: (isMobile: boolean) => void
  side?: 'left' | 'right'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

export const SidebarProvider = ({
  id,
  defaultOpen = true,
  side = 'left',
  collapsible = 'icon',
  className,
  children,
  ref,
  ...props
}: SidebarContextProps) => {
  const SIDEBAR_COOKIE_NAME = `sidebar-state-${id}`
  const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
  const [open, _setOpen] = React.useState<boolean>(defaultOpen)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  const setOpen = React.useCallback(
    (value: boolean | ((open: boolean) => boolean)) => {
      _setOpen((prev) => {
        const openState = typeof value === 'function' ? value(prev) : value

        document.cookie = [
          `${SIDEBAR_COOKIE_NAME}=${encodeURIComponent(String(openState))}`,
          'path=/',
          `max-age=${SIDEBAR_COOKIE_MAX_AGE}`,
          'samesite=lax',
        ].join('; ')

        return openState
      })
    },
    [SIDEBAR_COOKIE_NAME, SIDEBAR_COOKIE_MAX_AGE],
  )

  const trigger = () => setOpen((prev) => !prev)

  React.useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 328
      setIsMobile(mobile)
      if (mobile && defaultOpen && collapsible !== 'none') {
        setOpen(false)
      }
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [defaultOpen, collapsible, setOpen])

  return (
    <SidebarContext.Provider
      value={{
        id,
        defaultOpen,
        open,
        setOpen,
        side,
        trigger,
        isMobile,
        setIsMobile,
        collapsible,
      }}
    >
      <div
        className={cn(
          'relative size-full',
          side === 'left' ? 'flex flex-row' : 'flex flex-row-reverse',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
