import type { Slider as BaseSlider } from '@base-ui/react'
import type { Icon } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

export type SliderProps = ComponentProps<typeof BaseSlider.Root> & {
  label?: string
  description?: string
  leadingIcon?: Icon
  trailingIcon?: Icon
  showMin?: boolean
  showMax?: boolean
}
export type SliderThumbProps = ComponentProps<typeof BaseSlider.Thumb>
