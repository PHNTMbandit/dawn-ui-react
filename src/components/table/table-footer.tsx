import { useTableContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableFooterProps } from './table.types'

export const TableFooter = ({ className, children, ref, ...props }: TableFooterProps) => {
  const table = useTableContext()

  return (
    <tfoot className={cn('', className)} ref={ref} {...props}>
      {children}
      {table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <table.AppFooter header={header} key={header.id}>
              {(footer) => (
                <td
                  style={{
                    width: footer.getSize(),
                  }}
                  colSpan={footer.colSpan}
                >
                  <table.FlexRender footer={footer} />
                </td>
              )}
            </table.AppFooter>
          ))}
        </tr>
      ))}
    </tfoot>
  )
}
