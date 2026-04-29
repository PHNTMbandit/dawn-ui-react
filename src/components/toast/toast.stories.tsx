import { CopyIcon } from '@phosphor-icons/react'
import React from 'react'
import { anchoredToastManager, stackToastManager, ToastProvider } from '.'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { ToastVariant } from './toast.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

type Tone = ToastVariant

const showStackToast = ({
  tone = 'neutral',
  withAction = true,
}: {
  tone?: Tone
  withAction?: boolean
}) => {
  const id = stackToastManager.add({
    title: 'Notification',
    description: 'This is a sample toast notification.',
    variant: tone,
    actionProps: withAction
      ? {
          children: 'Undo',
          onClick() {
            stackToastManager.close(id)
            stackToastManager.add({
              title: 'Action undone',
              description: 'The previous action has been undone.',
              variant: tone,
            })
          },
        }
      : undefined,
  })

  return id
}

const showIconToast = (tone: Tone) => {
  stackToastManager.add({
    title: 'Copy successful',
    description: 'The content has been copied to your clipboard.',
    variant: tone,
    icon: CopyIcon,
  })
}

const StackTriggerButton = ({
  tone,
  withAction = true,
  className,
  children,
}: {
  tone: Tone
  withAction?: boolean
  className?: string
  children: React.ReactNode
}) => {
  return (
    <Button
      className={cn(className)}
      tone={tone}
      onClick={() => showStackToast({ tone, withAction })}
    >
      {children}
    </Button>
  )
}

const AnchoredTriggerButton = ({ tone = 'brand' }: { tone?: Tone }) => {
  const [showingToast, setShowingToast] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  return (
    <Button
      ref={buttonRef}
      tone={tone}
      onClick={() => {
        if (showingToast) return

        setShowingToast(true)
        anchoredToastManager.add({
          title: 'Notification',
          description: 'Copied!',
          variant: tone,
          positionerProps: {
            anchor: buttonRef.current,
            sideOffset: 8,
          },
          timeout: 5000,
          onClose() {
            setShowingToast(false)
          },
        })
      }}
    >
      <CopyIcon weight="bold" /> Copy
    </Button>
  )
}

export default {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    subtitle: 'A component for displaying brief messages to users.',
    description: {
      component:
        'Toast provides transient feedback for user actions. This set includes stacked toasts, anchored toasts, action buttons, and icon customization through the toast manager.',
    },
  },
} satisfies Meta<typeof ToastProvider>

type Story = StoryObj<typeof ToastProvider>

export const Playground: Story = {
  render: () => (
    <ToastProvider>
      <div className="flex w-[500px] flex-wrap items-center gap-sm">
        <StackTriggerButton tone="brand">Show Brand Toast</StackTriggerButton>
        <StackTriggerButton tone="success">Show Success Toast</StackTriggerButton>
        <StackTriggerButton tone="error">Show Error Toast</StackTriggerButton>
      </div>
    </ToastProvider>
  ),
}

export const ToneAllVariants: Story = {
  render: () => (
    <ToastProvider>
      <div className="grid w-[500px] grid-cols-2 gap-sm">
        <StackTriggerButton tone="brand">Brand</StackTriggerButton>
        <StackTriggerButton tone="accent">Accent</StackTriggerButton>
        <StackTriggerButton tone="neutral">Neutral</StackTriggerButton>
        <StackTriggerButton tone="info">Info</StackTriggerButton>
        <StackTriggerButton tone="success">Success</StackTriggerButton>
        <StackTriggerButton tone="warning">Warning</StackTriggerButton>
        <StackTriggerButton tone="error">Error</StackTriggerButton>
      </div>
    </ToastProvider>
  ),
}

export const BehaviorWithAction: Story = {
  render: () => (
    <ToastProvider>
      <div className="w-[500px]">
        <StackTriggerButton tone="brand" withAction>
          Show Toast With Action
        </StackTriggerButton>
      </div>
    </ToastProvider>
  ),
}

export const BehaviorWithoutAction: Story = {
  render: () => (
    <ToastProvider>
      <div className="w-[500px]">
        <StackTriggerButton tone="warning" withAction={false}>
          Show Toast Without Action
        </StackTriggerButton>
      </div>
    </ToastProvider>
  ),
}

export const BehaviorCustomIcon: Story = {
  render: () => (
    <ToastProvider>
      <div className="w-[500px]">
        <Button tone="accent" onClick={() => showIconToast('accent')}>
          Show Icon Toast
        </Button>
      </div>
    </ToastProvider>
  ),
}

export const CompositionAnchoredToast: Story = {
  render: () => (
    <ToastProvider>
      <div className="w-[500px] space-y-sm rounded-lg border border-surface-3 bg-surface p-md">
        <h3 className="style-text-strong-1">Copy Interaction</h3>
        <p className="style-text-prose--1 text-on-surface-variant">
          The toast is anchored to the trigger button and closes automatically.
        </p>
        <AnchoredTriggerButton tone="brand" />
      </div>
    </ToastProvider>
  ),
}
