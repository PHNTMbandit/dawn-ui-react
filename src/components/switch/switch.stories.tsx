import { Switch } from './switch'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    subtitle: 'A toggle switch component for binary choices.',
    description: {
      component:
        'The Switch component allows users to toggle between two states, such as on and off. It is commonly used in forms and settings to represent binary options. The Switch can be customized with different states to fit various design needs.',
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed next to the switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial uncontrolled checked state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    id: {
      control: 'text',
      description: 'HTML id attribute for the switch button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    label: 'Enable Notifications',
    id: 'switch-playground',
  },
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

/**
 * The Playground story demonstrates a basic switch with customizable label and state.
 */
export const Playground: Story = {
  render: (args) => <Switch {...args} />,
}

/**
 * State: Unchecked switch in default state.
 */
export const StateUnchecked: Story = {
  render: () => <Switch id="state-unchecked" label="Unchecked State" defaultChecked={false} />,
}

/**
 * State: Checked switch in active state.
 */
export const StateChecked: Story = {
  render: () => <Switch id="state-checked" label="Checked State" defaultChecked={true} />,
}

/**
 * Behavior: Disabled switch in unchecked state.
 */
export const BehaviorDisabledUnchecked: Story = {
  render: () => (
    <Switch id="behavior-disabled-unchecked" label="Disabled" disabled defaultChecked={false} />
  ),
}

/**
 * Behavior: Disabled switch in checked state.
 */
export const BehaviorDisabledChecked: Story = {
  render: () => (
    <Switch
      id="behavior-disabled-checked"
      label="Disabled (Active)"
      disabled
      defaultChecked={true}
    />
  ),
}
