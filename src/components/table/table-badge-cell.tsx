import { Badge } from '../badge'
import { useCellContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableBadgeCellProps } from './table.types'

export const TableBadgeCell = ({
  className,
  children,
  ref,
  tone,
  ...props
}: TableBadgeCellProps) => {
  const cell = useCellContext<string>()
  const value = cell.getValue()
  const resolvedTone = typeof tone === 'function' ? tone(value) : tone

  return (
    <Badge variant={'soft'} className={cn('', className)} ref={ref} tone={resolvedTone} {...props}>
      {children}
      {value}
    </Badge>
  )
}
