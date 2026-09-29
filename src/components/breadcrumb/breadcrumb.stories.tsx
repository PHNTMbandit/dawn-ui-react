import { BookIcon, HouseIcon } from '@phosphor-icons/react'
import { Breadcrumb } from './breadcrumb'
import { BreadcrumbEllipsis } from './breadcrumb-ellipsis'
import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbLink } from './breadcrumb-link'
import { BreadcrumbSeparator } from './breadcrumb-separator'

import type { Meta, StoryObj } from '@storybook/react-vite'

const DefaultTrail = () => (
  <Breadcrumb aria-label="Breadcrumb">
    <BreadcrumbLink>
      <HouseIcon weight="bold" />
      Home
    </BreadcrumbLink>
    <BreadcrumbSeparator />
    <BreadcrumbLink>
      <BookIcon weight="bold" />
      Documentation
    </BreadcrumbLink>
    <BreadcrumbSeparator />
    <BreadcrumbItem>Buttons</BreadcrumbItem>
  </Breadcrumb>
)

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbEllipsis,
    BreadcrumbSeparator,
  },
  parameters: {
    docs: {
      subtitle: 'Displays a breadcrumb navigation component.',
      description: {
        component:
          'The Breadcrumb component communicates the current location within a hierarchy of pages or views. It is composed from small primitives for links, separators, collapsed states, and the current page item, making it flexible enough for full navigation trails and compact collapsed paths.',
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>

type Story = StoryObj<typeof Breadcrumb>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'A baseline breadcrumb trail showing link, separator, and current item roles together.',
      },
    },
  },
  render: () => <DefaultTrail />,
}

export const Default: Story = {
  name: 'Composition / Default Trail',
  parameters: {
    docs: {
      description: {
        story: 'Standard breadcrumb usage for small to medium navigation hierarchies.',
      },
    },
  },
  render: (args) => (
    <Breadcrumb {...args} aria-label="Breadcrumb">
      <BreadcrumbLink>
        <HouseIcon weight="bold" />
        Home
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbLink>
        <BookIcon weight="bold" />
        Documentation
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Buttons</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const CollapsedPath: Story = {
  name: 'Composition / Collapsed Path',
  parameters: {
    docs: {
      description: {
        story: 'Use the ellipsis primitive when longer paths need to be compressed.',
      },
    },
  },
  render: () => (
    <Breadcrumb aria-label="Collapsed breadcrumb">
      <BreadcrumbLink>
        <HouseIcon weight="bold" />
        Home
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
      <BreadcrumbSeparator />
      <BreadcrumbLink>Documentation</BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Button Group</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const IconFirstLink: Story = {
  name: 'Composition / Icon First Link',
  parameters: {
    docs: {
      description: {
        story: 'Icons help users quickly identify important root destinations like home or docs.',
      },
    },
  },
  render: () => (
    <Breadcrumb aria-label="Breadcrumb with icons">
      <BreadcrumbLink>
        <HouseIcon weight="bold" />
        Dashboard
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbLink>
        <BookIcon weight="bold" />
        Components
      </BreadcrumbLink>
      <BreadcrumbSeparator />
      <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const Item: Story = {
  name: 'Primitive / Current Item',
  parameters: {
    docs: {
      description: {
        story:
          'Represents the current page or location and is typically rendered last in the trail.',
      },
    },
  },
  render: () => (
    <BreadcrumbItem>
      <HouseIcon weight="bold" />
      Home
    </BreadcrumbItem>
  ),
}

export const Link: Story = {
  name: 'Primitive / Link',
  parameters: {
    docs: {
      description: {
        story: 'Interactive breadcrumb segment used for previous levels in the path.',
      },
    },
  },
  render: () => (
    <BreadcrumbLink>
      <BookIcon weight="bold" />
      Documentation
    </BreadcrumbLink>
  ),
}

export const Ellipsis: Story = {
  name: 'Primitive / Ellipsis',
  parameters: {
    docs: {
      description: {
        story: 'Collapsed segment used when intermediate levels are hidden from view.',
      },
    },
  },
  render: () => <BreadcrumbEllipsis />,
}

export const Separator: Story = {
  name: 'Primitive / Separator',
  parameters: {
    docs: {
      description: {
        story: 'Visual separator inserted between breadcrumb segments.',
      },
    },
  },
  render: () => <BreadcrumbSeparator />,
}
