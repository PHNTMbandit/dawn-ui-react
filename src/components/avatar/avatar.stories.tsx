import {
  BellIcon,
  CheckIcon,
  CrownIcon,
  DotOutlineIcon,
  PlusIcon,
  WarningIcon,
} from '@phosphor-icons/react'
import { Avatar } from './avatar'
import { AvatarBadge } from './avatar-badge'
import { AvatarFallback } from './avatar-fallback'
import { AvatarImage } from './avatar-image'

import type { Meta, StoryObj } from '@storybook/react-vite'

const SIZES = ['small', 'medium', 'large'] as const
const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const
const POSITIONS = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const

type AvatarSize = (typeof SIZES)[number]
type BadgeTone = (typeof TONES)[number]
type BadgePosition = (typeof POSITIONS)[number]

const SAMPLE_USERS = [
  {
    name: 'Sophia Turner',
    initials: 'ST',
    image: 'https://github.com/shadcn.png',
  },
  {
    name: 'Marcus Lee',
    initials: 'ML',
    image: 'https://i.pravatar.cc/128?img=12',
  },
  {
    name: 'Nina Patel',
    initials: 'NP',
    image: 'https://i.pravatar.cc/128?img=32',
  },
] as const

const BADGE_ICONS = {
  brand: <CrownIcon weight="bold" />,
  accent: <BellIcon weight="bold" />,
  neutral: <DotOutlineIcon weight="fill" />,
  error: <WarningIcon weight="bold" />,
  info: <BellIcon weight="bold" />,
  success: <CheckIcon weight="bold" />,
  warning: <WarningIcon weight="bold" />,
} satisfies Record<BadgeTone, React.ReactNode>

const AvatarTemplate = ({
  size = 'medium',
  withFallback = false,
  showBadge = false,
  badgeTone = 'success',
  badgePosition = 'bottomRight',
  badgeIcon = false,
}: {
  size?: AvatarSize
  withFallback?: boolean
  showBadge?: boolean
  badgeTone?: BadgeTone
  badgePosition?: BadgePosition
  badgeIcon?: boolean
}) => (
  <Avatar size={size}>
    {withFallback ? (
      <AvatarFallback>ST</AvatarFallback>
    ) : (
      <AvatarImage alt="Sophia Turner" src={SAMPLE_USERS[0].image} />
    )}
    {showBadge ? (
      <AvatarBadge position={badgePosition} tone={badgeTone}>
        {badgeIcon ? BADGE_ICONS[badgeTone] : null}
      </AvatarBadge>
    ) : null}
  </Avatar>
)

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback, AvatarBadge },
  argTypes: {
    size: {
      options: SIZES,
      control: { type: 'select' },
      description: 'Controls the avatar dimensions and fallback text size.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle:
        'A circular user representation that supports images, initials, and presence badges.',
      description: {
        component:
          'The Avatar component visually represents a person, team member, or entity. It supports three sizes (`small`, `medium`, `large`), image and fallback rendering, and optional status badges with configurable tone and position. Use it in navigation, comments, messaging interfaces, member lists, and activity feeds.',
      },
    },
  },
  args: {
    size: 'medium',
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src={'https://github.com/shadcn.png'} />
    </Avatar>
  ),
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use controls to explore the supported avatar sizes with the default image example.',
      },
    },
  },
}

export const Small: Story = {
  name: 'Size / Small',
  args: {
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact avatar size suited to dense lists, table rows, and inline metadata.',
      },
    },
  },
}

export const Medium: Story = {
  name: 'Size / Medium',
  args: {
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default avatar size for profile summaries, cards, and list items.',
      },
    },
  },
}
export const Large: Story = {
  name: 'Size / Large',
  args: {
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large presentation size for profile headers and prominent user surfaces.',
      },
    },
  },
}

export const WithFallback: Story = {
  name: 'State / Fallback',
  render: (args) => <AvatarTemplate size={args.size as AvatarSize} withFallback />,
  parameters: {
    docs: {
      description: {
        story: 'When no image is available, fallback initials keep the identity recognizable.',
      },
    },
  },
}

type BadgeStory = StoryObj<typeof AvatarBadge>

export const Badge: BadgeStory = {
  name: 'Badge / Dot',
  args: {
    tone: 'success',
    position: 'bottomRight',
  },
  argTypes: {
    tone: {
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    position: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <AvatarTemplate
      badgePosition={args.position as BadgePosition}
      badgeTone={args.tone as BadgeTone}
      showBadge
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A simple presence/status dot applied to the avatar using tone and position options.',
      },
    },
  },
}

export const BadgeWithIcon: BadgeStory = {
  name: 'Badge / Icon',
  args: {
    tone: 'neutral',
    position: 'bottomRight',
  },
  argTypes: {
    tone: {
      options: ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    position: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'select' },
    },
  },
  render: (args) => (
    <Avatar size="medium">
      <AvatarImage alt="Sophia Turner" src={SAMPLE_USERS[0].image} />
      <AvatarBadge position={args.position as BadgePosition} tone={args.tone as BadgeTone}>
        <PlusIcon weight="bold" />
      </AvatarBadge>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'An icon badge is useful for actions such as invite, add, or role indicators.',
      },
    },
  },
}

export const AllSizes: Story = {
  name: 'Composition / All Sizes',
  render: () => (
    <div className="flex items-end gap-md">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-xs">
          <AvatarTemplate size={size} />
          <span className="style-text-default--1 text-on-surface-variant capitalize">{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All supported sizes displayed together for quick visual comparison.',
      },
    },
  },
}

export const AllBadgeTones: BadgeStory = {
  name: 'Composition / Badge Tones',
  render: () => (
    <div className="flex flex-wrap gap-md">
      {TONES.map((tone) => (
        <div key={tone} className="flex flex-col items-center gap-xs">
          <AvatarTemplate badgeTone={tone} showBadge />
          <span className="style-text-default--1 text-on-surface-variant capitalize">{tone}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All badge tones shown on the same avatar so status colors can be compared at a glance.',
      },
    },
  },
}

export const BadgePositions: BadgeStory = {
  name: 'Composition / Badge Positions',
  render: () => (
    <div className="flex flex-wrap gap-md">
      {POSITIONS.map((position) => (
        <div key={position} className="flex flex-col items-center gap-xs">
          <AvatarTemplate badgePosition={position} showBadge />
          <span className="style-text-default--1 text-on-surface-variant">{position}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge placement options for adapting presence indicators to different layouts.',
      },
    },
  },
}

export const TeamStack: Story = {
  name: 'Composition / Team Stack',
  render: () => (
    <div className="flex items-center">
      {SAMPLE_USERS.map((user, index) => (
        <div key={user.name} className={index === 0 ? '' : '-ml-xs'}>
          <Avatar className="outline-2 outline-surface-background" size="medium">
            <AvatarImage alt={user.name} src={user.image} />
          </Avatar>
        </div>
      ))}
      <div className="-ml-xs">
        <Avatar size="medium">
          <AvatarFallback>+4</AvatarFallback>
        </Avatar>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A common overlapping team/member stack pattern for cards, channels, and participant summaries.',
      },
    },
  },
}
