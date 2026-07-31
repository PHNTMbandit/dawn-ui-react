import { Skeleton } from './skeleton'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    subtitle: 'A component for displaying loading skeletons.',
    description: {
      component:
        'The Skeleton component is used to display placeholder loading skeletons while content is being fetched or loaded. It provides a visual indication to users that data is being loaded, enhancing the user experience during wait times.',
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS classes to style the skeleton',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ' rounded-lg' },
      },
    },
    children: {
      description: 'Nested content (rarely used for basic skeletons)',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    className: 'w-3xl h-2xl rounded-lg',
  },
} satisfies Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

/**
 * The Playground story demonstrates a basic rectangular skeleton with customizable styling.
 */
export const Playground: Story = {
  render: (args) => <Skeleton {...args} />,
}

/**
 * Rectangle shapes are the most common skeleton pattern for loading cards and images.
 */
export const ShapeRectangle: Story = {
  render: () => <Skeleton className="h-2xl w-3xl rounded-lg" />,
}

/**
 * Text lines with varying widths create a natural-looking paragraph skeleton.
 */
export const ShapeTextLines: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-xs">
      <Skeleton className="h-2xs w-full rounded-sm" />
      <Skeleton className="h-2xs w-11/12 rounded-sm" />
      <Skeleton className="h-2xs w-5/6 rounded-sm" />
    </div>
  ),
}

/**
 * Composition: Profile skeleton shows a typical user profile loading state.
 */
export const CompositionProfile: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-md">
      <div className="flex items-center gap-md">
        <Skeleton className="size-md shrink-0 rounded-full" />
        <div className="flex-1 space-y-xs">
          <Skeleton className="h-2xs w-xl rounded-sm" />
          <Skeleton className="h-3xs w-lg rounded-sm" />
        </div>
      </div>
      <div className="space-y-xs">
        <Skeleton className="h-2xs w-full rounded-sm" />
        <Skeleton className="h-2xs w-11/12 rounded-sm" />
      </div>
    </div>
  ),
}
