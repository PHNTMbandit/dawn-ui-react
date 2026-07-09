import { Input } from './input'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Controls the visual surface style of the input.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Adjusts the height, padding, and typography of the input.',
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'url', 'tel', 'color'],
      description: 'Native input type.',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A versatile field for text and color input with built-in validation styling.',
      description: {
        component:
          'The Input component is a foundational form control for entering text and selecting colors. It supports two visual variants (`primary`, `secondary`), built-in invalid styling via `aria-invalid`, and disabled states. Use it as a standalone field or inside higher-level form compositions.',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args: React.ComponentProps<typeof Input>) => <Input {...args} id="input" />,
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story: 'Use controls to test all variants, input types, and disabled states interactively.',
      },
    },
  },
}

export const Primary: Story = {
  name: 'Variant / Primary',
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default elevated surface style. Ideal for standard forms and settings pages.',
      },
    },
  },
}

export const Secondary: Story = {
  name: 'Variant / Secondary',
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Lower-emphasis surface style. Useful on already-raised or dense layouts.',
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
        story: 'Compact size for tight spaces or less critical inputs.',
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
        story: 'Default size with balanced padding and typography for general use.',
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
        story: 'Larger size for emphasis or touch targets, such as on mobile.',
      },
    },
  },
}

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    variant: 'primary',
    disabled: true,
    placeholder: 'Disabled input',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state blocks interaction and visually communicates non-editability.',
      },
    },
  },
}

export const Error: Story = {
  name: 'State / Invalid',
  render: (args) => (
    <form>
      <Input
        {...args}
        aria-invalid
        defaultValue="invalid@email"
        id="input-error"
        placeholder="Enter a valid email"
        type="email"
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Setting `aria-invalid` triggers the component error style. Pair this with validation messaging in your form.',
      },
    },
  },
}

export const Colour: Story = {
  name: 'Type / Color Picker',
  args: {
    type: 'color',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The color type uses a custom trigger UI while preserving native input behavior under the hood.',
      },
    },
  },
}

export const File: Story = {
  name: 'Type / File',
  render: () => (
    <div className="flex w-[720px] flex-col gap-sm">
      <label className="style-text-default-0 text-on-surface" htmlFor="file-upload">
        Upload file
      </label>
      <Input
        id="file-upload"
        type="file"
        multiple
        variant="secondary"
        maxFiles={5}
        maxFileSize={3000}
        clearFilesLabel="Clear selected files"
        filesSelectedLabel={(count) => `${count} files selected`}
        fileUploadButtonLabel="Browse"
        maxFileSizeErrorLabel={(fileName, maxFileSize) =>
          `File "${fileName}" exceeds the maximum size of ${maxFileSize}.`
        }
        maxFilesErrorLabel={(maxFiles) => `You can only upload up to ${maxFiles} files.`}
        placeholder="Upload up to 5 files, each with a max size of 2MB."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input configured for file selection with the secondary variant.',
      },
    },
  },
}

export const FormRow: Story = {
  name: 'Composition / Form Row',
  render: () => (
    <div className="flex w-[420px] flex-col gap-sm">
      <label className="style-text-default-0 text-on-surface" htmlFor="company-name">
        Company name
      </label>
      <Input id="company-name" placeholder="Acme Incorporated" variant="primary" />
      <p className="style-text-default--1 text-on-surface-variant">
        This name will be visible to workspace members.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A realistic single-field form pattern with label and helper text.',
      },
    },
  },
}

export const SearchField: Story = {
  name: 'Composition / Search Field',
  render: () => (
    <div className="w-[420px]">
      <Input placeholder="Search projects, users, or tags" type="search" variant="secondary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input configured for search interactions with the secondary variant.',
      },
    },
  },
}

export const PasswordField: Story = {
  name: 'Composition / Password Field',
  render: () => (
    <div className="flex w-[420px] flex-col gap-sm">
      <label className="style-text-default-0 text-on-surface" htmlFor="password">
        Password
      </label>
      <Input id="password" placeholder="Enter your password" type="password" variant="primary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input configured for password entry with the primary variant.',
      },
    },
  },
}

export const EmailField: Story = {
  name: 'Composition / Email Field',
  render: () => (
    <div className="flex w-[420px] flex-col gap-sm">
      <label className="style-text-default-0 text-on-surface" htmlFor="email">
        Email address
      </label>
      <Input id="email" placeholder="Enter your email" type="email" variant="primary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input configured for email entry with the primary variant.',
      },
    },
  },
}
