import { BowlFoodIcon, CaretUpDownIcon } from '@phosphor-icons/react'
import { Select } from './select'
import { SelectGroup } from './select-group'
import { SelectGroupLabel } from './select-group-label'
import { SelectIcon } from './select-icon'
import { SelectItem } from './select-item'
import { SelectList } from './select-list'
import { SelectPopup } from './select-popup'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'

import type { SelectProps, SelectTriggerProps } from './select.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

const VARIANTS = ['primary', 'secondary', 'ghost'] as const
const SIZES = ['small', 'medium', 'large'] as const

type SelectVariant = NonNullable<SelectTriggerProps['variant']>
type SelectSize = NonNullable<SelectTriggerProps['size']>
type SelectStoryArgs = Omit<SelectProps, 'defaultValue'> & {
  defaultValue?: string | string[]
  variant?: SelectVariant
  size?: SelectSize
}

const apples = [
  { label: 'Gala', value: 'gala' },
  { label: 'Fuji', value: 'fuji' },
  { label: 'Honeycrisp', value: 'honeycrisp' },
  { label: 'Granny Smith', value: 'granny-smith' },
  { label: 'Pink Lady', value: 'pink-lady' },
  { label: 'Red Delicious', value: 'red-delicious' },
  { label: 'Golden Delicious', value: 'golden-delicious' },
  { label: 'Braeburn', value: 'braeburn' },
  { label: 'McIntosh', value: 'mcintosh' },
  { label: 'Cortland', value: 'cortland' },
  { label: 'Empire', value: 'empire' },
]

const groupedProduce = [
  {
    value: 'Fruits',
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'mango', label: 'Mango' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'grape', label: 'Grape' },
      { value: 'orange', label: 'Orange' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'watermelon', label: 'Watermelon' },
    ],
  },
  {
    value: 'Vegetables',
    items: [
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'carrot', label: 'Carrot' },
      { value: 'cauliflower', label: 'Cauliflower' },
      { value: 'cucumber', label: 'Cucumber' },
      { value: 'kale', label: 'Kale' },
      { value: 'pepper', label: 'Bell pepper' },
      { value: 'spinach', label: 'Spinach' },
      { value: 'zucchini', label: 'Zucchini' },
    ],
  },
]

const AppleSelect = ({
  defaultValue,
  multiple = false,
  variant = 'primary',
  size = 'medium',
  placeholder = 'Select an apple',
}: {
  defaultValue?: string | string[]
  multiple?: boolean
  variant?: SelectVariant
  size?: SelectSize
  placeholder?: string
}) => (
  <Select defaultValue={defaultValue} multiple={multiple}>
    <SelectTrigger variant={variant} size={size}>
      <SelectValue placeholder={placeholder}>
        {(value: keyof typeof apples) => (
          <>
            <BowlFoodIcon />
            {apples.find((apple) => apple.value === value)?.label || placeholder}
          </>
        )}
      </SelectValue>
      <SelectIcon>
        <CaretUpDownIcon weight="bold" />
      </SelectIcon>
    </SelectTrigger>
    <SelectPopup>
      <SelectList>
        {apples.map(({ label, value }) => (
          <SelectItem key={label} value={value}>
            <BowlFoodIcon />
            {label}
          </SelectItem>
        ))}
      </SelectList>
    </SelectPopup>
  </Select>
)

const GroupedProduceSelect = ({ multiple = false }: { multiple?: boolean }) => (
  <Select multiple={multiple}>
    <SelectTrigger>
      <SelectValue placeholder="Select produce" />
      <SelectIcon>
        <CaretUpDownIcon weight="bold" />
      </SelectIcon>
    </SelectTrigger>
    <SelectPopup alignItemWithTrigger={false} sideOffset={8}>
      <SelectList>
        {groupedProduce.map((group) => (
          <SelectGroup key={group.value}>
            <SelectGroupLabel>{group.value}</SelectGroupLabel>
            {group.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectList>
    </SelectPopup>
  </Select>
)

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectIcon,
    SelectItem,
    SelectList,
    SelectPopup,
    SelectTrigger,
    SelectValue,
  },
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allows selecting more than one option from the list.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    variant: {
      control: 'radio',
      options: VARIANTS,
      description: 'Controls the trigger visual style.',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'radio',
      options: SIZES,
      description: 'Controls the trigger height and spacing.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    defaultValue: {
      control: 'object',
      description: 'Initial selected value or values for uncontrolled selects.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'A composed selection control for choosing one or more options from a popup list.',
      description: {
        component:
          'The Select component presents a controlled or uncontrolled choice list inside a popup. It supports single and multiple selection, grouped options, trigger variants (`default`, `secondary`), trigger sizes (`small`, `medium`, `large`), custom trigger/value composition, and scrollable lists for longer datasets.',
      },
    },
  },
  args: {
    multiple: false,
  },
  render: (args) => {
    const { defaultValue, multiple, variant, size } = args

    return (
      <AppleSelect defaultValue={defaultValue} multiple={multiple} variant={variant} size={size} />
    )
  },
} satisfies Meta<SelectStoryArgs>

type Story = StoryObj<SelectStoryArgs>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Use the controls panel to explore single or multiple selection with the base apple dataset.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Selection / Single',
  parameters: {
    docs: {
      description: {
        story: 'Default single-select usage for choosing one option from a short list.',
      },
    },
  },
}

export const Multiple: Story = {
  name: 'Selection / Multiple',
  args: {
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Enables multi-select behavior for tag-like or filter-style selection flows.',
      },
    },
  },
}

export const VariantPrimary: Story = {
  name: 'Variant / Primary',
  parameters: {
    docs: {
      description: {
        story: 'Primary trigger style for standard forms and data-entry flows.',
      },
    },
  },
  render: () => <AppleSelect variant="primary" />,
}

export const VariantSecondary: Story = {
  name: 'Variant / Secondary',
  parameters: {
    docs: {
      description: {
        story: 'Secondary trigger style for lower-emphasis or supportive selection inputs.',
      },
    },
  },
  render: () => <AppleSelect variant="secondary" />,
}

export const VariantGhost: Story = {
  name: 'Variant / Ghost',
  parameters: {
    docs: {
      description: {
        story:
          'Ghost trigger style for minimal or inline selection controls, often used in toolbars or dense UIs.',
      },
    },
  },
  render: () => <AppleSelect variant="ghost" />,
}

export const SizeSmall: Story = {
  name: 'Size / Small',
  parameters: {
    docs: {
      description: {
        story: 'Compact trigger size suited to dense layouts and table filters.',
      },
    },
  },
  render: () => <AppleSelect size="small" />,
}

export const SizeMedium: Story = {
  name: 'Size / Medium',
  parameters: {
    docs: {
      description: {
        story: 'Default trigger size for most form and settings interfaces.',
      },
    },
  },
  render: () => <AppleSelect size="medium" />,
}

export const SizeLarge: Story = {
  name: 'Size / Large',
  parameters: {
    docs: {
      description: {
        story: 'Larger trigger size for touch-friendly forms and prominent controls.',
      },
    },
  },
  render: () => <AppleSelect size="large" />,
}

export const Grouped: Story = {
  name: 'Composition / Grouped Options',
  parameters: {
    docs: {
      description: {
        story: 'Grouped lists help organize longer datasets by category or hierarchy.',
      },
    },
  },
  render: () => <GroupedProduceSelect />,
}

export const GroupedMultiple: Story = {
  name: 'Composition / Grouped Multiple',
  parameters: {
    docs: {
      description: {
        story:
          'Combines grouped organization with multiple selection for richer filter or settings UIs.',
      },
    },
  },
  render: () => <GroupedProduceSelect multiple />,
}

export const WithDefaultValue: Story = {
  name: 'State / Default Value',
  args: {
    defaultValue: 'honeycrisp',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `defaultValue` to initialize an uncontrolled select with a persisted choice.',
      },
    },
  },
}

export const WithDefaultMultipleValues: Story = {
  name: 'State / Default Multiple Values',
  args: {
    multiple: true,
    defaultValue: ['fuji', 'pink-lady'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Initializes a multi-select with more than one preselected option.',
      },
    },
  },
}
