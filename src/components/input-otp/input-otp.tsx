import { OTPFieldPreview as OTPField } from '@base-ui/react/otp-field'
import { cn } from '@/utils/cn'

import type { InputOTPProps } from './input-otp.types'

export const InputOTP = ({ children, className, ref, ...props }: InputOTPProps) => {
  return (
    <OTPField.Root
      className={cn('group flex items-center gap-2xs has-disabled:opacity-30', className)}
      ref={ref}
      {...props}
    >
      {children}
    </OTPField.Root>
  )
}
