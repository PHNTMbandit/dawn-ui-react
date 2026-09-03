import { PasswordIcon, UserIcon } from '@phosphor-icons/react'
import { expect, waitFor } from 'storybook/test'
import { z } from 'zod'
import { AlertTitle } from '../alert/alert-title'
import { Field } from '../field'
import { InputGroupAddon } from '../input-group'
import { SelectGroup, SelectItem } from '../select'
import { Form } from './form'
import { useAppForm } from './form-context'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Form',
  parameters: {
    docs: {
      subtitle: 'Provides context and state management for form fields.',
      description: {
        component:
          'The Form component is a container that manages the state and behavior of form fields. It provides context to its child components, allowing them to access and update form data seamlessly. The Form component handles validation, submission, and other form-related functionalities, making it easier to build complex forms with consistent behavior.',
      },
    },
  },
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof Form>

export const CustomErrors: Story = {
  render: () => {
    const form = useAppForm({
      defaultValues: {
        username: '',
        email: '',
      },
      validators: {
        onChange: ({ value }) => ({
          fields: {
            username: value.username.length < 3 ? 'Username too short' : undefined,
            email: !value.email.includes('@') ? 'Invalid email' : undefined,
          },
        }),
      },
    })

    return (
      <Form action={() => form.handleSubmit()} className="w-[400px]">
        <form.AppForm>
          <form.FormErrors />
          <form.AppField name="username">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Username" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.AppField name="email">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Email" type="email" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
  play: async ({ userEvent, canvas }) => {
    await userEvent.type(canvas.getByPlaceholderText('Username'), 'a')

    await waitFor(async () => {
      await expect(
        canvas.getByText('Username too short', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
      await expect(
        canvas.getByText('Invalid email', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
    })
  },
}

export const FieldInput: Story = {
  render: () => {
    const schema = z
      .object({
        firstName: z.string().min(2, 'First name must be at least 2 characters'),
        lastName: z.string().min(2, 'Last name must be at least 2 characters'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
      })
      .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword'],
          })
        }
      })

    const form = useAppForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
      validators: {
        onSubmit: schema,
      },
      onSubmit: async () => {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      },
    })

    return (
      <Form action={() => form.handleSubmit()} className="w-[400px]">
        <form.AppForm>
          <form.FormErrors />
          <form.FormSet>
            <form.FormSetHeading>Personal Information</form.FormSetHeading>
            <form.FormSetContent>
              <form.AppField name="firstName">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldLabel showRequired />
                    <field.FieldInput required placeholder="First Name" />
                    <field.FieldErrors />
                    <field.FieldDescription>Please enter your first name.</field.FieldDescription>
                  </field.FieldSet>
                )}
              </form.AppField>
              <form.AppField name="lastName">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldLabel showRequired />
                    <field.FieldInput placeholder="Last Name" />
                    <field.FieldErrors />
                    <field.FieldDescription>Please enter your last name.</field.FieldDescription>
                  </field.FieldSet>
                )}
              </form.AppField>
            </form.FormSetContent>
          </form.FormSet>
          <form.FormSet>
            <form.FormSetHeading>Account Information</form.FormSetHeading>
            <form.FormSetContent>
              <form.AppField name="password">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldLabel />
                    <field.FieldInput placeholder="Password" type="password" />
                    <field.FieldErrors />
                    <field.FieldDescription>
                      Your password must be at least 6 characters.
                    </field.FieldDescription>
                  </field.FieldSet>
                )}
              </form.AppField>
              <form.AppField
                name="confirmPassword"
                validators={{
                  onChangeListenTo: ['password'],
                  onChange: ({ value, fieldApi }) => {
                    const password = fieldApi.form.getFieldValue('password')
                    if (value && value !== password) {
                      return new Error('Passwords do not match')
                    }
                  },
                }}
              >
                {(field) => (
                  <field.FieldSet>
                    <field.FieldLabel />
                    <field.FieldInput placeholder="Confirm Password" type="password" />
                    <field.FieldErrors />
                    <field.FieldDescription>Please confirm your password.</field.FieldDescription>
                  </field.FieldSet>
                )}
              </form.AppField>
            </form.FormSetContent>
          </form.FormSet>
          <form.FormFooter>
            <form.FormReset tone="error" variant="ghost">
              Reset
            </form.FormReset>
            <form.FormSubmit>Submit</form.FormSubmit>
          </form.FormFooter>
        </form.AppForm>
      </Form>
    )
  },
}

export const Compact: Story = {
  render: () => {
    const schema = z
      .object({
        firstName: z.string().min(2, 'First name must be at least 2 characters'),
        lastName: z.string().min(2, 'Last name must be at least 2 characters'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
      })
      .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword'],
          })
        }
      })

    const form = useAppForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
      validators: {
        onSubmit: schema,
      },
      onSubmit: async () => {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      },
    })

    return (
      <Form action={() => form.handleSubmit()} className="w-[400px]">
        <form.AppForm>
          <form.FormErrors />
          <form.FormSet>
            <form.FormSetHeading>Personal Information</form.FormSetHeading>
            <form.FormSetContent>
              <form.AppField name="firstName">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldRow>
                      <field.FieldLabel variant={'secondary'} />
                      <field.FieldInput placeholder="First Name" />
                    </field.FieldRow>
                    <field.FieldErrors />
                  </field.FieldSet>
                )}
              </form.AppField>
              <form.AppField name="lastName">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldRow>
                      <field.FieldLabel variant="secondary" />
                      <field.FieldInput placeholder="Last Name" />
                    </field.FieldRow>
                    <field.FieldErrors />
                  </field.FieldSet>
                )}
              </form.AppField>
            </form.FormSetContent>
          </form.FormSet>
          <form.FormSet>
            <form.FormSetHeading>Account Information</form.FormSetHeading>
            <form.FormSetContent>
              <form.AppField name="password">
                {(field) => (
                  <field.FieldSet>
                    <field.FieldRow>
                      <field.FieldLabel variant={'secondary'} />
                      <field.FieldInput placeholder="Password" type="password" />
                    </field.FieldRow>
                    <field.FieldErrors />
                  </field.FieldSet>
                )}
              </form.AppField>
              <form.AppField
                name="confirmPassword"
                validators={{
                  onChangeListenTo: ['password'],
                  onChange: ({ value, fieldApi }) => {
                    const password = fieldApi.form.getFieldValue('password')
                    if (value && value !== password) {
                      return new Error('Passwords do not match')
                    }
                  },
                }}
              >
                {(field) => (
                  <field.FieldSet>
                    <field.FieldRow>
                      <field.FieldLabel variant={'secondary'} />
                      <field.FieldInput placeholder="Confirm Password" type="password" />
                    </field.FieldRow>
                    <field.FieldErrors />
                  </field.FieldSet>
                )}
              </form.AppField>
            </form.FormSetContent>
          </form.FormSet>
          <form.FormFooter>
            <form.FormReset tone="error" variant="ghost">
              Reset
            </form.FormReset>
            <form.FormSubmit>Submit</form.FormSubmit>
          </form.FormFooter>
        </form.AppForm>
      </Form>
    )
  },
}

export const FieldInputGroup: Story = {
  render: () => {
    const schema = z
      .object({
        firstName: z.string().min(2, 'First name must be at least 2 characters'),
        lastName: z.string().min(2, 'Last name must be at least 2 characters'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
      })
      .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: 'custom',
            message: 'Passwords do not match',
            path: ['confirmPassword'],
          })
        }
      })

    const form = useAppForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
      validators: {
        onSubmit: schema,
      },
      onSubmit: async () => {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      },
    })

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.FormErrors />
          <form.AppField name="firstName">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInputGroup>
                  <InputGroupAddon>
                    <UserIcon weight="bold" />
                  </InputGroupAddon>
                  <field.FieldInputGroupInput placeholder="First Name" />
                </field.FieldInputGroup>
                <field.FieldErrors />
                <field.FieldDescription>Please enter your first name.</field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.AppField name="lastName">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInputGroup>
                  <InputGroupAddon>
                    <UserIcon weight="bold" />
                  </InputGroupAddon>
                  <field.FieldInputGroupInput placeholder="Last Name" />
                </field.FieldInputGroup>
                <field.FieldErrors />
                <field.FieldDescription>Please enter your last name.</field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.AppField name="password">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInputGroup>
                  <InputGroupAddon>
                    <PasswordIcon weight="bold" />
                  </InputGroupAddon>
                  <field.FieldInputGroupInput placeholder="Password" type="password" />
                </field.FieldInputGroup>
                <field.FieldErrors />
                <field.FieldDescription>
                  Your password must be at least 6 characters.
                </field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.AppField
            name="confirmPassword"
            validators={{
              onChangeListenTo: ['password'],
              onChange: ({ value, fieldApi }) => {
                const password = fieldApi.form.getFieldValue('password')
                if (value && value !== password) {
                  return new Error('Passwords do not match')
                }
              },
            }}
          >
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInputGroup>
                  <InputGroupAddon>
                    <PasswordIcon weight="bold" />
                  </InputGroupAddon>
                  <field.FieldInputGroupInput placeholder="Confirm Password" type="password" />
                </field.FieldInputGroup>
                <field.FieldErrors />
                <field.FieldDescription>Please confirm your password.</field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.FormReset tone="error" variant="ghost">
            Reset
          </form.FormReset>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
}

export const FieldSlider: Story = {
  render: () => {
    const form = useAppForm({
      defaultValues: {
        volume: 50,
      },
    })

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.AppField name="volume">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldSlider min={0} max={100} />
                <field.FieldErrors />
                <field.FieldDescription>Adjust the volume level.</field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.FormReset tone="error" variant="ghost">
            Reset
          </form.FormReset>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
}

export const FieldSelect: Story = {
  render: () => {
    const form = useAppForm({
      defaultValues: {
        country: 'ca',
      },
      onSubmit: async (values) => {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve()
          }, 2000)
        })
        alert(`You selected: ${values.value.country}`)
      },
    })
    const items = [
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'United Kingdom', value: 'uk' },
    ]

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.AppField name="country">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldSelect items={items}>
                  <SelectGroup>
                    {items.map(({ label, value }) => (
                      <SelectItem key={label} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </field.FieldSelect>
                <field.FieldErrors />
                <field.FieldDescription>Select your country.</field.FieldDescription>
              </Field>
            )}
          </form.AppField>
          <form.FormReset tone="error" variant="ghost">
            Reset
          </form.FormReset>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
}

export const SubmitError: Story = {
  render: () => {
    const schema = z.object({
      username: z.string().min(2, 'Username must be at least 2 characters'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
    })

    const form = useAppForm({
      defaultValues: {
        username: '',
        password: '',
      },
      validators: {
        onSubmit: schema,
        onSubmitAsync: async () => {
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve()
            }, 1000)
          })

          return 'Invalid username or password'
        },
      },
    })

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.FormErrors>
            <AlertTitle>There were some problems with your submission</AlertTitle>
          </form.FormErrors>
          <form.AppField name="username">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Username" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>

          <form.AppField name="password">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Password" type="password" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.FormReset tone="error" variant="ghost">
            Reset
          </form.FormReset>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
  play: async ({ userEvent, canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Submit' }))

    await waitFor(async () => {
      await expect(
        canvas.getByText('Username must be at least 2 characters', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
      await expect(
        canvas.getByText('Password must be at least 6 characters', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
    })
  },
}

export const SubmitHandlerError: Story = {
  render: () => {
    const schema = z.object({
      username: z.string().min(2, 'Username must be at least 2 characters'),
      password: z.string().min(6, 'Password must be at least 6 characters'),
    })

    const form = useAppForm({
      defaultValues: {
        username: '',
        password: '',
      },
      validators: {
        onSubmit: schema,
      },
      onSubmit: async ({ formApi }) => {
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 500)
        })

        const error = 'Invalid username or password'
        formApi.setErrorMap({
          onSubmit: {
            form: error,
            fields: {},
          },
        })

        return error
      },
    })

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.FormErrors>
            <AlertTitle>There were some problems with your submission</AlertTitle>
          </form.FormErrors>
          <form.AppField name="username">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Username" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.AppField name="password">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput placeholder="Password" type="password" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    )
  },
  play: async ({ userEvent, canvas }) => {
    const submit = canvas.getByRole('button', { name: 'Submit' })

    await userEvent.click(submit)

    await waitFor(async () => {
      await expect(
        canvas.getByText('Username must be at least 2 characters', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
      await expect(
        canvas.getByText('Password must be at least 6 characters', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
    })

    await userEvent.type(canvas.getByPlaceholderText('Username'), 'demo')
    await userEvent.type(canvas.getByPlaceholderText('Password'), 'password')
    await expect(submit).toBeEnabled()
    await userEvent.click(submit)

    await waitFor(async () => {
      await expect(
        canvas.getByText('Invalid username or password', {
          selector: '[data-slot="alert-description"] li',
        }),
      ).toBeVisible()
    })
  },
}
