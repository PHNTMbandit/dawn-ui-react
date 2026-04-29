import { ArrowRightIcon, DownloadSimpleIcon, PlusIcon } from '@phosphor-icons/react'
import { Button } from './button'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const
const VARIANTS = ['fill', 'outline', 'ghost', 'soft', 'elevated'] as const
const SIZES = [
  'large',
  'iconLarge',
  'medium',
  'iconMedium',
  'small',
  'iconSmall',
  'extraSmall',
  'iconExtraSmall',
] as const

type Tone = (typeof TONES)[number]
type Variant = (typeof VARIANTS)[number]
type Size = (typeof SIZES)[number]

const TONE_LABELS: Record<Tone, string> = {
  brand: 'Create project',
  accent: 'Explore feature',
  neutral: 'View details',
  error: 'Delete item',
  info: 'Learn more',
  success: 'Save changes',
  warning: 'Review action',
}

const TONE_DESCRIPTIONS: Record<Tone, string> = {
  brand: 'Primary brand action used for the most important action on the page.',
  accent: 'Secondary highlighted action for promoted or supporting workflows.',
  neutral: 'General-purpose action with lower semantic weight.',
  error: 'Destructive action such as delete, remove, or revoke.',
  info: 'Informational action leading to more context or guidance.',
  success: 'Positive completion action such as save, confirm, or apply.',
  warning: 'High-attention action where the user should pause before proceeding.',
}

const ButtonPreview = ({
  tone = 'brand',
  variant = 'fill',
  size = 'medium',
}: {
  tone?: Tone
  variant?: Variant
  size?: Size
}) => {
  const iconOnly = size.startsWith('icon')

  return (
    <Button size={size} tone={tone} variant={variant}>
      <PlusIcon weight="bold" />
      {iconOnly ? null : TONE_LABELS[tone]}
    </Button>
  )
}

const VariantShowcase = ({ variant = 'fill' }: { variant?: Variant }) => (
  <div className="flex flex-wrap gap-sm">
    {TONES.map((tone) => (
      <ButtonPreview key={tone} tone={tone} variant={variant} />
    ))}
  </div>
)

const TextSizesPreview = () => (
  <div className="flex flex-wrap items-center gap-sm">
    <ButtonPreview size="large" />
    <ButtonPreview size="medium" />
    <ButtonPreview size="small" />
    <ButtonPreview size="extraSmall" />
  </div>
)

const IconSizesPreview = () => (
  <div className="flex flex-wrap items-center gap-sm">
    <ButtonPreview size="iconLarge" />
    <ButtonPreview size="iconMedium" />
    <ButtonPreview size="iconSmall" />
    <ButtonPreview size="iconExtraSmall" />
  </div>
)

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS,
      description: 'Controls the visual treatment of the button.',
      table: {
        defaultValue: { summary: 'fill' },
      },
    },
    tone: {
      control: 'select',
      options: TONES,
      description: 'Applies the semantic color tone for the action.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
    size: {
      control: 'radio',
      options: SIZES,
      description: 'Controls the button height, padding, and icon size.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and applies disabled styling.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Button label. Ignored for icon-only sizes in the default preview.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'Displays a button or a component that looks like a button.',
      description: {
        component:
          'The Button component is the primary action trigger across the interface. It supports five visual variants (`fill`, `outline`, `ghost`, `soft`, `elevated`), seven semantic tones (`brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`), and paired text or icon-only sizes for a broad range of use cases.',
      },
    },
  },
  args: {
    children: 'Create project',
    size: 'medium',
    variant: 'fill',
    tone: 'brand',
    disabled: false,
  },
  render: (args) => (
    <Button {...args}>
      <PlusIcon weight="bold" />
      {args.children}
    </Button>
  ),
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use the controls panel to explore tone, variant, size, and disabled combinations.',
      },
    },
  },
}

export const Brand: Story = {
  name: 'Tone / Brand',
  args: {
    tone: 'brand',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.brand,
      },
    },
  },
}

export const Accent: Story = {
  name: 'Tone / Accent',
  args: {
    tone: 'accent',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.accent,
      },
    },
  },
}

export const Neutral: Story = {
  name: 'Tone / Neutral',
  args: {
    tone: 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.neutral,
      },
    },
  },
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
  name: 'Tone / Error',
  args: {
    tone: 'error',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.error,
      },
    },
  },
}

export const Info: Story = {
  name: 'Tone / Info',
  args: {
    tone: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.info,
      },
    },
  },
}

export const Success: Story = {
  name: 'Tone / Success',
  args: {
    tone: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.success,
      },
    },
  },
}

export const Warning: Story = {
  name: 'Tone / Warning',
  args: {
    tone: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: TONE_DESCRIPTIONS.warning,
      },
    },
  },
}

export const Fill: Story = {
  name: 'Variant / Fill',
  args: {
    variant: 'fill',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default high-emphasis button for primary calls to action.',
      },
    },
  },
  render: () => <VariantShowcase variant="fill" />,
}

export const Outline: Story = {
  name: 'Variant / Outline',
  args: {
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bordered button for secondary actions that still need strong affordance.',
      },
    },
  },
  render: () => <VariantShowcase variant="outline" />,
}

export const Ghost: Story = {
  name: 'Variant / Ghost',
  args: {
    variant: 'ghost',
  },
  parameters: {
    docs: {
      description: {
        story: 'Low-emphasis action for toolbars, inline actions, and dense surfaces.',
      },
    },
  },
  render: () => <VariantShowcase variant="ghost" />,
}

export const Soft: Story = {
  name: 'Variant / Soft',
  args: {
    variant: 'soft',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Container-style button with softer contrast than fill and more presence than ghost.',
      },
    },
  },
  render: () => <VariantShowcase variant="soft" />,
}

export const Elevated: Story = {
  name: 'Variant / Elevated',
  args: {
    variant: 'elevated',
  },
  parameters: {
    docs: {
      description: {
        story: 'Surface-raised button for floating actions or layered interfaces.',
      },
    },
  },
  render: () => <VariantShowcase variant="elevated" />,
}

export const Small: Story = {
  name: 'Size / Small',
  args: {
    size: 'small',
  },
}

export const Medium: Story = {
  name: 'Size / Medium',
  args: {
    size: 'medium',
  },
}

export const Large: Story = {
  name: 'Size / Large',
  args: {
    size: 'large',
  },
}

export const IconSmall: Story = {
  name: 'Size / Icon Small',
  args: {
    size: 'iconSmall',
  },
  render: (args) => (
    <Button {...args} aria-label="Add item">
      <PlusIcon weight="bold" />
    </Button>
  ),
}

export const IconMedium: Story = {
  name: 'Size / Icon Medium',
  args: {
    size: 'iconMedium',
  },
  render: (args) => (
    <Button {...args} aria-label="Add item">
      <PlusIcon weight="bold" />
    </Button>
  ),
}

export const IconLarge: Story = {
  name: 'Size / Icon Large',
  args: {
    size: 'iconLarge',
  },
  render: (args) => (
    <Button {...args} aria-label="Add item">
      <PlusIcon weight="bold" />
    </Button>
  ),
}

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    disabled: true,
    tone: 'neutral',
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons preserve layout while clearly communicating unavailable actions.',
      },
    },
  },
}

export const TextSizes: Story = {
  name: 'Composition / Text Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Text button sizes shown together to compare spacing and hierarchy.',
      },
    },
  },
  render: () => <TextSizesPreview />,
}

export const IconSizes: Story = {
  name: 'Composition / Icon Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Icon-only sizes for compact toolbars, utility actions, and icon grids.',
      },
    },
  },
  render: () => <IconSizesPreview />,
}

export const ActionRow: Story = {
  name: 'Composition / Action Row',
  parameters: {
    docs: {
      description: {
        story: 'A typical set of related actions using different emphasis levels in one row.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-sm">
      <Button tone="brand" variant="fill">
        <PlusIcon weight="bold" />
        New project
      </Button>
      <Button tone="neutral" variant="outline">
        <DownloadSimpleIcon weight="bold" />
        Export
      </Button>
      <Button tone="neutral" variant="ghost">
        Learn more
        <ArrowRightIcon weight="bold" />
      </Button>
    </div>
  ),
}
