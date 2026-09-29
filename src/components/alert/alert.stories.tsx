import {
  CheckCircleIcon,
  InfoIcon,
  ShieldWarningIcon,
  WarningIcon,
  XCircleIcon,
} from '@phosphor-icons/react'
import { Button } from '../button'
import { Alert } from './alert'
import { AlertAction } from './alert-action'
import { AlertDescription } from './alert-description'
import { AlertIcon } from './alert-icon'
import { AlertTitle } from './alert-title'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONE_ICONS = {
  brand: <InfoIcon weight="duotone" />,
  accent: <ShieldWarningIcon weight="duotone" />,
  neutral: <InfoIcon weight="duotone" />,
  error: <XCircleIcon weight="duotone" />,
  info: <InfoIcon weight="duotone" />,
  success: <CheckCircleIcon weight="duotone" />,
  warning: <WarningIcon weight="duotone" />,
}

const TONE_CONTENT: Record<
  string,
  { title: string; description: string; actionLabel?: string; usage: string }
> = {
  brand: {
    title: 'New brand guidelines available',
    description: 'Your team has updated the brand style guide. Review the changes to stay aligned.',
    actionLabel: 'Review',
    usage: 'Primary brand announcements',
  },
  accent: {
    title: 'Feature highlight',
    description: 'Check out the newly released feature that can help you work more efficiently.',
    actionLabel: 'Explore',
    usage: 'Promotional or feature announcements',
  },
  neutral: {
    title: 'System notification',
    description: 'A background maintenance window is scheduled for this weekend. Plan accordingly.',
    usage: 'General system or administrative info',
  },
  error: {
    title: 'Critical action required',
    description:
      'Your password will expire in 3 days. Update it now to maintain access to your account.',
    actionLabel: 'Update Now',
    usage: 'Error states and critical issues',
  },
  info: {
    title: 'Information',
    description:
      'Learn more about the new features available in this release. See release notes for details.',
    actionLabel: 'Learn More',
    usage: 'Supplementary guidance and tips',
  },
  success: {
    title: 'Changes saved successfully',
    description: 'Your profile has been updated and all changes are now live across your account.',
    actionLabel: 'Undo',
    usage: 'Confirms completed actions or successful states',
  },
  warning: {
    title: 'Proceed with caution',
    description:
      'This action cannot be undone. Deleting this item will remove it permanently from your workspace.',
    actionLabel: 'Delete',
    usage: 'Alerts that require user attention before proceeding',
  },
}

const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const

type Tone = (typeof TONES)[number]

const SingleAlert = ({
  tone = 'brand',
  withAction = false,
}: {
  tone?: Tone
  withAction?: boolean
}) => {
  const { title, description, actionLabel } = TONE_CONTENT[tone]
  return (
    <Alert tone={tone} className="max-w-[70vh]">
      <AlertIcon>{TONE_ICONS[tone]}</AlertIcon>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description} {description}
      </AlertDescription>
      {withAction && actionLabel && (
        <AlertAction>
          <Button tone={tone} size="small">
            {actionLabel}
          </Button>
        </AlertAction>
      )}
    </Alert>
  )
}

const AllTonesAlerts = ({ withAction = false }: { withAction?: boolean }) => (
  <div className="flex flex-col gap-sm">
    {TONES.map((tone) => (
      <SingleAlert key={tone} tone={tone} withAction={withAction} />
    ))}
  </div>
)

export default {
  title: 'Components/Alert',
  component: Alert,
  subcomponents: {
    AlertTitle,
    AlertDescription,
    AlertActions: AlertAction,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: TONES,
      description: 'Sets the semantic tone and styling of the alert.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A prominent container that captures attention with contextual messaging.',
      description: {
        component:
          'The Alert component is a specialized container for displaying time-sensitive or important messages. It supports seven semantic tones (`brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`) and can optionally include a leading icon and action buttons via the `AlertActions` slot.',
      },
    },
  },
  args: {
    tone: 'brand',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>{TONE_ICONS[args.tone as Tone]}</AlertIcon>
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>
        A meaningful description of the alert and any required action.
      </AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>

type Story = StoryObj<typeof Alert>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use the controls panel to interactively explore all `tone` combinations.',
      },
    },
  },
}

// ─── Tones ───────────────────────────────────────────────────────────────────

export const Brand: Story = {
  name: 'Tone / Brand',
  parameters: {
    docs: {
      description: {
        story: 'Default tone. Use for primary brand announcements and standard alerts.',
      },
    },
  },
  args: { tone: 'brand' },
  render: (args) => <SingleAlert {...args} tone="brand" />,
}

export const Accent: Story = {
  name: 'Tone / Accent',
  parameters: {
    docs: {
      description: { story: 'Highlights secondary or promotional content with emphasis.' },
    },
  },
  args: { tone: 'accent' },
  render: (args) => <SingleAlert {...args} tone="accent" />,
}

export const Neutral: Story = {
  name: 'Tone / Neutral',
  parameters: {
    docs: {
      description: { story: 'Neutral tone for general, non-critical system messages.' },
    },
  },
  args: { tone: 'neutral' },
  render: (args) => <SingleAlert {...args} tone="neutral" />,
}

export const Error: Story = {
  name: 'Tone / Error',
  parameters: {
    docs: {
      description: {
        story: 'Used for errors, failures, or critical issues requiring immediate attention.',
      },
    },
  },
  args: { tone: 'error' },
  render: (args) => <SingleAlert {...args} tone="error" withAction />,
}

export const Info: Story = {
  name: 'Tone / Info',
  parameters: {
    docs: {
      description: { story: 'Informational tone for tips, guidance, and supplementary details.' },
    },
  },
  args: { tone: 'info' },
  render: (args) => <SingleAlert {...args} tone="info" withAction />,
}

export const Success: Story = {
  name: 'Tone / Success',
  parameters: {
    docs: {
      description: { story: 'Confirms successful completion of an action or positive state.' },
    },
  },
  args: { tone: 'success' },
  render: (args) => <SingleAlert {...args} tone="success" withAction />,
}

export const Warning: Story = {
  name: 'Tone / Warning',
  parameters: {
    docs: {
      description: { story: 'Alerts the user to proceed cautiously or review before confirming.' },
    },
  },
  args: { tone: 'warning' },
  render: (args) => <SingleAlert {...args} tone="warning" />,
}

// ─── Behaviour ───────────────────────────────────────────────────────────────

export const WithAction: Story = {
  name: 'Behaviour / With Action',
  parameters: {
    docs: {
      description: {
        story:
          'Alerts can include action buttons via `AlertActions` to enable user interaction directly from the message.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-sm">
      <SingleAlert tone="success" withAction />
      <SingleAlert tone="error" withAction />
      <SingleAlert tone="info" withAction />
    </div>
  ),
}

export const WithoutAction: Story = {
  name: 'Behaviour / Without Action',
  parameters: {
    docs: {
      description: {
        story: 'Alerts without action buttons are suitable for informational messages.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-sm">
      <SingleAlert tone="brand" withAction={false} />
      <SingleAlert tone="neutral" withAction={false} />
      <SingleAlert tone="info" withAction={false} />
    </div>
  ),
}

// ─── Composition ─────────────────────────────────────────────────────────────

export const AllTones: Story = {
  name: 'Composition / All Tones',
  parameters: {
    docs: {
      description: {
        story:
          'All seven tones displayed together for quick reference and side-by-side comparison.',
      },
    },
  },
  render: () => <AllTonesAlerts withAction={false} />,
}

export const AllTonesWithActions: Story = {
  name: 'Composition / All Tones with Actions',
  parameters: {
    docs: {
      description: {
        story:
          'All tones rendered with action buttons where applicable. Demonstrates the full interactive pattern.',
      },
    },
  },
  render: () => <AllTonesAlerts withAction />,
}

export const MultipleAlerts: Story = {
  name: 'Composition / Multiple Stacked',
  parameters: {
    docs: {
      description: {
        story:
          'Multiple alerts can be stacked to convey several messages or states simultaneously.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-md">
      <div>
        <p className="mb-sm text-sm font-medium text-on-surface">Success + Info</p>
        <div className="flex flex-col gap-sm">
          <SingleAlert tone="success" withAction />
          <SingleAlert tone="info" withAction />
        </div>
      </div>
      <div>
        <p className="mb-sm text-sm font-medium text-on-surface">Warning + Error</p>
        <div className="flex flex-col gap-sm">
          <SingleAlert tone="warning" />
          <SingleAlert tone="error" withAction />
        </div>
      </div>
    </div>
  ),
}

export const WithoutDescription: Story = {
  name: 'Composition / Without Description',
  parameters: {
    docs: {
      description: {
        story: 'Alerts can be rendered without a description for concise messages.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-sm">
      <Alert>
        <AlertIcon>
          <WarningIcon />
        </AlertIcon>
        <AlertTitle>This is an example of a brand alert without an description.</AlertTitle>
      </Alert>
    </div>
  ),
}

export const ActionWithNoIcon: Story = {
  name: 'Composition / Action with No Icon',
  parameters: {
    docs: {
      description: {
        story: 'An alert can have an action button even if no icon is present.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-sm">
      <Alert>
        <AlertTitle>This is an example of an alert with an action but no icon.</AlertTitle>
        <AlertDescription>This alert has an action but no icon.</AlertDescription>
        <AlertAction>
          <Button size="small">Action</Button>
        </AlertAction>
      </Alert>
    </div>
  ),
}
