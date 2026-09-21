import { SpeakerHighIcon, SpeakerLowIcon } from '@phosphor-icons/react'
import { Slider } from './slider'
import { SliderDescription } from './slider-description'
import { SliderGroup } from './slider-group'
import { SliderIcon } from './slider-icon'
import { SliderInput } from './slider-input'
import { SliderLabel } from './slider-label'
import { SliderValue } from './slider-value'

import type { Meta, StoryObj } from '@storybook/react-vite'

const RANGES = {
  single: 50,
  double: [25, 75],
}

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    subtitle: 'A component for selecting a value from a range.',
    description: {
      component:
        'The Slider component allows users to select a value from a continuous or discrete range by dragging a thumb along a track. It is commonly used in forms and settings where users need to adjust values such as volume, brightness, or other numerical inputs. The Slider can be customized with different sizes, tones, and step values to fit various design needs.',
    },
  },
  argTypes: {
    step: {
      control: { type: 'number' },
      description: 'Step increment for slider movement',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    defaultValue: {
      control: false,
      description: 'Initial value(s) of the slider',
      table: {
        type: { summary: 'number | number[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      table: { disable: true },
    },
  },
  args: {
    defaultValue: 50,
    step: 1,
    min: 0,
    max: 100,
  },
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

export const Playground: Story = {
  render: (args) => <Slider className={'w-[200px]'} {...args} />,
}

export const VerticalOrientation: Story = {
  render: () => (
    <SliderGroup className="h-[240px] w-fit">
      <SliderLabel>Vertical Slider</SliderLabel>
      <Slider
        defaultValue={50}
        min={0}
        max={100}
        step={1}
        orientation="vertical"
        className={'h-[200px]'}
      />
      <SliderDescription>This slider is oriented vertically.</SliderDescription>
    </SliderGroup>
  ),
}

/**
 * Range slider allows selection of both minimum and maximum values.
 */
export const RangeValue: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Price Range</SliderLabel>
      <Slider defaultValue={RANGES.double} min={0} max={1000} step={10} />
      <SliderDescription>Select your budget range</SliderDescription>
    </SliderGroup>
  ),
}

/**
 * Behavior: Slider with min/max labels visible.
 */
export const BehaviorWithLabels: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Temperature</SliderLabel>
      <Slider defaultValue={20} min={-10} max={50} step={1} />
      <SliderDescription>Adjust the temperature in Celsius</SliderDescription>
    </SliderGroup>
  ),
}

/**
 * Behavior: Discrete slider with larger step increments.
 */
export const BehaviorDiscreteSteps: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Priority Level</SliderLabel>
      <Slider defaultValue={5} min={1} max={10} step={1} />
      <SliderDescription>Select priority from 1 to 10</SliderDescription>
    </SliderGroup>
  ),
}

/**
 * Composition: Volume slider with leading and trailing speaker icons.
 */
export const CompositionVolumeControl: Story = {
  render: () => (
    <SliderGroup className="w-[200px]">
      <SliderLabel>Volume</SliderLabel>
      <SliderIcon>
        <SpeakerLowIcon />
      </SliderIcon>
      <Slider defaultValue={60} min={0} max={100} step={1} />
      <SliderIcon>
        <SpeakerHighIcon />
      </SliderIcon>
      <SliderDescription>Adjust the volume level</SliderDescription>
    </SliderGroup>
  ),
}

/**
 * Composition: Price range selector for filtering products.
 */
export const CompositionPriceRange: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-md">
      <div>
        <h3 className="mb-xs style-text-strong-1">Filter by Price</h3>
        <p className="mb-md style-text-prose--1 text-on-surface-variant">
          Choose your ideal price range
        </p>
      </div>
      <Slider defaultValue={[250, 750]} min={0} max={1000} step={10} />
      <div className="flex justify-between text-on-surface-muted">
        <span className="style-text-default--1">Min: $250</span>
        <span className="style-text-default--1">Max: $750</span>
      </div>
    </div>
  ),
}

/**
 * Composition: Brightness and contrast adjustment sliders stacked.
 */
export const CompositionImageSettings: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-lg rounded-lg border border-surface-3 p-md">
      <h3 className="style-text-strong-1">Image Settings</h3>
      <SliderGroup>
        <SliderLabel>Brightness</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Contrast</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Saturation</SliderLabel>
        <Slider defaultValue={100} min={0} max={200} step={10} />
      </SliderGroup>
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="w-[500px] space-y-lg">
      <h3 className="style-text-strong-1">Slider Tones</h3>
      <SliderGroup>
        <SliderLabel>Brand Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="brand" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Accent Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="accent" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Neutral Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="neutral" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Error Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="error" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Info Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="info" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Success Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="success" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Warning Tone</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} tone="warning" />
      </SliderGroup>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="w-[500px] space-y-lg">
      <h3 className="style-text-strong-1">Slider Sizes</h3>
      <SliderGroup>
        <SliderLabel>Small Size</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} size="small" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Medium Size</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} size="medium" />
      </SliderGroup>
      <SliderGroup>
        <SliderLabel>Large Size</SliderLabel>
        <Slider defaultValue={50} min={0} max={100} step={1} size="large" />
      </SliderGroup>
    </div>
  ),
}

export const HideThumb: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Hidden Thumb</SliderLabel>
      <Slider defaultValue={50} min={0} max={100} step={1} showThumbOnHover={false} />
      <SliderDescription>The thumb is hidden until hover</SliderDescription>
    </SliderGroup>
  ),
}

export const HideTrack: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Hidden Track</SliderLabel>
      <Slider defaultValue={50} min={0} max={100} step={1} showIndicator={false} />
      <SliderDescription>The track is hidden</SliderDescription>
    </SliderGroup>
  ),
}

export const ShowValue: Story = {
  render: () => (
    <SliderGroup className="w-[320px]">
      <SliderLabel>Show Value</SliderLabel>
      <Slider defaultValue={50} min={0} max={100} step={1} showTooltip={false} />
      <SliderValue />
      <SliderDescription>The current value is displayed</SliderDescription>
    </SliderGroup>
  ),
}

export const WithInput: Story = {
  render: () => (
    <SliderGroup className="w-[320px]" defaultValue={50}>
      <SliderLabel>Volume</SliderLabel>
      <Slider min={0} max={100} step={1} />
      <SliderInput size="small" />
      <SliderDescription>Drag the slider or type a value</SliderDescription>
    </SliderGroup>
  ),
}

export const Everything: Story = {
  render: () => (
    <SliderGroup className="w-[320px]" defaultValue={50}>
      <SliderLabel>Everything</SliderLabel>
      <SliderIcon>
        <SpeakerLowIcon />
      </SliderIcon>
      <Slider min={0} max={100} step={1} showTooltip={false} />
      <SliderIcon>
        <SpeakerHighIcon />
      </SliderIcon>
      <SliderValue />
      <SliderInput size="small" />
      <SliderDescription>All features combined</SliderDescription>
    </SliderGroup>
  ),
}
