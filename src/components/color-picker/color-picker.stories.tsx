import chroma from 'chroma-js'
import { useEffect, useState } from 'react'
import { Button } from '../button'
import { Separator } from '../separator'
import { ColorPicker } from './color-picker'
import { ColorPickerArea } from './color-picker-area'
import { ColorPickerGroup } from './color-picker-group'
import { ColorPickerHueSlider } from './color-picker-hue-slider'
import { ColorPickerInput } from './color-picker-input'
import { ColorPickerLabel } from './color-picker-label'
import { ColorPickerLightnessSlider } from './color-picker-lightness-slider'
import { ColorPickerPaletteLimit } from './color-picker-palette-limit'
import { ColorPickerPaletteList } from './color-picker-palette-list'
import { ColorPickerPaletteSwatch } from './color-picker-palette-swatch'
import { ColorPickerRow } from './color-picker-row'
import { ColorPickerTransparencySlider } from './color-picker-transparency-slider'
import { ColorPickerValueType } from './color-picker-value-type'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Color Picker',
  component: ColorPicker,
  args: {
    defaultColor: '#ff0000',
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
    defaultColor: {
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
} satisfies Meta<typeof ColorPicker>

type Story = StoryObj<typeof ColorPicker>

export const Playground: Story = {
  args: {
    paletteLimit: 26,
  },

  render: (args) => (
    <ColorPicker {...args} className="w-[400px]" onValueChange={(value) => console.log(value)}>
      <ColorPickerArea />
      <ColorPickerGroup>
        <ColorPickerHueSlider />
        <ColorPickerTransparencySlider />
        <ColorPickerLightnessSlider />
        <ColorPickerRow>
          <ColorPickerValueType />
          <ColorPickerInput />
        </ColorPickerRow>
      </ColorPickerGroup>
      <Separator />
      <ColorPickerGroup>
        <ColorPickerRow>
          <ColorPickerLabel>Saved</ColorPickerLabel>
          <ColorPickerPaletteLimit />
        </ColorPickerRow>
        <ColorPickerPaletteList>
          {({ color, index }) => (
            <ColorPickerPaletteSwatch key={index} color={color} size="medium" />
          )}
        </ColorPickerPaletteList>
      </ColorPickerGroup>
    </ColorPicker>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-md">
      <ColorPicker {...args} variant="elevated" className="w-[300px]">
        <ColorPickerArea />
        <ColorPickerGroup>
          <ColorPickerHueSlider />
          <ColorPickerTransparencySlider />
          <ColorPickerRow>
            <ColorPickerValueType />
            <ColorPickerInput />
          </ColorPickerRow>
        </ColorPickerGroup>
      </ColorPicker>
      <ColorPicker {...args} variant="outline" className="w-[300px]">
        <ColorPickerArea />
        <ColorPickerGroup>
          <ColorPickerHueSlider />
          <ColorPickerTransparencySlider />
          <ColorPickerRow>
            <ColorPickerValueType />
            <ColorPickerInput />
          </ColorPickerRow>
        </ColorPickerGroup>
      </ColorPicker>
      <ColorPicker {...args} variant="ghost" className="w-[300px]">
        <ColorPickerArea />
        <ColorPickerGroup>
          <ColorPickerHueSlider />
          <ColorPickerTransparencySlider />
          <ColorPickerRow>
            <ColorPickerValueType />
            <ColorPickerInput />
          </ColorPickerRow>
        </ColorPickerGroup>
      </ColorPicker>
    </div>
  ),
}

export const Minimal: Story = {
  render: (args) => (
    <ColorPicker {...args} className="w-[300px]">
      <ColorPickerGroup>
        <ColorPickerHueSlider />
        <ColorPickerTransparencySlider />
        <ColorPickerInput showPopover>
          <ColorPickerArea className="aspect-video" />
        </ColorPickerInput>
      </ColorPickerGroup>
    </ColorPicker>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory(args) {
    const initialColor = args.defaultColor ?? '#ff0000'
    const [committedColor, setCommittedColor] = useState<string>(initialColor)
    const [pendingColor, setPendingColor] = useState<string | undefined>(initialColor)

    useEffect(() => {
      setCommittedColor(initialColor)
      setPendingColor(initialColor)
    }, [initialColor])

    const handleApply = () => {
      if (!pendingColor) {
        return
      }

      setCommittedColor(pendingColor)
    }

    return (
      <div className="flex flex-col items-start gap-sm">
        <ColorPicker
          {...args}
          value={pendingColor}
          onValueChange={(value) => setPendingColor(value.hex())}
          className="w-[300px]"
        >
          <ColorPickerArea />
          <ColorPickerGroup>
            <ColorPickerHueSlider />
            <ColorPickerTransparencySlider />
            <ColorPickerRow>
              <ColorPickerValueType />
              <ColorPickerInput />
            </ColorPickerRow>
          </ColorPickerGroup>
        </ColorPicker>
        <Button
          variant="outline"
          className="w-[300px]"
          onClick={handleApply}
          disabled={!pendingColor || pendingColor === committedColor}
        >
          Apply
        </Button>
        <div className="flex w-[300px] flex-col gap-xs">
          <code className="rounded-md bg-surface px-sm py-xs style-text-default--1 text-on-surface">
            Pending: {pendingColor ?? 'undefined'}
          </code>
          <code className="rounded-md bg-surface px-sm py-xs style-text-default--1 text-on-surface">
            Applied: {committedColor}
          </code>
        </div>
        <code className="rounded-md bg-surface px-sm py-xs style-text-default--1 text-on-surface">
          Pending CSS: {pendingColor ? chroma(pendingColor).css() : 'undefined'}
        </code>
      </div>
    )
  },
}

export const InputOnly: Story = {
  render: (args) => (
    <ColorPicker {...args} className="w-[300px]" variant={'ghost'}>
      <ColorPickerInput variant={'primary'} showPopover showTransparencyField={false}>
        <ColorPickerArea className="aspect-video" />
        <ColorPickerGroup>
          <ColorPickerHueSlider />
          <ColorPickerTransparencySlider />
          <ColorPickerInput />
        </ColorPickerGroup>
      </ColorPickerInput>
    </ColorPicker>
  ),
}
