import { XCircleIcon } from '@phosphor-icons/react'
import { Alert, AlertDescription } from '../alert'
import { AlertContent } from '../alert/alert-content'
import { useFormContext } from './form-context'
import { cn } from '@/utils/cn'

import type { FormErrorsProps } from './form.types'

export const FormErrors = ({ className, children, ref, ...props }: FormErrorsProps) => {
  const form = useFormContext()

  return (
    <form.Subscribe selector={(state) => [state.errors]}>
      {([errors]) => {
        if (!errors || errors.length === 0) {
          return null
        }

        const allMessages: string[] = []

        errors.forEach((errorObj) => {
          if (typeof errorObj === 'string') {
            allMessages.push(errorObj)
          } else if (errorObj?.message && typeof errorObj.message === 'string') {
            allMessages.push(errorObj.message)
          } else if (typeof errorObj === 'object' && errorObj !== null) {
            const extractMessages = (obj: unknown): void => {
              if (typeof obj === 'string') {
                allMessages.push(obj)
              } else if (Array.isArray(obj)) {
                obj.forEach(extractMessages)
              } else if (typeof obj === 'object' && obj !== null) {
                if ('message' in obj && typeof (obj as any).message === 'string') {
                  allMessages.push((obj as any).message)
                } else {
                  Object.values(obj).forEach(extractMessages)
                }
              }
            }
            extractMessages(errorObj)
          }
        })

        return (
          <Alert className={cn('', className)} ref={ref} tone="error" {...props}>
            <XCircleIcon weight="duotone" />
            <AlertContent>
              {children}
              <AlertDescription>
                <ul>
                  {allMessages.length > 0 ? (
                    allMessages.map((message) => <li key={message}>{message}</li>)
                  ) : (
                    <li className="style-text-prose--1">{errors.toString()}</li>
                  )}
                </ul>
              </AlertDescription>
            </AlertContent>
          </Alert>
        )
      }}
    </form.Subscribe>
  )
}
