import React from 'react'
import { textAreaVariants, type TextAreaProps } from './text-area.types'
import { cn } from '@/utils/cn'

export const TextArea = ({ variant, className, ref, ...props }: TextAreaProps) => {
  const isControlled = props.value !== undefined
  const [internalValue, setInternalValue] = React.useState(String(props.defaultValue ?? ''))
  const value = isControlled ? String(props.value ?? '') : internalValue
  const maxLength = props.maxLength
  const hasMaxLength = typeof maxLength === 'number'
  const isMaxLengthExceeded = hasMaxLength && value.length >= maxLength

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }

    props.onChange?.(e)
  }

  return (
    <div
      className={cn(
        textAreaVariants({ variant, className }),
        isMaxLengthExceeded
          ? 'outline-error-border-strong'
          : 'focus-within:outline-brand-border-strong',
      )}
      data-disabled={props.disabled ? true : undefined}
    >
      <textarea
        className="grow resize-none px-sm py-xs style-text-prose-0 outline-none focus-within:caret-brand-border-strong"
        ref={ref}
        {...props}
        onChange={handleChange}
        value={value}
      />
      {hasMaxLength && (
        <span
          className={cn(
            'w-full px-xs py-2xs text-right style-text-default--1 text-on-surface-variant',
            isMaxLengthExceeded && 'text-error-default',
          )}
        >
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  )
}
