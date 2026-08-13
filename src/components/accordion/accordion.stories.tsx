import {
  BellIcon,
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@phosphor-icons/react'
import { Accordion } from './accordion'
import { AccordionHeader } from './accordion-header'
import { AccordionItem } from './accordion-item'
import { AccordionPanel } from './accordion-panel'
import { AccordionSubtitle } from './accordion-subtitle'
import { AccordionTitle } from './accordion-title'
import { AccordionTrigger } from './accordion-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONE_ICONS = {
  brand: <InfoIcon weight="duotone" />,
  accent: <BellIcon weight="duotone" />,
  neutral: <InfoIcon weight="duotone" />,
  error: <XCircleIcon weight="duotone" />,
  info: <InfoIcon weight="duotone" />,
  success: <CheckCircleIcon weight="duotone" />,
  warning: <WarningIcon weight="duotone" />,
}

const TONE_CONTENT: Record<string, { title: string; subtitle: string; body: string }> = {
  brand: {
    title: 'Brand Information',
    subtitle: 'Core brand guidelines and assets',
    body: 'This section contains important brand-related information, including color usage, typography standards, and logo guidelines to ensure a consistent visual identity.',
  },
  accent: {
    title: 'Highlighted Feature',
    subtitle: 'Check out this new update',
    body: 'Discover the latest features and improvements in this release. This section highlights notable changes and enhancements that improve the overall user experience.',
  },
  neutral: {
    title: 'General Information',
    subtitle: 'Background context and details',
    body: 'This section provides general context and supplementary information. It is intended for neutral, non-critical content that supports the main content of the page.',
  },
  error: {
    title: 'Error Details',
    subtitle: 'Something went wrong',
    body: 'An error occurred while processing your request. Please review the details below and take the appropriate action to resolve the issue before continuing.',
  },
  info: {
    title: 'Additional Information',
    subtitle: 'Learn more about this topic',
    body: 'This section provides additional context and background information. Expanding this panel will give you a deeper understanding of the subject matter.',
  },
  success: {
    title: 'Action Completed',
    subtitle: 'Your changes have been saved',
    body: 'The operation completed successfully. All changes have been persisted and will take effect immediately. No further action is required on your part.',
  },
  warning: {
    title: 'Proceed with Caution',
    subtitle: 'Review before continuing',
    body: 'This action may have significant consequences. Please read the following information carefully before proceeding to ensure you understand the potential impact.',
  },
}

const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const

type Tone = (typeof TONES)[number]

const SingleItem = ({ tone = 'brand' }: { tone?: Tone }) => {
  const { title, subtitle, body } = TONE_CONTENT[tone]
  return (
    <AccordionItem tone={tone}>
      <AccordionTrigger>
        {TONE_ICONS[tone]}
        <AccordionHeader>
          <AccordionTitle>{title}</AccordionTitle>
          <AccordionSubtitle>{subtitle}</AccordionSubtitle>
        </AccordionHeader>
      </AccordionTrigger>
      <AccordionPanel>{body}</AccordionPanel>
    </AccordionItem>
  )
}

const AllTonesItems = () => (
  <>
    {TONES.map((tone) => (
      <SingleItem key={tone} tone={tone} />
    ))}
  </>
)

export default {
  title: 'Components/Accordion',
  component: AccordionItem,
  subcomponents: {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionTitle,
    AccordionSubtitle,
    AccordionTrigger,
  },
  parameters: {
    docs: {
      subtitle: 'A vertically stacked set of interactive headings that reveal associated content.',
      description: {
        component:
          'The Accordion component displays collapsible content panels. Items support multiple tones (`brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`) and two layout variants (`surface`, `ghost`). Multiple panels can optionally be open at once via the `multiple` prop on the root.',
      },
    },
  },
  args: {
    tone: 'brand',
    disabled: false,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: TONES,
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => (
    <Accordion className="w-[520px]">
      <AccordionItem {...args}>
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          <AccordionHeader>
            <AccordionTitle>Accordion Item</AccordionTitle>
            <AccordionSubtitle>A brief description of this section</AccordionSubtitle>
          </AccordionHeader>
        </AccordionTrigger>
        <AccordionPanel>
          Expand this panel to reveal additional content. You can place any content here, including
          text, images, or other components.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
} satisfies Meta<typeof AccordionItem>

type Story = StoryObj<typeof AccordionItem>

export const Brand: Story = {
  args: { tone: 'brand' },
}

export const Accent: Story = {
  args: { tone: 'accent' },
}

export const Neutral: Story = {
  args: { tone: 'neutral' },
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
  args: { tone: 'error' },
}

export const Info: Story = {
  args: { tone: 'info' },
}

export const Success: Story = {
  args: { tone: 'success' },
}

export const Warning: Story = {
  args: { tone: 'warning' },
}

export const Surface: Story = {
  render: () => (
    <Accordion className="w-[520px]" variant="surface">
      <AllTonesItems />
    </Accordion>
  ),
}

export const Ghost: Story = {
  render: () => (
    <Accordion className="w-[520px]" variant="ghost">
      <AllTonesItems />
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion className="w-[520px]" multiple>
      <SingleItem tone="brand" />
      <SingleItem tone="accent" />
      <SingleItem tone="success" />
    </Accordion>
  ),
}

export const Nested: Story = {
  render: () => (
    <Accordion className="w-[520px]">
      <AccordionItem tone="brand">
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          <AccordionHeader>
            <AccordionTitle>Parent Accordion Item</AccordionTitle>
            <AccordionSubtitle>Expand to reveal a nested accordion</AccordionSubtitle>
          </AccordionHeader>
        </AccordionTrigger>
        <AccordionPanel>
          <Accordion variant="ghost" multiple>
            <SingleItem tone="info" />
            <SingleItem tone="warning" />
            <SingleItem tone="success" />
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem tone="neutral">
        <AccordionTrigger>
          <InfoIcon weight="duotone" />
          <AccordionHeader>
            <AccordionTitle>Sibling Parent Item</AccordionTitle>
            <AccordionSubtitle>Regular parent accordion content</AccordionSubtitle>
          </AccordionHeader>
        </AccordionTrigger>
        <AccordionPanel>
          This is a standard panel next to the nested example for quick comparison.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithoutSubtitle: Story = {
  render: () => (
    <Accordion className="w-[520px]">
      {TONES.map((tone) => (
        <AccordionItem key={tone} tone={tone}>
          <AccordionTrigger>
            {TONE_ICONS[tone]}
            <AccordionHeader>
              <AccordionTitle>{TONE_CONTENT[tone].title}</AccordionTitle>
            </AccordionHeader>
          </AccordionTrigger>
          <AccordionPanel>{TONE_CONTENT[tone].body}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const WithoutSeparators: Story = {
  render: () => (
    <Accordion className="w-[520px]" withSeparator={false}>
      <AllTonesItems />
    </Accordion>
  ),
}

export const AllTones: Story = {
  render: () => (
    <Accordion className="w-[520px]">
      <AllTonesItems />
    </Accordion>
  ),
}
