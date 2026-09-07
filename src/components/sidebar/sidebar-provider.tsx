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
  const getOpenState = () => {
    const savedState = localStorage.getItem(`sidebarOpen-${id}`)
    return savedState !== null ? JSON.parse(savedState) : defaultOpen
  }

  const [open, setOpen] = React.useState<boolean>(getOpenState())
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

  React.useEffect(() => {
    const storedOpen = localStorage.getItem(`sidebarOpen-${id}`)
    if (storedOpen !== null) {
      localStorage.setItem(`sidebarOpen-${id}`, storedOpen)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem(`sidebarOpen-${id}`, JSON.stringify(open))
  }, [open, id])

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
