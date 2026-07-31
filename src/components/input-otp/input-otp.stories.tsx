import { useState } from 'react'
import { InputOTP } from './input-otp'
import { InputOtpSeparator } from './input-otp-separator'
import { InputOTPSlot } from './input-otp-slot'

import type { Meta, StoryObj } from '@storybook/react-vite'

/**
 * A one-time password input composed of individual character slots.
 *
 * ## Anatomy
 *
 * ```tsx
 * import { InputOTP, InputOTPSlot, InputOtpSeparator } from '@cartyx/ui'
 *
 * <InputOTP length={6}>
 *   <InputOTPSlot />
 *   <InputOTPSlot aria-label="Character 2 of 6" />
 *   <InputOTPSlot aria-label="Character 3 of 6" />
 *   <InputOtpSeparator />
 *   <InputOTPSlot aria-label="Character 4 of 6" />
 *   <InputOTPSlot aria-label="Character 5 of 6" />
 *   <InputOTPSlot aria-label="Character 6 of 6" />
 * </InputOTP>
 * ```
 *
 * ## Accessibility
 *
 * - The first input inherits the field label automatically
 * - Add `aria-label` to remaining inputs (e.g., "Character 2 of 6")
 * - Use `aria-describedby` when helper text should be announced
 */
export default {
  title: 'Components/Input OTP',
  component: InputOTP,
  subcomponents: { InputOTPSlot, InputOtpSeparator },
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: 'Number of OTP slots to render.',
      table: {
        defaultValue: { summary: '6' },
      },
    },
    validationType: {
      control: 'select',
      options: ['numeric', 'alphanumeric', 'none'],
      description: 'Restricts allowed input characters.',
      table: {
        defaultValue: { summary: 'numeric' },
      },
    },
    mask: {
      control: 'boolean',
      description: 'Obscures entered characters like a password field.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    autoSubmit: {
      control: 'boolean',
      description: 'Submits the owning form automatically when all slots are filled.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables input and interaction for all slots.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes all slots read-only.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required for form validation.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A one-time password input composed of individual character slots.',
      description: {
        component:
          'The Input OTP component provides a segmented input experience for collecting one-time passcodes. It supports numeric, alphanumeric, or custom validation, masked entry for sensitive codes, grouped layouts with separators, and auto-submission on completion.',
      },
    },
  },
  args: {
    length: 6,
    validationType: 'numeric',
    mask: false,
    autoSubmit: false,
    disabled: false,
    readOnly: false,
    required: false,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPSlot />
      <InputOTPSlot aria-label="Character 2" />
      <InputOTPSlot aria-label="Character 3" />
      <InputOTPSlot aria-label="Character 4" />
      <InputOTPSlot aria-label="Character 5" />
      <InputOTPSlot aria-label="Character 6" />
    </InputOTP>
  ),
} satisfies Meta<typeof InputOTP>

type Story = StoryObj<typeof InputOTP>

// =============================================================================
// PLAYGROUND
// =============================================================================

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for tuning all OTP field props via controls.',
      },
    },
  },
}

// =============================================================================
// USAGE
// =============================================================================

export const Default: Story = {
  name: 'Usage / Default',
  args: {
    length: 6,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Basic 6-digit numeric OTP input. The most common configuration for verification codes.',
      },
    },
  },
}

// =============================================================================
// LENGTH
// =============================================================================

export const FourDigits: Story = {
  name: 'Length / Four Digits',
  args: {
    length: 4,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPSlot />
      <InputOTPSlot aria-label="Character 2 of 4" />
      <InputOTPSlot aria-label="Character 3 of 4" />
      <InputOTPSlot aria-label="Character 4 of 4" />
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common configuration for PIN codes and short verification sequences.',
      },
    },
  },
}

export const SixDigits: Story = {
  name: 'Length / Six Digits',
  args: {
    length: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard setup for SMS and authenticator-based one-time passcodes.',
      },
    },
  },
}

export const EightDigits: Story = {
  name: 'Length / Eight Digits',
  args: {
    length: 8,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPSlot />
      <InputOTPSlot aria-label="Character 2 of 8" />
      <InputOTPSlot aria-label="Character 3 of 8" />
      <InputOTPSlot aria-label="Character 4 of 8" />
      <InputOtpSeparator />
      <InputOTPSlot aria-label="Character 5 of 8" />
      <InputOTPSlot aria-label="Character 6 of 8" />
      <InputOTPSlot aria-label="Character 7 of 8" />
      <InputOTPSlot aria-label="Character 8 of 8" />
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Extended configuration for longer recovery codes or license keys.',
      },
    },
  },
}

// =============================================================================
// VALIDATION TYPE
// =============================================================================

export const Numeric: Story = {
  name: 'Validation / Numeric',
  args: {
    length: 6,
    validationType: 'numeric',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default validation that only accepts digits 0-9. Ideal for SMS codes and PINs.',
      },
    },
  },
}

export const Alphanumeric: Story = {
  name: 'Validation / Alphanumeric',
  args: {
    length: 6,
    validationType: 'alphanumeric',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Accepts letters and numbers. Use for recovery codes, backup codes, or invite codes like `A7C9XZ`.',
      },
    },
  },
}

// =============================================================================
// GROUPED LAYOUTS
// =============================================================================

export const GroupedThreeThree: Story = {
  name: 'Layout / Grouped 3-3',
  args: {
    length: 6,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPSlot />
      <InputOTPSlot aria-label="Character 2 of 6" />
      <InputOTPSlot aria-label="Character 3 of 6" />
      <InputOtpSeparator />
      <InputOTPSlot aria-label="Character 4 of 6" />
      <InputOTPSlot aria-label="Character 5 of 6" />
      <InputOTPSlot aria-label="Character 6 of 6" />
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Visual grouping with separator for easier reading (e.g., `123-456`). The separator is accessible to screen readers.',
      },
    },
  },
}

export const GroupedTwoTwoTwo: Story = {
  name: 'Layout / Grouped 2-2-2',
  args: {
    length: 6,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTPSlot />
      <InputOTPSlot aria-label="Character 2 of 6" />
      <InputOtpSeparator />
      <InputOTPSlot aria-label="Character 3 of 6" />
      <InputOTPSlot aria-label="Character 4 of 6" />
      <InputOtpSeparator />
      <InputOTPSlot aria-label="Character 5 of 6" />
      <InputOTPSlot aria-label="Character 6 of 6" />
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alternative grouping pattern showing code in three pairs.',
      },
    },
  },
}

// =============================================================================
// MASKED
// =============================================================================

export const Masked: Story = {
  name: 'Security / Masked',
  args: {
    length: 6,
    mask: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Obscures entered characters like a password field. Use for sensitive codes on shared screens.',
      },
    },
  },
}

// =============================================================================
// STATES
// =============================================================================

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    length: 6,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use disabled state while waiting for a code resend or when the service is unavailable.',
      },
    },
  },
}

export const ReadOnly: Story = {
  name: 'State / Read Only',
  args: {
    length: 6,
    readOnly: true,
    value: '123456',
  },
  parameters: {
    docs: {
      description: {
        story: 'Display a code that cannot be modified, useful for confirmation screens.',
      },
    },
  },
}

// =============================================================================
// CALLBACKS
// =============================================================================

export const OnValueComplete: Story = {
  name: 'Behavior / On Complete',
  args: {
    length: 6,
  },
  render: function OnValueCompleteStory(args) {
    const [message, setMessage] = useState('')

    return (
      <div className="flex flex-col gap-sm">
        <InputOTP
          {...args}
          onValueComplete={(value: string) => setMessage(`Code submitted: ${value}`)}
        >
          <InputOTPSlot />
          <InputOTPSlot aria-label="Character 2 of 6" />
          <InputOTPSlot aria-label="Character 3 of 6" />
          <InputOtpSeparator />
          <InputOTPSlot aria-label="Character 4 of 6" />
          <InputOTPSlot aria-label="Character 5 of 6" />
          <InputOTPSlot aria-label="Character 6 of 6" />
        </InputOTP>
        {message && <p className="style-text-default--1 text-success-default">{message}</p>}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `onValueComplete` to react when all slots are filled. Great for auto-verification without a submit button.',
      },
    },
  },
}

export const ControlledValue: Story = {
  name: 'Behavior / Controlled',
  args: {
    length: 6,
  },
  render: function ControlledStory(args) {
    const [value, setValue] = useState('')

    return (
      <div className="flex flex-col gap-sm">
        <InputOTP {...args} value={value} onValueChange={setValue}>
          <InputOTPSlot />
          <InputOTPSlot aria-label="Character 2 of 6" />
          <InputOTPSlot aria-label="Character 3 of 6" />
          <InputOtpSeparator />
          <InputOTPSlot aria-label="Character 4 of 6" />
          <InputOTPSlot aria-label="Character 5 of 6" />
          <InputOTPSlot aria-label="Character 6 of 6" />
        </InputOTP>
        <div className="flex gap-xs">
          <span className="style-text-default--1 text-on-surface-variant">Current value:</span>
          <code className="rounded-md bg-surface px-2xs style-text-default--1 text-on-surface">
            {value || '(empty)'}
          </code>
        </div>
        <button
          type="button"
          onClick={() => setValue('')}
          className="rounded-md bg-surface px-sm py-xs style-text-default--1 text-on-surface hover:bg-surface-3"
        >
          Clear
        </button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `value` and `onValueChange` for controlled input. Useful when you need to programmatically clear or set the code.',
      },
    },
  },
}

// =============================================================================
// COMPOSITION
// =============================================================================

export const VerificationForm: Story = {
  name: 'Composition / Verification Form',
  args: {
    length: 6,
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-sm">
      <label htmlFor="verification-code" className="style-text-strong-0 text-on-surface">
        Verification code
      </label>
      <InputOTP id="verification-code" aria-describedby="verification-hint" {...args}>
        <InputOTPSlot />
        <InputOTPSlot aria-label="Character 2 of 6" />
        <InputOTPSlot aria-label="Character 3 of 6" />
        <InputOtpSeparator />
        <InputOTPSlot aria-label="Character 4 of 6" />
        <InputOTPSlot aria-label="Character 5 of 6" />
        <InputOTPSlot aria-label="Character 6 of 6" />
      </InputOTP>
      <p id="verification-hint" className="style-text-default--1 text-on-surface-variant">
        Enter the 6-digit code we sent to your email. The code expires in 10 minutes.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complete verification form with proper labeling and description. The `htmlFor` on label and `aria-describedby` ensure full accessibility.',
      },
    },
  },
}

export const RecoveryCode: Story = {
  name: 'Composition / Recovery Code',
  args: {
    length: 8,
    validationType: 'alphanumeric',
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-sm">
      <label htmlFor="recovery-code" className="style-text-strong-0 text-on-surface">
        Recovery code
      </label>
      <InputOTP id="recovery-code" aria-describedby="recovery-hint" {...args}>
        <InputOTPSlot />
        <InputOTPSlot aria-label="Character 2 of 8" />
        <InputOTPSlot aria-label="Character 3 of 8" />
        <InputOTPSlot aria-label="Character 4 of 8" />
        <InputOtpSeparator />
        <InputOTPSlot aria-label="Character 5 of 8" />
        <InputOTPSlot aria-label="Character 6 of 8" />
        <InputOTPSlot aria-label="Character 7 of 8" />
        <InputOTPSlot aria-label="Character 8 of 8" />
      </InputOTP>
      <p id="recovery-hint" className="style-text-default--1 text-on-surface-variant">
        Enter one of your backup recovery codes (e.g., A7C9-XZ4B).
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alphanumeric recovery code entry with 8 characters grouped in two sets of 4.',
      },
    },
  },
}

export const SecureAccessCode: Story = {
  name: 'Composition / Secure Access',
  args: {
    length: 6,
    mask: true,
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-sm">
      <label htmlFor="secure-code" className="style-text-strong-0 text-on-surface">
        Access code
      </label>
      <InputOTP id="secure-code" aria-describedby="secure-hint" {...args}>
        <InputOTPSlot />
        <InputOTPSlot aria-label="Character 2 of 6" />
        <InputOTPSlot aria-label="Character 3 of 6" />
        <InputOtpSeparator />
        <InputOTPSlot aria-label="Character 4 of 6" />
        <InputOTPSlot aria-label="Character 5 of 6" />
        <InputOTPSlot aria-label="Character 6 of 6" />
      </InputOTP>
      <p id="secure-hint" className="style-text-default--1 text-on-surface-variant">
        Use mask to obscure the code on shared screens.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Masked entry for sensitive codes in shared or public environments.',
      },
    },
  },
}
