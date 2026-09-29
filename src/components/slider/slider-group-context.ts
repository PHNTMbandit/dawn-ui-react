import { createContext, useContext, useState } from 'react'

import type { SliderGroupContextValue } from '../slider-group/slider-group.types'

export const SliderGroupContext = createContext<SliderGroupContextValue | null>(null)

export const useSliderGroupContext = () => useContext(SliderGroupContext)

export const areNumberArraysEqual = (a?: number[], b?: number[]) =>
  a === b || (a != null && b != null && a.length === b.length && a.every((v, i) => v === b[i]))

export const useStableNumberArray = (next: number[] | undefined) => {
  const [stable, setStable] = useState(next)
  if (!areNumberArraysEqual(stable, next)) {
    setStable(next)
    return next
  }
  return stable
}
