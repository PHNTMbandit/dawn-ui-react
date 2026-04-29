import { InputOTP } from './input-otp'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Input OTP',
  component: InputOTP,
  argTypes: {
    maxLength: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: 'Number of OTP slots rendered by the component.',
      table: {
        defaultValue: { summary: '4' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder characters shown when slots are empty.',
      table: {
        defaultValue: { summary: '1234' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables input and interaction for all slots.',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A segmented input for entering one-time passcodes and verification codes.',
      description: {
        component:
          'The Input OTP component renders a sequence of input slots that collect a one-time passcode. It is ideal for authentication, email verification, and high-trust confirmation flows. Configure slot count with `maxLength`, customize placeholders with `placeholder`, and disable interaction when verification is unavailable.',
      },
    },
  },
  args: {
    maxLength: 4,
    placeholder: '1234',
    disabled: false,
  },
  render: (args) => <InputOTP className="w-fit" {...args} />,
} satisfies Meta<typeof InputOTP>

type Story = StoryObj<typeof InputOTP>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for tuning length, placeholder, and disabled state via controls.',
      },
    },
  },
}

export const FourDigits: Story = {
  name: 'Length / Four Digits',
  args: {
    maxLength: 4,
    placeholder: '1234',
  },
  parameters: {
    docs: {
      description: {
        story: 'Most common configuration for PIN and short verification code entry.',
      },
    },
  },
}

export const SixDigits: Story = {
  name: 'Length / Six Digits',
  args: {
    maxLength: 6,
    placeholder: '123456',
  },
  parameters: {
    docs: {
      description: {
        story: 'Typical setup for SMS and authenticator-based one-time passcodes.',
      },
    },
  },
}

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use disabled state while waiting for a code resend or API availability.',
      },
    },
  },
}

export const InVerificationForm: Story = {
  name: 'Composition / Verification Form',
  args: {
    maxLength: 6,
    placeholder: '------',
  },
  render: (args) => (
    <div className="flex w-[1000px] flex-col items-center justify-center gap-xs">
      <span className="style-text-default--1 text-on-surface">Enter your verification code</span>
      <InputOTP {...args} />
      <p className="style-text-default--1 text-on-surface-variant">
        We sent a 6-digit code to your email. The code expires in 10 minutes.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical composition for auth screens with label and supporting helper text.',
      },
    },
  },
}
