import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import { Button } from '../button/button'
import { Input } from '../input/index'
import { ButtonGroup } from './button-group'

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

const TONE_DESCRIPTIONS: Record<Tone, string> = {
  brand: 'Default tone for primary grouped actions and segmented controls.',
  accent: 'Highlighted grouped action set for promoted or secondary emphasis.',
  neutral: 'General-purpose grouping with minimal semantic emphasis.',
  error: 'Destructive grouped actions such as bulk delete or revoke flows.',
  info: 'Informational action cluster for filters, views, or utilities.',
  success: 'Positive grouped actions such as save or confirm options.',
  warning: 'Attention-grabbing grouped actions where choices need more care.',
}

const ThreeButtons = () => (
  <>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </>
)

const TwoIconButtons = () => (
  <>
    <Button aria-label="Increase">
      <PlusIcon weight="bold" />
    </Button>
    <Button aria-label="Decrease">
      <MinusIcon weight="bold" />
    </Button>
  </>
)

const VariantShowcase = ({ variant = 'fill' }: { variant?: (typeof VARIANTS)[number] }) => (
  <div className="flex flex-col gap-sm">
    {TONES.map((tone) => (
      <ButtonGroup key={tone} tone={tone} variant={variant}>
        <ThreeButtons />
      </ButtonGroup>
    ))}
  </div>
)

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS,
      description: 'Controls the shared visual style of the grouped buttons.',
      table: {
        defaultValue: { summary: 'fill' },
      },
    },
    tone: {
      control: 'select',
      options: TONES,
      description: 'Applies a semantic tone across the entire group.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
    size: {
      control: 'radio',
      options: SIZES,
      description: 'Controls child button height, padding, and icon sizing.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Lays out the group horizontally or vertically.',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'Groups related actions into a single connected control.',
      description: {
        component:
          'The Button Group component combines related buttons into one cohesive unit. It supports multiple variants, tones, sizes, and orientations to fit different interaction patterns such as segmented controls, toolbars, and compact action groups.',
      },
    },
  },
  args: {
    variant: 'fill',
    tone: 'brand',
    size: 'medium',
    orientation: 'horizontal',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ThreeButtons />
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

type Story = StoryObj<typeof ButtonGroup>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use controls to explore different tones, variants, sizes, and orientations.',
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

export const Horizontal: Story = {
  name: 'Orientation / Horizontal',
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  name: 'Orientation / Vertical',
  args: {
    orientation: 'vertical',
    size: 'iconMedium',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <TwoIconButtons />
    </ButtonGroup>
  ),
}

export const Fill: Story = {
  name: 'Variant / Fill',
  args: {
    variant: 'fill',
  },
  render: () => <VariantShowcase variant="fill" />,
}

export const Outline: Story = {
  name: 'Variant / Outline',
  args: {
    variant: 'outline',
  },
  render: () => <VariantShowcase variant="outline" />,
}

export const Ghost: Story = {
  name: 'Variant / Ghost',
  args: {
    variant: 'ghost',
  },
  render: () => <VariantShowcase variant="ghost" />,
}

export const Soft: Story = {
  name: 'Variant / Soft',
  args: {
    variant: 'soft',
  },
  render: () => <VariantShowcase variant="soft" />,
}

export const Elevated: Story = {
  name: 'Variant / Elevated',
  args: {
    variant: 'elevated',
  },
  render: () => <VariantShowcase variant="elevated" />,
}

export const InputWithButton: Story = {
  name: 'Composition / Input with Button',
  parameters: {
    docs: {
      description: {
        story: 'Useful for search fields, numeric steppers, and compact composed controls.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Input placeholder="Search..." />
      <Button tone="neutral">
        <PlusIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
}

export const MixedTextIcon: Story = {
  name: 'Composition / Mixed Text and Icon',
  parameters: {
    docs: {
      description: {
        story:
          'Button groups can mix text and icon buttons when the actions remain closely related.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>
        <PlusIcon weight="bold" />
      </Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
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
    <ButtonGroup {...args}>
      <TwoIconButtons />
    </ButtonGroup>
  ),
}

export const IconMedium: Story = {
  name: 'Size / Icon Medium',
  args: {
    size: 'iconMedium',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <TwoIconButtons />
    </ButtonGroup>
  ),
}

export const IconLarge: Story = {
  name: 'Size / Icon Large',
  args: {
    size: 'iconLarge',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <TwoIconButtons />
    </ButtonGroup>
  ),
}

export const SegmentedControl: Story = {
  name: 'Composition / Segmented Control',
  parameters: {
    docs: {
      description: {
        story: 'A common usage pattern for mutually exclusive view or mode controls.',
      },
    },
  },
  render: () => (
    <ButtonGroup tone="neutral" variant="soft">
      <Button>Overview</Button>
      <Button>Details</Button>
      <Button>History</Button>
    </ButtonGroup>
  ),
}
