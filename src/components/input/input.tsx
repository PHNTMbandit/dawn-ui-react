import { Input as BaseInput } from '@base-ui/react/input'
import { useRef, useState } from 'react'
import { inputVariants, type InputProps } from './input.types'
import { cn } from '@/utils/cn'

export const Input = ({ variant, size, className, ref, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [colorValue, setColorValue] = useState<string>((props.defaultValue as string) || '#000000')

  if (props.type === 'color') {
    return (
      <button
        aria-label="Open color picker"
        className="relative h-xl w-[calc(var(--spacing-3xl)+5rem)] items-center rounded-xl pl-xs transition-all peer-focus:outline-brand-default hover:cursor-pointer"
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        <div
          className={cn(
            'absolute top-1/2 left-[0px] aspect-square h-full -translate-y-1/2 rounded-l-xl',
          )}
          style={{
            backgroundColor: colorValue,
          }}
        />
        <BaseInput
          className="peer pointer-events-none invisible absolute top-lg"
          defaultValue={colorValue}
          onChange={(e) => setColorValue(e.currentTarget.value)}
          ref={inputRef}
          type="color"
          value={colorValue}
          {...props}
        />
        <p className="pl-xl text-left style-text-default-0">{colorValue}</p>
      </button>
    )
  }

  return (
    <BaseInput className={cn(inputVariants({ variant, size }), className)} ref={ref} {...props} />
  )
}
