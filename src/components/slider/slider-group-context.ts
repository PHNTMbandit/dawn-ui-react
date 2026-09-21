// oxlint-disable typescript/no-redundant-type-constituents
import { createContext, useContext } from 'react'

import type { SliderGroupContextValue } from './slider.types'

export const SliderGroupContext = createContext<SliderGroupContextValue | null>(null)

export const useSliderGroupContext = () => useContext(SliderGroupContext)
