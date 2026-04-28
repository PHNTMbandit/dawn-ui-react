import { CodeIcon, EyeIcon } from '@phosphor-icons/react'
import { Tabs } from './tabs'
import { TabsIndicator } from './tabs-indicator'
import { TabsList } from './tabs-list'
import { TabsPanel } from './tabs-panel'
import { TabsTab } from './tabs-tab'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabsIndicator, TabsList, TabsPanel, TabsTab },
  parameters: {
    subtitle: 'A component for organizing content into separate views',
    description: {
      component:
        'The Tabs component allows users to navigate between different sections of content within the same context. Each tab corresponds to a panel that displays related information when selected.',
    },
  },
  args: {
    variant: 'default',
    fill: true,
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'underline'],
      description: 'Visual style of the tabs list.',
      table: {
        type: { summary: 'default | underline' },
        defaultValue: { summary: 'default' },
      },
    },
    fill: {
      control: 'boolean',
      description: 'Whether tabs should fill available width.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Tabs>

type Story = StoryObj<typeof Tabs>

const BasicTemplate = (args: Story['args']) => (
  <div className="w-[500px]">
    <Tabs defaultValue="overview" {...args}>
      <TabsList>
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="details">Details</TabsTab>
        <TabsTab value="activity">Activity</TabsTab>
        <TabsIndicator />
      </TabsList>
      <TabsPanel value="overview" className="rounded-md border border-surface-3 bg-surface p-md">
        <p className="style-text-prose-0 text-on-surface">Overview content for this workspace.</p>
      </TabsPanel>
      <TabsPanel value="details" className="rounded-md border border-surface-3 bg-surface p-md">
        <p className="style-text-prose-0 text-on-surface">Detailed metadata and settings.</p>
      </TabsPanel>
      <TabsPanel value="activity" className="rounded-md border border-surface-3 bg-surface p-md">
        <p className="style-text-prose-0 text-on-surface">Recent activity appears here.</p>
      </TabsPanel>
    </Tabs>
  </div>
)

export const Playground: Story = {
  render: (args) => {
    return BasicTemplate(args)
  },
}

export const VariantUnderline: Story = {
  args: {
    variant: 'underline',
    fill: true,
  },
  render: (args) => {
    return BasicTemplate(args)
  },
}

export const BehaviorFitContent: Story = {
  args: {
    variant: 'default',
    fill: false,
  },
  render: (args) => BasicTemplate(args),
}

export const CompositionPreviewCode: Story = {
  args: {
    variant: 'default',
    fill: false,
  },
  render: (args) => {
    return (
      <div className="w-[500px]">
        <Tabs defaultValue="preview" {...args}>
          <TabsList>
            <TabsTab value="preview">
              <EyeIcon weight="bold" />
              Preview
            </TabsTab>
            <TabsTab value="code">
              <CodeIcon weight="bold" />
              Code
            </TabsTab>
            <TabsIndicator />
          </TabsList>
          <TabsPanel value="preview" className="rounded-md border border-surface-3 bg-surface p-md">
            <p className="style-text-prose-0">Live component preview area.</p>
          </TabsPanel>
          <TabsPanel value="code" className="rounded-md border border-surface-3 bg-surface p-md">
            <pre className="overflow-x-auto style-text-default--1 text-on-surface-muted">
              {`<Tabs defaultValue="preview">
  <TabsList>
    <TabsTab value="preview">Preview</TabsTab>
    <TabsTab value="code">Code</TabsTab>
    <TabsIndicator />
  </TabsList>
</Tabs>`}
            </pre>
          </TabsPanel>
        </Tabs>
      </div>
    )
  },
}

export const CompositionSettingsPage: Story = {
  args: {
    variant: 'underline',
    fill: false,
  },
  render: (args) => (
    <div className="w-[500px] space-y-md rounded-lg border border-surface-3 bg-surface p-md">
      <header>
        <h3 className="style-text-strong-2">Workspace Settings</h3>
        <p className="style-text-prose--1 text-on-surface-variant">
          Manage access, billing, and notifications.
        </p>
      </header>
      <Tabs defaultValue="general" {...args}>
        <TabsList>
          <TabsTab value="general">General</TabsTab>
          <TabsTab value="members">Members</TabsTab>
          <TabsTab value="billing">Billing</TabsTab>
          <TabsIndicator />
        </TabsList>
        <TabsPanel value="general" className="rounded-md border border-surface-3 bg-surface-2 p-md">
          <p className="style-text-prose-0">Workspace name, URL and locale preferences.</p>
        </TabsPanel>
        <TabsPanel value="members" className="rounded-md border border-surface-3 bg-surface-2 p-md">
          <p className="style-text-prose-0">Invite and manage team member permissions.</p>
        </TabsPanel>
        <TabsPanel value="billing" className="rounded-md border border-surface-3 bg-surface-2 p-md">
          <p className="style-text-prose-0">Plans, invoices and payment methods.</p>
        </TabsPanel>
      </Tabs>
    </div>
  ),
}
