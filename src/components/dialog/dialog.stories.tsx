import { Button } from '../button'
import { InputGroup, InputGroupInput } from '../input-group'
import { ScrollArea } from '../scroll-area'
import { Dialog } from './dialog'
import { DialogClose } from './dialog-close'
import { DialogContent } from './dialog-content'
import { DialogDescription } from './dialog-description'
import { DialogFooter } from './dialog-footer'
import { DialogHeader } from './dialog-header'
import { DialogPopup } from './dialog-popup'
import { DialogTitle } from './dialog-title'
import { DialogTrigger } from './dialog-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const LongDialogText =
  'Use a dialog when users need to complete a focused task without leaving context. Keep the title concise, provide a short description, and ensure actions are clear. For long content, preserve comfortable spacing and allow scrolling so users can review details without layout jumps. Prefer short forms and explicit button labels such as Create project, Save changes, or Delete item.'

const BasicDialog = ({
  title = 'Dialog Title',
  description = 'Description of the dialog',
  showClose = true,
  showFooter = true,
}: {
  title?: string
  description?: string
  showClose?: boolean
  showFooter?: boolean
}) => (
  <Dialog>
    <DialogTrigger>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogPopup>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent>
        This is dialog content. You can place informational text, confirmation details, or compact
        forms here.
      </DialogContent>
      {showFooter ? (
        <DialogFooter>
          <Button tone="neutral" variant="outline">
            Cancel
          </Button>
          <Button>Confirm</Button>
        </DialogFooter>
      ) : null}
      {showClose ? <DialogClose data-testid="close-button" /> : null}
    </DialogPopup>
  </Dialog>
)

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    DialogClose,
    DialogDescription,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogPopup,
    DialogTitle,
    DialogTrigger,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle: 'A modal surface for focused tasks, confirmations, and contextual forms.',
      description: {
        component:
          'Dialog presents an overlay and popup that temporarily interrupts the page for focused work. It supports composed header, content, footer, and close primitives, and is suitable for confirmations, short forms, and detail review flows.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className="flex min-h-dvh w-full items-center justify-center bg-cover bg-center p-lg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: () => <BasicDialog />,
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Baseline dialog composition with title, description, content, footer actions, and close control.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Composition / Default',
}

export const NoCloseButton: Story = {
  name: 'Composition / No Close Button',
  parameters: {
    docs: {
      description: {
        story:
          'Removes the explicit corner close affordance; useful when footer actions should drive dismissal.',
      },
    },
  },
  render: () => (
    <BasicDialog
      title="Invite Member"
      description="Send an invitation to a new workspace member."
      showClose={false}
      showFooter={false}
    />
  ),
}

export const ScrollableContent: Story = {
  name: 'Composition / Scrollable Content',
  parameters: {
    docs: {
      description: {
        story:
          'Use a scroll container for longer dialog content while preserving header and action context.',
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Dialog Usage Notes</DialogTitle>
          <DialogDescription>
            Guidelines for writing clear and focused dialog experiences.
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <ScrollArea className="max-h-[40vh]">
            <div>
              <p>{LongDialogText}</p>
              <p>{LongDialogText}</p>
              <p>{LongDialogText}</p>
              <p>{LongDialogText}</p>
            </div>
          </ScrollArea>
        </DialogContent>
        <DialogFooter>
          <Button tone="neutral" variant="outline">
            Cancel
          </Button>
          <Button>Acknowledge</Button>
        </DialogFooter>
        <DialogClose data-testid="close-button" />
      </DialogPopup>
    </Dialog>
  ),
}

export const FormContent: Story = {
  name: 'Composition / Form Content',
  parameters: {
    docs: {
      description: {
        story: 'Dialogs are effective for short forms that require immediate user attention.',
      },
    },
  },
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Create Project</Button>
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>Provide a project name to continue.</DialogDescription>
        </DialogHeader>
        <DialogContent>
          <InputGroup variant="secondary">
            <InputGroupInput placeholder="Project name" />
          </InputGroup>
        </DialogContent>
        <DialogFooter>
          <Button tone="neutral" variant="outline">
            Cancel
          </Button>
          <Button>Create</Button>
        </DialogFooter>
        <DialogClose data-testid="close-button" />
      </DialogPopup>
    </Dialog>
  ),
}
