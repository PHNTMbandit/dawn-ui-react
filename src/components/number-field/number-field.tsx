import { NumberField as BaseNumberField } from '@base-ui/react/number-field'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { numberFieldVariants, type NumberFieldTypesProps } from './number-field.types'
import { cn } from '@/utils/cn'

export const NumberField = ({
  size,
  variant,
  children,
  label,
  disableInput = false,
  className,
  ref,
  ...props
}: NumberFieldTypesProps) => {
  const id = React.useId()
  const {
    min,
    max,
    value,
    defaultValue,
    onValueChange,
    'aria-invalid': ariaInvalid,
    ...restProps
  } = props

  const [uncontrolledValue, setUncontrolledValue] = React.useState<number | null>(() => {
    if (typeof defaultValue === 'number') {
      return defaultValue
    }

    return null
  })

  const currentValue = typeof value === 'number' || value === null ? value : uncontrolledValue

  const isOutOfRange =
    typeof currentValue === 'number' &&
    ((typeof min === 'number' && currentValue < min) ||
      (typeof max === 'number' && currentValue > max))

  const mergedAriaInvalid = Boolean(ariaInvalid || isOutOfRange)

  const handleValueChange: NumberFieldTypesProps['onValueChange'] = (...args) => {
    const [nextValue] = args

    if (typeof value !== 'number' && value !== null) {
      setUncontrolledValue(nextValue)
    }

    onValueChange?.(...args)
  }

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return 'iconSmall'
      case 'medium':
        return 'iconMedium'
      case 'large':
        return 'iconLarge'
      default:
        return 'iconMedium'
    }
  }

  return (
    <BaseNumberField.Root
      className={cn(numberFieldVariants({ size, variant, className }))}
      ref={ref}
      aria-invalid={mergedAriaInvalid}
      data-invalid={mergedAriaInvalid ? '' : undefined}
      defaultValue={defaultValue}
      id={id}
      max={max}
      min={min}
      onValueChange={handleValueChange}
      value={value}
      {...restProps}
    >
      {label && (
        <BaseNumberField.ScrubArea className={'cursor-ew-resize'}>
          <label className="cursor-ew-resize style-text-default--1" htmlFor={id}>
            {label}
          </label>
          <BaseNumberField.ScrubAreaCursor>
            <CursorGrowIcon />
          </BaseNumberField.ScrubAreaCursor>
        </BaseNumberField.ScrubArea>
      )}
      <BaseNumberField.Group className="relative flex w-full items-center gap-3xs">
        <BaseNumberField.Decrement
          render={(stepperProps) => (
            <Button
              {...stepperProps}
              tone="error"
              variant={'ghost'}
              size={getButtonSize()}
              className={'shrink-0 rounded-r-none'}
            >
              <MinusIcon weight="bold" />
            </Button>
          )}
        />
        <BaseNumberField.Input
          disabled={disableInput}
          className={cn('w-full text-center focus:outline-none', children && 'text-right')}
        />
        {children && (
          <div
            className={cn(
              'w-full text-left text-on-surface-variant',
              size === 'small' && 'style-text-default--1',
              size === 'medium' && 'style-text-default-0',
              size === 'large' && 'style-text-default-1',
            )}
          >
            {children}
          </div>
        )}
        <BaseNumberField.Increment
          render={(stepperProps) => (
            <Button
              {...stepperProps}
              tone="success"
              variant={'ghost'}
              size={getButtonSize()}
              className={'shrink-0 rounded-l-none'}
            >
              <PlusIcon weight="bold" />
            </Button>
          )}
        />
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 24 14"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Resize cursor</title>
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  )
}
