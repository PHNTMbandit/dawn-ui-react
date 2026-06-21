import { Input as BaseInput } from '@base-ui/react/input'
import { useRef, useState } from 'react'
import { inputVariants, type InputProps } from './input.types'
import { cn } from '@/utils/cn'

import type { BaseUIEvent } from '@base-ui/react'

export const Input = ({ compact, variant, size, className, ref, ...props }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uncontrolledColorValue, setUncontrolledColorValue] = useState<string>(
    (props.defaultValue as string) || (props.value as string) || '#000000',
  )

  if (props.type === 'color') {
    const isControlled = props.value !== undefined
    const colorValue =
      ((isControlled ? props.value : uncontrolledColorValue) as string) || '#000000'
    const { onChange, defaultValue: _defaultValue, value: _value, ...colorProps } = props

    const handleColorChange: NonNullable<typeof onChange> = (event) => {
      console.log('Color changed to:', event.currentTarget.value)
      if (!isControlled) {
        setUncontrolledColorValue((event.currentTarget as HTMLInputElement).value)
      }

      onChange?.(event)
    }

    const handleInputChange = (event: BaseUIEvent<React.ChangeEvent<HTMLInputElement>>) => {
      console.log('Input changed to:', event.currentTarget.value)
    }

    const handleColorRef = (node: HTMLInputElement | null) => {
      inputRef.current = node

      if (typeof ref === 'function') {
        ref(node)
        return
      }

      if (ref && typeof ref === 'object') {
        ;(ref as { current: HTMLInputElement | null }).current = node
      }
    }

    if (compact) {
      return (
        <button
          aria-label="Open color picker"
          className={cn(
            'relative flex items-center justify-between rounded-full outline-2 outline-transparent transition-colors focus-within:outline-border hover:cursor-pointer',
            size === 'small' && 'size-lg -outline-offset-2',
            size === 'medium' && 'size-xl -outline-offset-4',
            size === 'large' && 'size-2xl -outline-offset-6',
            className,
          )}
          disabled={props.disabled}
          onClick={() => inputRef.current?.click()}
          type="button"
        >
          <div
            className={cn('size-full rounded-full')}
            style={{
              backgroundColor: colorValue,
            }}
          />
          <BaseInput
            className="peer pointer-events-none invisible absolute"
            defaultValue={!isControlled ? colorValue : undefined}
            onBlur={handleColorChange}
            ref={handleColorRef}
            type="color"
            value={isControlled ? colorValue : undefined}
            {...colorProps}
          />
        </button>
      )
    }

    return (
      <button
        aria-label="Open color picker"
        className={cn('relative hover:cursor-pointer', inputVariants({ variant, size }), className)}
        disabled={props.disabled}
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        <div
          className={cn(
            'absolute top-1/2 left-xs aspect-square h-7/12 -translate-y-1/2 rounded-full',
          )}
          style={{
            backgroundColor: colorValue,
          }}
        />
        <BaseInput
          className="peer pointer-events-none invisible absolute top-lg"
          defaultValue={!isControlled ? colorValue : undefined}
          onChange={(event) => handleInputChange(event)}
          ref={handleColorRef}
          type="color"
          value={isControlled ? colorValue : undefined}
          {...colorProps}
        />
        <p className="pl-lg text-left style-text-default-0">{colorValue}</p>
      </button>
    )
  }

  return (
    <BaseInput className={cn(inputVariants({ variant, size }), className)} ref={ref} {...props} />
  )
}
