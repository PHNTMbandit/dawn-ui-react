import React from 'react'
import { SliderGroupContext } from './slider-group-context'
import { cn } from '@/utils/cn'

import type { SliderGroupProps, SliderGroupConfig } from './slider.types'

const toArray = (value: number | readonly number[] | undefined): number[] | undefined =>
  value == null ? undefined : Array.isArray(value) ? [...value] : [value as number]

export const SliderGroup = ({
  className,
  children,
  ref,
  defaultValue,
  value: valueProp,
  onValueChange,
  ...props
}: SliderGroupProps) => {
  const isControlled = valueProp != null
  const [internalValue, setInternalValue] = React.useState<number[] | undefined>(() =>
    toArray(defaultValue),
  )
  const [config, setConfig] = React.useState({ min: 0, max: 100, step: 1 })

  const value = isControlled ? toArray(valueProp) : internalValue

  const setValue = React.useCallback(
    (next: number[]) => {
      if (!isControlled) setInternalValue(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange],
  )

  const registerConfig = React.useCallback((incoming: SliderGroupConfig) => {
    setConfig((prev) =>
      prev.min === incoming.min && prev.max === incoming.max && prev.step === incoming.step
        ? prev
        : { min: incoming.min, max: incoming.max, step: incoming.step },
    )
    if (incoming.defaultValue != null) {
      setInternalValue((prev) => (prev === undefined ? toArray(incoming.defaultValue) : prev))
    }
  }, [])

  const context = React.useMemo(
    () => ({
      value,
      setValue,
      min: config.min,
      max: config.max,
      step: config.step,
      registerConfig,
    }),
    [value, setValue, config, registerConfig],
  )

  return (
    <SliderGroupContext.Provider value={context}>
      <div
        data-slot="slider-group"
        className={cn(
          'flex w-full flex-wrap items-center gap-x-sm',
          '**:data-[slot=slider-label]:basis-full',
          '**:data-[slot=slider-root]:flex-1',
          '**:data-[slot=slider-description]:basis-full',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </SliderGroupContext.Provider>
  )
}
