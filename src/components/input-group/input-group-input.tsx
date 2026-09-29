import { Input as BaseInput } from '@base-ui/react/input'
import { useRef, useState } from 'react'
import { cn } from '@/utils/cn'

import type { InputGroupInputProps } from './input-group.types'

export const InputGroupInput = ({
  size = 'medium',
  className,
  ref,
  ...props
}: InputGroupInputProps) => {
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
      if (!isControlled) {
        setUncontrolledColorValue((event.currentTarget as HTMLInputElement).value)
      }

      onChange?.(event)
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

    return (
      <button
        aria-label="Open color picker"
        className={cn(
          'relative flex size-full items-center justify-start hover:cursor-pointer',
          className,
        )}
        disabled={props.disabled}
        onClick={() => inputRef.current?.click()}
        type="button"
      >
        <div
          className={cn(
            'absolute top-1/2 left-0 aspect-square h-7/12 -translate-y-1/2',
            size === 'small' && 'rounded-md',
            size === 'medium' && 'rounded-lg',
            size === 'large' && 'rounded-xl',
          )}
          style={{
            backgroundColor: colorValue,
          }}
        />
        <BaseInput
          className="peer pointer-events-none invisible absolute top-lg"
          defaultValue={!isControlled ? colorValue : undefined}
          onChange={handleColorChange}
          ref={handleColorRef}
          type="color"
          value={isControlled ? colorValue : undefined}
          {...colorProps}
        />
        <p
          className={cn(
            'text-left',
            size === 'small' && 'pr-xs pl-lg style-text-default--1',
            size === 'medium' && 'pl-[calc(var(--dawn-spacing-lg)+6px)] style-text-default-0',
            size === 'large' && 'pl-2xl style-text-default-1',
          )}
        >
          {colorValue}
        </p>
      </button>
    )
  }

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
