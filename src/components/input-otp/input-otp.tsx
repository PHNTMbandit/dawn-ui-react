import { OTPInput } from 'input-otp'
import { InputOTPSlot } from './input-otp-slot'
import { cn } from '@/utils/cn'

import type { InputOTPProps } from './input-otp.types'

// oxlint-disable-next-line no-unused-vars
export const InputOTP = ({ children, className, ref, ...props }: InputOTPProps) => {
  return (
    <OTPInput
      containerClassName={cn(
        'group flex items-center gap-2xs has-[:disabled]:opacity-30',
        className,
      )}
      data-slot="input-otp"
      ref={ref}
      {...props}
      render={({ slots }) => slots.map((slot, index) => <InputOTPSlot key={index} {...slot} />)}
    />
  )
}
