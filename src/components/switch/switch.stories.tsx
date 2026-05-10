import { Switch } from './switch'

import type { Meta, StoryObj } from '@storybook/react-vite'

const SETTINGS = [
  { id: 'notifications', label: 'Enable Notifications', description: 'Receive push notifications' },
  { id: 'emailDigest', label: 'Email Digest', description: 'Weekly email summary' },
  { id: 'darkMode', label: 'Dark Mode', description: 'Use dark color scheme' },
  { id: 'analytics', label: 'Analytics', description: 'Help us improve with usage data' },
]

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

/**
 * Composition: Settings form with multiple toggle switches.
 */
export const CompositionSettingsForm: Story = {
  render: () => (
    <div className="bg-surface-1 w-[500px] space-y-lg rounded-lg border border-surface-3 p-md">
      <div>
        <h2 className="mb-xs style-text-strong-2">Notification Settings</h2>
        <p className="style-text-prose--1 text-on-surface-variant">Manage your preferences</p>
      </div>
      <div className="space-y-md">
        {SETTINGS.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between py-xs">
            <div>
              <p className="style-text-default-0">{setting.label}</p>
              <p className="style-text-prose--1 text-on-surface-muted">{setting.description}</p>
            </div>
            <Switch id={setting.id} defaultChecked={Math.random() > 0.5} />
          </div>
        ))}
      </div>
    </div>
  ),
}

/**
 * Composition: Feature flags panel with switches and descriptions.
 */
export const CompositionFeatureFlags: Story = {
  render: () => (
    <div className="w-[500px] space-y-md">
      <div className="bg-surface-1 rounded-lg border border-surface-3 p-md">
        <h3 className="mb-md style-text-strong-1">Beta Features</h3>
        <div className="space-y-md">
          <div className="flex items-center justify-between border-b border-surface-3 pb-md">
            <div>
              <p className="style-text-default-0">New Dashboard</p>
              <p className="style-text-prose--1 text-on-surface-variant">
                Try the redesigned dashboard
              </p>
            </div>
            <Switch id="feature-dashboard" defaultChecked={false} />
          </div>
          <div className="flex items-center justify-between border-b border-surface-3 pb-md">
            <div>
              <p className="style-text-default-0">Advanced Analytics</p>
              <p className="style-text-prose--1 text-on-surface-variant">
                Access detailed insights
              </p>
            </div>
            <Switch id="feature-analytics" defaultChecked={true} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="style-text-default-0">Experimental Mode</p>
              <p className="style-text-prose--1 text-on-surface-variant">
                Enable cutting-edge features
              </p>
            </div>
            <Switch id="feature-experimental" defaultChecked={false} />
          </div>
        </div>
      </div>
    </div>
  ),
}

/**
 * Composition: Privacy and security toggles.
 */
export const CompositionPrivacyToggles: Story = {
  render: () => (
    <div className="bg-surface-1 w-[500px] space-y-lg rounded-lg border border-surface-3 p-md">
      <div>
        <h2 className="mb-xs style-text-strong-2">Privacy & Security</h2>
        <p className="style-text-prose--1 text-on-surface-variant">
          Control your data sharing preferences
        </p>
      </div>
      <div className="space-y-md">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="style-text-default-0">Public Profile</p>
            <p className="style-text-prose--1 text-on-surface-variant">
              Make your profile visible to others
            </p>
          </div>
          <Switch id="privacy-public" defaultChecked={false} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="style-text-default-0">Data Sharing</p>
            <p className="style-text-prose--1 text-on-surface-variant">
              Share anonymized usage data
            </p>
          </div>
          <Switch id="privacy-sharing" defaultChecked={true} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="style-text-default-0">Two-Factor Authentication</p>
            <p className="style-text-prose--1 text-on-surface-variant">
              Add extra security to your account
            </p>
          </div>
          <Switch id="privacy-2fa" defaultChecked={true} />
        </div>
      </div>
    </div>
  ),
}
