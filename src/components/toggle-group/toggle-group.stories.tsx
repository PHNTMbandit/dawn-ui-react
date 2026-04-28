import { HeartIcon } from '@phosphor-icons/react'
import { Toggle } from '../toggle/toggle'
import { ToggleGroup } from './toggle-group'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Toggle Group',
  component: ToggleGroup,
  parameters: {
    subtitle: 'A group of toggle buttons for single or multiple selections.',
    description: {
      component:
        'Toggle Group organizes related toggles into one control. It supports single selection by default and multiple selections when enabled.',
    },
  },
  args: {
    multiple: false,
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow selecting multiple toggles at once.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  render: (args) => (
    <div className="w-[500px]">
      <ToggleGroup {...args}>
        <Toggle>
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Option 1
            </>
          )}
        </Toggle>
        <Toggle>
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Option 2
            </>
          )}
        </Toggle>
      </ToggleGroup>
    </div>
  ),
} satisfies Meta<typeof ToggleGroup>

type Story = StoryObj<typeof ToggleGroup>

export const Playground: Story = {}

export const BehaviorSingleSelection: Story = {
  args: {
    multiple: false,
  },
}

export const BehaviorMultipleSelection: Story = {
  args: {
    multiple: true,
  },
}

export const CompositionFormattingToolbar: Story = {
  render: () => (
    <div className="w-[500px] space-y-sm rounded-lg border border-surface-3 bg-surface p-md">
      <p className="style-text-default--1 text-on-surface-variant">Formatting options</p>
      <ToggleGroup multiple>
        <Toggle size="small" tone="brand">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Bold
            </>
          )}
        </Toggle>
        <Toggle size="small" tone="accent">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Italic
            </>
          )}
        </Toggle>
        <Toggle size="small" tone="neutral">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Underline
            </>
          )}
        </Toggle>
      </ToggleGroup>
    </div>
  ),
}

export const CompositionAutoSizing: Story = {
  render: () => (
    <div className="w-[500px] space-y-lg">
      <div className="space-y-xs">
        <p className="style-text-default--1 text-on-surface-variant">
          Small size (Toggles inherit from group)
        </p>
        <ToggleGroup size="small" multiple>
          <Toggle tone="brand">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="accent">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="info">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-xs">
        <p className="style-text-default--1 text-on-surface-variant">Medium size (default)</p>
        <ToggleGroup size="medium" multiple>
          <Toggle tone="brand">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="accent">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="info">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-xs">
        <p className="style-text-default--1 text-on-surface-variant">Large size</p>
        <ToggleGroup size="large" multiple>
          <Toggle tone="brand">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="accent">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
          <Toggle tone="info">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              </>
            )}
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  ),
}
