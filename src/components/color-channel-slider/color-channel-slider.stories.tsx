import { ColorChannelSlider } from './color-channel-slider'
import {
  getHueTrack,
  getTransparencyTrack,
  getSaturationTrack,
  getLightnessTrack,
} from './color-channel-slider.utils'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Color Channel Slider',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    size: 'medium',
  },
  component: ColorChannelSlider,
} satisfies Meta<typeof ColorChannelSlider>

type Story = StoryObj<typeof ColorChannelSlider>

export const Hue: Story = {
  name: 'Hue',
  render: (args) => {
    return (
      <ColorChannelSlider
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
      <ColorChannelSlider
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
      <ColorChannelSlider
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
      <ColorChannelSlider
        {...args}
        min={1}
        max={100}
        trackStyle={getLightnessTrack('blue')}
        className={'w-[500px]'}
      />
    )
  },
}
