import { SpeakerHighIcon, SpeakerLowIcon } from '@phosphor-icons/react'
import { Slider } from '../slider'
import { SliderDescription } from './slider-description'
import { SliderGroup } from './slider-group'
import { SliderGroupSlider } from './slider-group-slider'
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
  title: 'Components/Slider Group',
  component: SliderGroup,
  parameters: {
    subtitle: 'Groups a slider with labels, icons, a value readout and a number input.',
    description: {
      component:
        'SliderGroup owns the shared value and configuration for a slider and its companions. Use SliderGroupSlider (instead of the standalone Slider) when SliderInput or SliderValue must stay in sync with the slider; SliderLabel, SliderDescription and SliderIcon provide layout and context.',
    },
  },
} satisfies Meta<typeof SliderGroup>

type Story = StoryObj<typeof SliderGroup>

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
    <SliderGroup className="w-[320px]" defaultValue={50}>
      <SliderLabel>Show Value</SliderLabel>
      <SliderGroupSlider min={0} max={100} step={1} showTooltip={false} />
      <SliderValue />
      <SliderDescription>The current value is displayed</SliderDescription>
    </SliderGroup>
  ),
}

export const WithInput: Story = {
  render: () => (
    <SliderGroup className="w-[320px]" defaultValue={50}>
      <SliderLabel>Volume</SliderLabel>
      <SliderGroupSlider min={0} max={100} step={1} />
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
      <SliderGroupSlider min={0} max={100} step={1} showTooltip={false} />
      <SliderIcon>
        <SpeakerHighIcon />
      </SliderIcon>
      <SliderValue />
      <SliderInput size="small" />
      <SliderDescription>All features combined</SliderDescription>
    </SliderGroup>
  ),
}
