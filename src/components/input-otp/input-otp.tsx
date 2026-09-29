import { OTPField } from '@base-ui/react'
import React from 'react'
import { cn } from '@/utils/cn'

import type { InputOTPProps } from './input-otp.types'

export const InputOTP = ({
  children,
  className,
  ref,
  id,
  'aria-label': ariaLabel,
  ...props
}: InputOTPProps) => {
  const generatedId = React.useId()
  const fieldId = id ?? generatedId

  return (
    <>
      {ariaLabel && (
        <label className="sr-only" htmlFor={fieldId}>
          {ariaLabel}
        </label>
      )}
      <OTPField.Root
        className={cn('group flex items-center gap-2xs has-disabled:opacity-30', className)}
        id={fieldId}
        ref={ref}
        {...props}
      >
        {children}
      </OTPField.Root>
    </>
  )
}
