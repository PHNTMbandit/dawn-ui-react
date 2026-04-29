import { SpeakerHighIcon, SpeakerLowIcon } from '@phosphor-icons/react'
import { Slider } from './slider'

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
    label: {
      control: 'text',
      description: 'Label text displayed above the slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    description: {
      control: 'text',
      description: 'Helper text displayed below the slider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value of the slider range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value of the slider range',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
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
    showMin: {
      control: 'boolean',
      description: 'Display minimum value label',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showMax: {
      control: 'boolean',
      description: 'Display maximum value label',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leadingIcon: {
      table: { disable: true },
    },
    trailingIcon: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  args: {
    label: 'Volume',
    description: 'Adjust the volume level',
    defaultValue: 50,
    step: 1,
    min: 0,
    max: 100,
    showMin: false,
    showMax: false,
  },
} satisfies Meta<typeof Slider>

type Story = StoryObj<typeof Slider>

/**
 * The Playground story demonstrates a basic single-value slider with customizable controls.
 */
export const Playground: Story = {
  render: (args) => <Slider {...args} />,
}

/**
 * Single value slider for selecting a single point in the range.
 */
export const SingleValue: Story = {
  render: () => (
    <Slider label="Brightness" defaultValue={RANGES.single} min={0} max={100} step={1} />
  ),
}

/**
 * Range slider allows selection of both minimum and maximum values.
 */
export const RangeValue: Story = {
  render: () => (
    <Slider
      label="Price Range"
      description="Select your budget range"
      defaultValue={RANGES.double}
      min={0}
      max={1000}
      step={10}
      showMin
      showMax
    />
  ),
}

/**
 * Behavior: Slider with min/max labels visible.
 */
export const BehaviorWithLabels: Story = {
  render: () => (
    <Slider
      label="Temperature"
      description="Adjust the temperature in Celsius"
      defaultValue={20}
      min={-10}
      max={50}
      step={1}
      showMin
      showMax
    />
  ),
}

/**
 * Behavior: Discrete slider with larger step increments.
 */
export const BehaviorDiscreteSteps: Story = {
  render: () => (
    <Slider
      label="Priority Level"
      description="Select priority from 1 to 10"
      defaultValue={5}
      min={1}
      max={10}
      step={1}
      showMin
      showMax
    />
  ),
}

/**
 * Composition: Volume slider with leading and trailing speaker icons.
 */
export const CompositionVolumeControl: Story = {
  render: () => (
    <Slider
      label="Speaker Volume"
      description="Control audio output"
      defaultValue={60}
      min={0}
      max={100}
      step={1}
      leadingIcon={SpeakerLowIcon}
      trailingIcon={SpeakerHighIcon}
    />
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
      <Slider
        label="Price Range (USD)"
        description="Drag to filter products"
        defaultValue={[250, 750]}
        min={0}
        max={1000}
        step={10}
        showMin
        showMax
      />
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
      <Slider label="Brightness" defaultValue={50} min={0} max={100} step={1} showMin showMax />
      <Slider label="Contrast" defaultValue={50} min={0} max={100} step={1} showMin showMax />
      <Slider label="Saturation" defaultValue={100} min={0} max={200} step={10} showMin showMax />
    </div>
  ),
}
