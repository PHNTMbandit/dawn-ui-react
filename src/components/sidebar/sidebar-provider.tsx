import React from 'react'
import { cn } from '@/utils/cn'

type SidebarContextProps = React.ComponentProps<'div'> & {
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
  defaultOpen = true,
  side = 'left',
  collapsible = 'icon',
  className,
  children,
  ref,
  ...props
}: SidebarContextProps) => {
  const [open, setOpen] = React.useState<boolean>(defaultOpen)
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  const trigger = () => setOpen(!open)

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
  }, [defaultOpen, collapsible])

  return (
    <SidebarContext.Provider
      value={{
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
