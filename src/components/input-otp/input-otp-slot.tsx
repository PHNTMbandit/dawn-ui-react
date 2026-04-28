import { cn } from '@/utils/cn'

import type { InputOTPSlotProps } from './input-otp.types'

export const InputOTPSlot = ({ isActive, ...props }: InputOTPSlotProps) => {
  return (
    <div
      className={cn(
        'group relative flex h-lg w-md items-center justify-center rounded-md bg-surface style-text-default-0 outline outline-transparent transition-colors hover:outline-border-strong',
        isActive && 'outline-brand-border-strong',
      )}
      {...props}
    >
      <div className="transition-colors group-has-[input[data-input-otp-placeholder-shown]]:text-on-surface-variant group-has-[input[data-input-otp-placeholder-shown]]:opacity-70">
        {props.char ?? props.placeholderChar}
      </div>
    </div>
  )
}
