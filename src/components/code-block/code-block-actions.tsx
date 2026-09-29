import { cn } from '@/utils/cn'

import type { CodeBlockActionsProps } from './code-block.types'

export const CodeBlockActions = ({ className, children, ref, ...props }: CodeBlockActionsProps) => {
  return (
    <div
      className={cn('absolute top-3xs right-3xs flex items-center gap-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
