import {
  CheckCircleIcon,
  InfoIcon,
  ShieldWarningIcon,
  TrashIcon,
  WarningCircleIcon,
  WarningIcon,
  XCircleIcon,
} from '@phosphor-icons/react'
import { Button } from '../button'
import { AlertDialog } from './alert-dialog'
import { AlertDialogClose } from './alert-dialog-close'
import { AlertDialogConfirm } from './alert-dialog-confirm'
import { AlertDialogContent } from './alert-dialog-content'
import { AlertDialogDescription } from './alert-dialog-description'
import { AlertDialogActions } from './alert-dialog-footer'
import { AlertDialogHeader } from './alert-dialog-header'
import { AlertDialogPopup } from './alert-dialog-popup'
import { AlertDialogTitle } from './alert-dialog-title'
import { AlertDialogTrigger } from './alert-dialog-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const

type Tone = (typeof TONES)[number]

const TONE_ICONS: Record<Tone, React.ReactNode> = {
  brand: <InfoIcon weight="fill" />,
  accent: <ShieldWarningIcon weight="fill" />,
  neutral: <InfoIcon weight="fill" />,
  error: <XCircleIcon weight="fill" />,
  info: <InfoIcon weight="fill" />,
  success: <CheckCircleIcon weight="fill" />,
  warning: <WarningIcon weight="fill" />,
}

const TONE_TRIGGER_LABELS: Record<Tone, string> = {
  brand: 'Open Dialog',
  accent: 'Open Dialog',
  neutral: 'Open Dialog',
  error: 'Delete Item',
  info: 'View Details',
  success: 'Complete Action',
  warning: 'Proceed',
}

const TONE_CONTENT: Record<Tone, { title: string; description: string; confirm: string }> = {
  brand: {
    title: 'Confirm your action',
    description:
      'You are about to make a change that will affect your account. Are you sure you want to proceed?',
    confirm: 'Confirm',
  },
  accent: {
    title: 'Publish this content?',
    description:
      'This content will be made publicly visible immediately. You can unpublish it at any time from settings.',
    confirm: 'Publish',
  },
  neutral: {
    title: 'Save changes?',
    description:
      'You have unsaved changes. Would you like to save them before leaving, or discard your edits?',
    confirm: 'Save Changes',
  },
  error: {
    title: 'Permanently delete this item?',
    description:
      'This action cannot be undone. The item and all associated data will be permanently removed from our servers.',
    confirm: 'Delete',
  },
  info: {
    title: 'New terms of service',
    description:
      'Our terms of service have been updated. You must review and accept the new terms to continue using your account.',
    confirm: 'Accept & Continue',
  },
  success: {
    title: 'Mark as complete?',
    description:
      'Once marked as complete, this task will be archived and removed from your active queue.',
    confirm: 'Mark Complete',
  },
  warning: {
    title: 'Transfer ownership?',
    description:
      'You are about to transfer ownership of this workspace. You will lose admin privileges and this cannot be reversed.',
    confirm: 'Transfer',
  },
}

const DialogTemplate = ({ tone = 'brand' }: { tone?: Tone }) => {
  const { title, description, confirm } = TONE_CONTENT[tone]
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button tone={tone} variant="outline">
          {TONE_TRIGGER_LABELS[tone]}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPopup tone={tone} className="w-[900px]">
        <AlertDialogHeader>
          {TONE_ICONS[tone]}
          <AlertDialogContent>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialogHeader>
        <AlertDialogActions>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogConfirm>{confirm}</AlertDialogConfirm>
        </AlertDialogActions>
      </AlertDialogPopup>
    </AlertDialog>
  )
}

export default {
  title: 'Components/Alert Dialog',
  component: AlertDialog,
  subcomponents: {
    AlertDialogClose,
    AlertDialogConfirm,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter: AlertDialogActions,
    AlertDialogPopup,
    AlertDialogTitle,
    AlertDialogTrigger,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: TONES,
      description: 'Sets the semantic tone of the dialog, colouring the icon and confirm button.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle:
        'An accessible modal dialog that interrupts the user to confirm or acknowledge an action.',
      description: {
        component:
          'The Alert Dialog component blocks interaction with the rest of the application until the user explicitly confirms or cancels. It supports seven semantic tones (`brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`) that colour the leading icon and the confirm button.',
      },
    },
  },
} satisfies Meta<typeof AlertDialogPopup>

type Story = StoryObj<typeof AlertDialogPopup>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  args: { tone: 'brand' },
  parameters: {
    docs: {
      description: {
        story:
          'Use the controls panel to explore all `tone` options. Click the trigger button to open the dialog.',
      },
    },
  },
  render: (args) => <DialogTemplate tone={args.tone as Tone} />,
}

// ─── Tones ───────────────────────────────────────────────────────────────────

export const Brand: Story = {
  name: 'Tone / Brand',
  parameters: {
    docs: {
      description: {
        story: 'Default tone. Use for standard confirmations and brand-aligned actions.',
      },
    },
  },
  render: () => <DialogTemplate tone="brand" />,
}

export const Accent: Story = {
  name: 'Tone / Accent',
  parameters: {
    docs: {
      description: {
        story: 'Highlights a secondary or promoted action, such as publishing content.',
      },
    },
  },
  render: () => <DialogTemplate tone="accent" />,
}

export const Neutral: Story = {
  name: 'Tone / Neutral',
  parameters: {
    docs: {
      description: {
        story: 'Neutral tone for non-critical confirmations like saving or discarding changes.',
      },
    },
  },
  render: () => <DialogTemplate tone="neutral" />,
}

export const Error: Story = {
  name: 'Tone / Error',
  parameters: {
    docs: {
      description: {
        story: 'Used for destructive or irreversible actions such as permanently deleting an item.',
      },
    },
  },
  render: () => <DialogTemplate tone="error" />,
}

export const Info: Story = {
  name: 'Tone / Info',
  parameters: {
    docs: {
      description: {
        story: 'Informational tone for dialogs requiring acknowledgement, such as updated terms.',
      },
    },
  },
  render: () => <DialogTemplate tone="info" />,
}

export const Success: Story = {
  name: 'Tone / Success',
  parameters: {
    docs: {
      description: {
        story: 'Confirms a positive or completing action, such as marking a task as done.',
      },
    },
  },
  render: () => <DialogTemplate tone="success" />,
}

export const Warning: Story = {
  name: 'Tone / Warning',
  parameters: {
    docs: {
      description: {
        story: 'Draws attention to a consequential action the user should think twice about.',
      },
    },
  },
  render: () => <DialogTemplate tone="warning" />,
}

// ─── Composition ─────────────────────────────────────────────────────────────

export const AllTones: Story = {
  name: 'Composition / All Tones',
  parameters: {
    docs: {
      description: {
        story:
          'All tone variants displayed together. Each trigger opens its own independent dialog.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-sm">
      {TONES.map((tone) => (
        <DialogTemplate key={tone} tone={tone} />
      ))}
    </div>
  ),
}

export const DestructiveFlow: Story = {
  name: 'Composition / Destructive Flow',
  parameters: {
    docs: {
      description: {
        story:
          'A common pattern for irreversible destructive actions. The error tone makes the risk clear, with a labelled trigger and icon reinforcing the severity.',
      },
    },
  },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button tone="error" variant="soft">
          <TrashIcon weight="bold" />
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPopup tone="error">
        <AlertDialogHeader>
          <XCircleIcon weight="fill" />
          <AlertDialogContent>
            <AlertDialogTitle>Delete your account?</AlertDialogTitle>
            <AlertDialogDescription>
              All of your data, including projects, settings, and billing history, will be
              permanently erased. This action is irreversible and cannot be appealed.
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialogHeader>
        <AlertDialogActions>
          <AlertDialogClose>Keep Account</AlertDialogClose>
          <AlertDialogConfirm>Delete Forever</AlertDialogConfirm>
        </AlertDialogActions>
      </AlertDialogPopup>
    </AlertDialog>
  ),
}

export const CriticalWarning: Story = {
  name: 'Composition / Critical Warning',
  parameters: {
    docs: {
      description: {
        story:
          'A warning-tone dialog for high-stakes but non-destructive actions, such as transferring ownership.',
      },
    },
  },
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button tone="warning" variant="soft">
          <WarningCircleIcon weight="bold" />
          Transfer Ownership
        </Button>
      </AlertDialogTrigger>
      <AlertDialogPopup tone="warning">
        <AlertDialogHeader>
          <WarningIcon weight="fill" />
          <AlertDialogContent>
            <AlertDialogTitle>Transfer workspace ownership?</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to transfer ownership of this workspace to another member. You will
              immediately lose your admin privileges and cannot reclaim ownership without their
              consent.
            </AlertDialogDescription>
          </AlertDialogContent>
        </AlertDialogHeader>
        <AlertDialogActions>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogConfirm>Transfer Ownership</AlertDialogConfirm>
        </AlertDialogActions>
      </AlertDialogPopup>
    </AlertDialog>
  ),
}
