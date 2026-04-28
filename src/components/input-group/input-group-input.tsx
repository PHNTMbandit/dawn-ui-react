import { Input as BaseInput } from '@base-ui/react/input'
import { cn } from '@/utils/cn'

import type { InputGroupInputProps } from './input-group.types'

export const InputGroupInput = ({ className, ref, ...props }: InputGroupInputProps) => {
  return (
    <BaseInput
      className={cn(
        'w-full grow text-ellipsis outline-none placeholder:opacity-60 disabled:cursor-not-allowed',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
