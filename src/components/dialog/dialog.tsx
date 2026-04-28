import { Dialog as BaseDialog } from '@base-ui/react/dialog'

import type { DialogProps } from './dialog.types'

export const Dialog = ({ children, ...props }: DialogProps) => {
  return <BaseDialog.Root {...props}>{children}</BaseDialog.Root>
}
