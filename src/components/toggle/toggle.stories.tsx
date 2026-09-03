import { HeartIcon } from '@phosphor-icons/react'
import { ToggleGroup } from '../toggle-group/toggle-group'
import { Toggle } from './toggle'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    subtitle: 'A component for toggling between two states.',
    description: {
      component:
        'The Toggle component allows users to switch between two states, such as on and off. It supports text and icon-only variants, multiple visual sizes, and semantic tones.',
    },
  },
  args: {
    size: 'medium',
    tone: 'brand',
  },
  argTypes: {
    size: {
      description: 'Size and layout of the toggle.',
      options: ['small', 'medium', 'large', 'iconSmall', 'iconMedium', 'iconLarge'],
      control: { type: 'select' },
    },
    tone: {
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
      description: 'The tone of the toggle, which determines its color scheme.',
      table: {
        type: { summary: 'brand | accent | neutral | error | info | success | warning' },
        defaultValue: { summary: 'brand' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle interaction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  render: (args) => (
    <div className="flex w-[500px] items-center">
      <Toggle {...args}>
        {({ pressed }) => (
          <>
            {pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />}
            {pressed ? 'Liked' : 'Like'}
          </>
        )}
      </Toggle>
    </div>
  ),
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof Toggle>

export const Playground: Story = {}

export const ToneAccent: Story = {
  args: {
    tone: 'accent',
  },
}

export const ToneNeutral: Story = {
  args: {
    tone: 'neutral',
  },
}

export const ToneError: Story = {
  args: {
    tone: 'error',
  },
}

export const ToneInfo: Story = {
  args: {
    tone: 'info',
  },
}

export const ToneSuccess: Story = {
  args: {
    tone: 'success',
  },
}

export const ToneWarning: Story = {
  args: {
    tone: 'warning',
  },
}

export const BehaviorDisabled: Story = {
  args: {
    disabled: true,
  },
}

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
}

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
}

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
}

export const IconSmall: Story = {
  args: {
    size: 'iconSmall',
  },
  render: (args) => (
    <div className="flex w-[500px] items-center">
      <Toggle {...args} aria-label="Like">
        {({ pressed }) => (pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />)}
      </Toggle>
    </div>
  ),
}

export const IconMedium: Story = {
  args: {
    size: 'iconMedium',
  },
  render: (args) => (
    <div className="flex w-[500px] items-center">
      <Toggle {...args} aria-label="Like">
        {({ pressed }) => (pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />)}
      </Toggle>
    </div>
  ),
}

export const IconLarge: Story = {
  args: {
    size: 'iconLarge',
  },
  render: (args) => (
    <div className="flex w-[500px] items-center">
      <Toggle {...args} aria-label="Like">
        {({ pressed }) => (pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />)}
      </Toggle>
    </div>
  ),
}

export const CompositionReactionToolbar: Story = {
  render: () => (
    <div className="w-[500px] rounded-lg border border-surface-3 bg-surface p-md">
      <div className="flex items-center gap-xs">
        <Toggle size="small" tone="brand">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Like
            </>
          )}
        </Toggle>
        <Toggle size="small" tone="accent">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Favorite
            </>
          )}
        </Toggle>
        <Toggle size="small" tone="neutral">
          {({ pressed }) => (
            <>
              <HeartIcon weight={pressed ? 'fill' : 'bold'} />
              Save
            </>
          )}
        </Toggle>
      </div>
    </div>
  ),
}

export const CompositionInheritedSize: Story = {
  render: () => (
    <div className="w-[500px] space-y-lg">
      <div className="space-y-xs">
        <p className="style-text-default--1 text-on-surface-variant">
          Toggles inherit size from ToggleGroup (small)
        </p>
        <ToggleGroup size="small" multiple>
          <Toggle tone="brand">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
                Like
              </>
            )}
          </Toggle>
          <Toggle tone="accent">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
                Favorite
              </>
            )}
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-xs">
        <p className="style-text-default--1 text-on-surface-variant">
          Explicit size prop overrides inherited size
        </p>
        <ToggleGroup size="small" multiple>
          <Toggle size="large" tone="brand">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
                Like
              </>
            )}
          </Toggle>
          <Toggle tone="accent">
            {({ pressed }) => (
              <>
                <HeartIcon weight={pressed ? 'fill' : 'bold'} />
                Favorite
              </>
            )}
          </Toggle>
        </ToggleGroup>
      </div>
    </div>
  ),
}
