import type { Toast as BaseToast, ToastObject } from '@base-ui/react/toast'
import type { Icon } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

export type ToastVariant = 'brand' | 'accent' | 'neutral' | 'success' | 'error' | 'info' | 'warning'

export type ToastProviderProps = ComponentProps<'div'>
export type AnchoredToastProps = ComponentProps<typeof BaseToast.Viewport>
export type StackToastProps = ComponentProps<typeof BaseToast.Viewport>
export type StackToastData = {
  icon?: Icon
  variant?: ToastVariant
  [key: string]: unknown
}

export type StackToastItemProps = React.ComponentProps<'div'> & {
  toast: ToastObject<StackToastData>
}
export type AnchoredToastData = {
  [key: string]: unknown
}

export type AnchoredToastItemProps = React.ComponentProps<'div'> & {
  toast: ToastObject<AnchoredToastData>
}
