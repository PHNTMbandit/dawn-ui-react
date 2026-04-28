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
 * Circular skeletons work well for avatars and profile images.
 */
export const ShapeCircle: Story = {
  render: () => <Skeleton className="size-12 rounded-full" />,
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
 * Composition: Card skeleton simulates a loading card with image and text content.
 */
export const CompositionCard: Story = {
  render: () => (
    <div className="bg-surface-1 w-full max-w-sm space-y-md rounded-lg border border-surface-3 p-md">
      <Skeleton className="h-48 w-full rounded-lg" />
      <div className="space-y-xs">
        <Skeleton className="h-xs w-3/5 rounded-sm" />
        <Skeleton className="h-2xs w-full rounded-sm" />
        <Skeleton className="h-2xs w-4/5 rounded-sm" />
      </div>
      <Skeleton className="h-10 w-full rounded-lg" />
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

/**
 * Composition: List skeleton shows multiple items loading in sequence.
 */
export const CompositionList: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-md">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-md rounded-lg border border-surface-3 p-md">
          <Skeleton className="size-md shrink-0 rounded-sm" />
          <div className="flex-1 space-y-xs">
            <Skeleton className="w-40 h-4 rounded-sm" />
            <Skeleton className="w-24 h-3 rounded-sm" />
          </div>
          <Skeleton className="w-20 h-8 rounded-sm" />
        </div>
      ))}
    </div>
  ),
}

/**
 * Composition: Table skeleton shows a grid-like loading state.
 */
export const CompositionTable: Story = {
  render: () => (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-surface-3">
      <table className="w-full">
        <thead className="border-b border-surface-3 bg-surface-2">
          <tr>
            <th className="px-md py-md text-left">
              <Skeleton className="w-20 h-5 rounded-sm" />
            </th>
            <th className="px-md py-md text-left">
              <Skeleton className="w-28 h-5 rounded-sm" />
            </th>
            <th className="px-md py-md text-left">
              <Skeleton className="w-16 h-5 rounded-sm" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, i) => (
            <tr key={i} className="hover:bg-surface-1 border-b border-surface-3">
              <td className="px-md py-md">
                <Skeleton className="w-24 h-5 rounded-sm" />
              </td>
              <td className="px-md py-md">
                <Skeleton className="w-32 h-5 rounded-sm" />
              </td>
              <td className="px-md py-md">
                <Skeleton className="w-16 h-5 rounded-sm" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}
