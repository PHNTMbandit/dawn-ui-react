import * as BaseResizable from 'react-resizable-panels'
import { cn } from '@/utils/cn'

import type { ResizeablePanelProps } from './resizeable.types'

export const ResizeablePanel = ({ className, ...props }: ResizeablePanelProps) => {
  return (
    <BaseResizable.Panel className={cn('', className)} data-slot="resizable-panel" {...props} />
  )
}
