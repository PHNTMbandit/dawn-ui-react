import * as BaseResizable from 'react-resizable-panels'
import { cn } from '@/utils/cn'

import type { ResizeablePanelGroupProps } from './resizeable.types'

export const ResizeablePanelGroup = ({ className, ...props }: ResizeablePanelGroupProps) => {
  return (
    <BaseResizable.Group
      className={cn('flex h-full aria-[orientation=vertical]:flex-col', className)}
      data-slot="resizable-panel-group"
      {...props}
    />
  )
}
