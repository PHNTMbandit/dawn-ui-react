import { InputOTP as InputOTPBase } from './input-otp'
import { InputOtpSeparator } from './input-otp-separator'
import { InputOTPSlot } from './input-otp-slot'

export const InputOTP = Object.assign(InputOTPBase, {
  Slot: InputOTPSlot,
  Separator: InputOtpSeparator,
})

export type { InputOTPProps, InputOTPSlotProps, InputOtpSeparatorProps } from './input-otp.types'
export { InputOTPSlot } from './input-otp-slot'
export { InputOtpSeparator } from './input-otp-separator'
