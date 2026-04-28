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
          Object.values(errorObj).forEach((fieldErrors) => {
            if (Array.isArray(fieldErrors)) {
              fieldErrors.forEach((err) => {
                if (err?.message) {
                  allMessages.push(err.message)
                }
              })
            }
          })
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
