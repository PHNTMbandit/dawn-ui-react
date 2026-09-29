import { createToastManager } from './toast-manager'

export { StackToasts } from './stack-toasts'
export type {
  AnchoredToastProps,
  StackToastProps,
  ToastProviderProps,
  ToastVariant,
  AnchoredToastData,
  StackToastData,
  AnchoredToastItemProps,
  StackToastItemProps,
} from './toast.types'
export { useToastManager } from './toast-manager'
export { ToastProvider } from './toast-provider'
export { AnchoredToasts } from './anchored-toasts'
export { AnchoredToastItem } from './anchored-toast-item'
export { StackToastItem } from './stack-toast-item'

export const anchoredToastManager = createToastManager()
export const stackToastManager = createToastManager()
