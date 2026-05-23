import { cn } from '@/utils/cn'

import type { CodeBlockHeaderGroupProps } from './code-block.types'

export const CodeBlockHeaderGroup = ({
  className,
  children,
  ref,
  ...props
}: CodeBlockHeaderGroupProps) => {
  return (
    <div className={cn('flex items-center justify-center gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
