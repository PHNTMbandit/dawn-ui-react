import { Alert as AlertBase } from './alert'
import { AlertAction } from './alert-action'
import { AlertDescription } from './alert-description'
import { AlertIcon } from './alert-icon'
import { AlertTitle } from './alert-title'

export const Alert = Object.assign(AlertBase, {
  Description: AlertDescription,
  Title: AlertTitle,
  Action: AlertAction,
  Icon: AlertIcon,
})

export type {
  AlertActionProps,
  AlertDescriptionProps,
  AlertIconProps,
  AlertProps,
  AlertTitleProps,
} from './alert.types'
export { AlertDescription } from './alert-description'
export { AlertTitle } from './alert-title'
export { AlertAction } from './alert-action'
export { AlertIcon } from './alert-icon'
