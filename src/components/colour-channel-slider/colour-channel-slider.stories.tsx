import { ColourChannelSlider } from './colour-channel-slider'
import {
  getHueTrack,
  getTransparencyTrack,
  getSaturationTrack,
  getLightnessTrack,
} from './colour-channel-slider.utils'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Colour Channel Slider',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    size: 'medium',
  },
  component: ColourChannelSlider,
} satisfies Meta<typeof ColourChannelSlider>

type Story = StoryObj<typeof ColourChannelSlider>

export const Hue: Story = {
  name: 'Hue',
  render: (args) => {
    return (
      <ColourChannelSlider
        {...args}
        min={1}
        max={360}
        trackStyle={getHueTrack()}
        className={'w-[500px]'}
      />
    )
  },
}

export const Transparency: Story = {
  name: 'Transparency',
  render: (args) => {
    return (
      <ColourChannelSlider
        {...args}
        min={1}
        max={100}
        trackStyle={getTransparencyTrack('blue')}
        className={'w-[500px]'}
      />
    )
  },
}

export const Saturation: Story = {
  name: 'Saturation',
  render: (args) => {
    return (
      <ColourChannelSlider
        {...args}
        min={1}
        max={100}
        trackStyle={getSaturationTrack('blue')}
        className={'w-[500px]'}
      />
    )
  },
}

export const Lightness: Story = {
  name: 'Lightness',
  render: (args) => {
    return (
      <ColourChannelSlider
        {...args}
        min={1}
        max={100}
        trackStyle={getLightnessTrack('blue')}
        className={'w-[500px]'}
      />
    )
  },
}
