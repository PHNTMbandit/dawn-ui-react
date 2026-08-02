import chroma from 'chroma-js'
import { useState } from 'react'
import { Separator } from '../separator'
import { ColourPicker } from './colour-picker'
import { ColourPickerArea } from './colour-picker-area'
import { ColourPickerGroup } from './colour-picker-group'
import { ColourPickerHueSlider } from './colour-picker-hue-slider'
import { ColourPickerInput } from './colour-picker-input'
import { ColourPickerLabel } from './colour-picker-label'
import { ColourPickerLightnessSlider } from './colour-picker-lightness-slider'
import { ColourPickerPaletteLimit } from './colour-picker-palette-limit'
import { ColourPickerPaletteList } from './colour-picker-palette-list'
import { ColourPickerPaletteSwatch } from './colour-picker-palette-swatch'
import { ColourPickerRow } from './colour-picker-row'
import { ColourPickerTransparencySlider } from './colour-picker-transparency-slider'
import { ColourPickerValueType } from './colour-picker-value-type'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Colour Picker',
  component: ColourPicker,
  args: {
    defaultColour: '#ff0000',
    defaultPalette: [
      '#ef4444',
      '#f97316',
      '#f59e0b',
      '#eab308',
      '#84cc16',
      '#22c55e',
      '#10b981',
      '#14b8a6',
      '#06b6d4',
      '#0ea5e9',
      '#3b82f6',
      '#6366f1',
      '#8b5cf6',
      '#a855f7',
      '#ec4899',
      '#f43f5e',
      '#64748b',
      '#6b7280',
      '#a3a3a3',
      '#d4d4d4',
      '#ffffff',
      '#0f172a',
      '#7c3aed',
      '#0891b2',
      '#16a34a',
    ],
    paletteLimit: 10,
    variant: 'elevated',
  },
  argTypes: {
    defaultColour: {
      control: 'color',
    },
    defaultPalette: {
      control: 'object',
    },
    paletteLimit: {
      control: 'number',
    },
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'ghost'],
    },
  },
} satisfies Meta<typeof ColourPicker>

type Story = StoryObj<typeof ColourPicker>

export const Playground: Story = {
  args: {
    paletteLimit: 26,
  },

  render: (args) => (
    <ColourPicker {...args} className="w-[400px]" onValueChange={(value) => console.log(value)}>
      <ColourPickerArea />
      <ColourPickerGroup>
        <ColourPickerHueSlider />
        <ColourPickerTransparencySlider />
        <ColourPickerLightnessSlider />
        <ColourPickerRow>
          <ColourPickerValueType />
          <ColourPickerInput />
        </ColourPickerRow>
      </ColourPickerGroup>
      <Separator />
      <ColourPickerGroup>
        <ColourPickerRow>
          <ColourPickerLabel>Saved</ColourPickerLabel>
          <ColourPickerPaletteLimit />
        </ColourPickerRow>
        <ColourPickerPaletteList>
          {({ colour, index }) => (
            <ColourPickerPaletteSwatch key={index} colour={colour} size="medium" />
          )}
        </ColourPickerPaletteList>
      </ColourPickerGroup>
    </ColourPicker>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-md">
      <ColourPicker {...args} variant="elevated" className="w-[300px]">
        <ColourPickerArea />
        <ColourPickerGroup>
          <ColourPickerHueSlider />
          <ColourPickerTransparencySlider />
          <ColourPickerRow>
            <ColourPickerValueType />
            <ColourPickerInput />
          </ColourPickerRow>
        </ColourPickerGroup>
      </ColourPicker>
      <ColourPicker {...args} variant="outline" className="w-[300px]">
        <ColourPickerArea />
        <ColourPickerGroup>
          <ColourPickerHueSlider />
          <ColourPickerTransparencySlider />
          <ColourPickerRow>
            <ColourPickerValueType />
            <ColourPickerInput />
          </ColourPickerRow>
        </ColourPickerGroup>
      </ColourPicker>
      <ColourPicker {...args} variant="ghost" className="w-[300px]">
        <ColourPickerArea />
        <ColourPickerGroup>
          <ColourPickerHueSlider />
          <ColourPickerTransparencySlider />
          <ColourPickerRow>
            <ColourPickerValueType />
            <ColourPickerInput />
          </ColourPickerRow>
        </ColourPickerGroup>
      </ColourPicker>
    </div>
  ),
}

export const Minimal: Story = {
  render: (args) => (
    <ColourPicker {...args} className="w-[300px]">
      <ColourPickerGroup>
        <ColourPickerHueSlider />
        <ColourPickerTransparencySlider />
        <ColourPickerInput />
      </ColourPickerGroup>
    </ColourPicker>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [value, setValue] = useState(() => chroma(args.defaultColour ?? '#ff0000'))

    return (
      <div className="flex flex-col items-start gap-sm">
        <ColourPicker {...args} value={value} onValueChange={setValue} className="w-[300px]">
          <ColourPickerArea />
          <ColourPickerGroup>
            <ColourPickerHueSlider />
            <ColourPickerTransparencySlider />
            <ColourPickerRow>
              <ColourPickerValueType />
              <ColourPickerInput />
            </ColourPickerRow>
          </ColourPickerGroup>
        </ColourPicker>
        <code className="rounded-md bg-surface px-sm py-xs style-text-default--1 text-on-surface">
          {value.css()}
        </code>
      </div>
    )
  },
}
