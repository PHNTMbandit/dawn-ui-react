import { createContext, useContext } from 'react'

export type SliderGroupConfig = {
  min: number
  max: number
  step: number
  defaultValue?: number | readonly number[]
}

export type SliderGroupContextValue = {
  value: number[] | undefined
  setValue: (value: number[]) => void
  min: number
  max: number
  step: number
  // Lets the Slider publish its min/max/step (and seed the initial value) to the group.
  registerConfig: (config: SliderGroupConfig) => void
}

export const SliderGroupContext = createContext<SliderGroupContextValue | null>(null)

export const useSliderGroupContext = () => useContext(SliderGroupContext)
