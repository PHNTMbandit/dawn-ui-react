import { Button } from '../button'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarToggleProps } from './sidebar.types'

export const SidebarToggle = ({ className, children, ref, ...props }: SidebarToggleProps) => {
  const { trigger, open, collapsible } = useSidebar()

  if (!trigger || collapsible === 'none') {
    return null
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (trigger) {
      trigger()
    }
  }

  return (
    <Button
      className={cn('shrink-0 border-none', className)}
      ref={ref}
      size={'iconMedium'}
      variant="ghost"
      onClick={handleClick}
      {...props}
    >
      {typeof children === 'function' ? children(open) : children}
    </Button>
  )
}
