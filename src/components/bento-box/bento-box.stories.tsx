import { faker } from '@faker-js/faker'
import {
  PulseIcon,
  TargetIcon,
  TrendDownIcon,
  TrendUpIcon,
  UsersThreeIcon,
} from '@phosphor-icons/react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Badge } from '../badge'
import { Button } from '../button'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartTooltipIndicator,
  ChartTooltipLabel,
  ChartTooltipName,
  ChartTooltipPayload,
  ChartTooltipValue,
} from '../chart'
import { BentoBox } from './bento-box'
import { BentoBoxAction } from './bento-box-action'
import { BentoBoxContent } from './bento-box-content'
import { BentoBoxDescription } from './bento-box-description'
import { BentoBoxFooter } from './bento-box-footer'
import { BentoBoxHeader } from './bento-box-header'
import { BentoBoxTitle } from './bento-box-title'

import type { ChartConfig } from '../chart'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Bento Box',
  component: BentoBox,
  args: {
    size: 'medium',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Sets the size of the bento box, affecting padding and spacing.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A flexible container that organizes content into a visually appealing layout.',
      description: {
        component:
          'The Bento Box component is a versatile container that allows for the organization of content into a structured and visually appealing layout. It provides a clean and modern design, making it suitable for various use cases, such as dashboards, cards, or any scenario where content needs to be presented in a compact and organized manner.',
      },
    },
  },
  render: (args) => (
    <div className="w-[32rem]">
      <BentoBox {...args}>
        <BentoBoxHeader>
          <BentoBoxTitle>Cloud Storage</BentoBoxTitle>
          <BentoBoxDescription>
            You have used 42 GB of your 100 GB plan. Upgrade any time to unlock more space and
            longer file retention.
          </BentoBoxDescription>
          <BentoBoxAction>
            <Button variant="ghost" tone="neutral">
              Manage
            </Button>
          </BentoBoxAction>
        </BentoBoxHeader>
        <BentoBoxContent>
          <p>
            Files sync automatically across every device on your account. Recent uploads appear here
            as soon as they finish processing.
          </p>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
} satisfies Meta<typeof BentoBox>

type Story = StoryObj<typeof BentoBox>

/**
 * The default composition: a header with a title, description, and action, followed by content.
 * Use the controls to experiment with the container props.
 */
export const Playground: Story = {}

/**
 * The bento box is content-agnostic. When you only need to present a block of content you can
 * drop the header entirely and rely on `BentoBoxContent` for spacing and layout.
 */
export const ContentOnly: Story = {
  name: 'Content Only',
  render: (args) => (
    <div className="w-[32rem]">
      <BentoBox {...args}>
        <BentoBoxContent>
          <p>
            “The best way to predict the future is to invent it.” Drop a quote, a callout, or a
            short note in here when a heading would only get in the way.
          </p>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
}

/**
 * A common dashboard use case: a compact tile that surfaces a single key metric. The action slot
 * can hold a filter, a menu trigger, or a link to a detailed view.
 */
export const StatCard: Story = {
  name: 'Stat / Metric Card',
  render: (args) => (
    <div className="w-[24rem]">
      <BentoBox {...args}>
        <BentoBoxHeader>
          <BentoBoxTitle>Monthly Revenue</BentoBoxTitle>
          <BentoBoxDescription>Compared to last month</BentoBoxDescription>
          <BentoBoxAction>
            <Button variant="ghost" tone="neutral" size="small">
              View report
            </Button>
          </BentoBoxAction>
        </BentoBoxHeader>
        <BentoBoxContent>
          <div className="flex items-baseline gap-2xs">
            <span className="style-text-strong-3">$48,120</span>
            <span className="style-text-default--1 text-success-default">+12.4%</span>
          </div>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
}

/**
 * The content area grows to fill the available space, which makes the bento box a natural host for
 * charts, sparklines, or any data visualization.
 */
export const WithVisualization: Story = {
  name: 'With Visualization',
  render: (args) => (
    <div className="h-[20rem] w-[32rem]">
      <BentoBox {...args}>
        <BentoBoxHeader>
          <BentoBoxTitle>Active Users</BentoBoxTitle>
          <BentoBoxDescription>Sessions per day over the last week</BentoBoxDescription>
          <BentoBoxAction>
            <Button variant="ghost" tone="neutral" size="small">
              Export
            </Button>
          </BentoBoxAction>
        </BentoBoxHeader>
        <BentoBoxContent>
          <div className="flex h-full items-end gap-2xs">
            {[40, 65, 50, 80, 60, 95, 72].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-brand-default"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
}

/**
 * A media-forward card. The rounded media sits inside the content area, pairing an image or
 * gradient with a caption below — ideal for galleries, product tiles, or marketing highlights.
 */
export const MediaCard: Story = {
  name: 'Media Card',
  render: (args) => (
    <div className="w-[28rem]">
      <BentoBox {...args}>
        <BentoBoxContent>
          <div className="aspect-video w-full rounded-2xl bg-linear-to-br from-brand-default to-accent-default" />
        </BentoBoxContent>
        <BentoBoxHeader>
          <BentoBoxTitle>Mountain Escape</BentoBoxTitle>
          <BentoBoxDescription>
            Twelve hand-picked alpine cabins with floor-to-ceiling views, available for booking this
            winter season.
          </BentoBoxDescription>
          <BentoBoxAction>
            <Button variant="ghost" tone="neutral" size="small">
              Explore
            </Button>
          </BentoBoxAction>
        </BentoBoxHeader>
      </BentoBox>
    </div>
  ),
}

/**
 * A feature highlight tile that pairs an icon, a heading, and a call to action. Ideal for landing
 * pages and onboarding flows.
 */
export const FeatureHighlight: Story = {
  name: 'Feature Highlight',
  render: (args) => (
    <div className="w-[28rem]">
      <BentoBox {...args}>
        <BentoBoxHeader>
          <div className="flex size-xl items-center justify-center rounded-2xl bg-brand-muted text-brand-on-default">
            <svg
              aria-hidden
              className="size-md"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <BentoBoxTitle>Lightning-fast deploys</BentoBoxTitle>
          <BentoBoxDescription>
            Push to your main branch and we build, test, and ship to a global edge network in
            seconds — no config required.
          </BentoBoxDescription>
        </BentoBoxHeader>
        <BentoBoxFooter>
          <Button variant="soft" tone="brand" size="small" className="self-start">
            Learn more
          </Button>
        </BentoBoxFooter>
      </BentoBox>
    </div>
  ),
}

/**
 * A list-style bento box that groups related actions or navigation items. Each row can be a link,
 * button, or any interactive element.
 */
export const ActionList: Story = {
  name: 'Action List',
  render: (args) => (
    <div className="w-[24rem]">
      <BentoBox {...args}>
        <BentoBoxHeader>
          <BentoBoxTitle>Quick Actions</BentoBoxTitle>
          <BentoBoxDescription>Jump straight into common tasks</BentoBoxDescription>
        </BentoBoxHeader>
        <BentoBoxContent>
          <div className="flex flex-col gap-3xs">
            {['Create a project', 'Invite a teammate', 'View billing', 'Open settings'].map(
              (label) => (
                <Button key={label} variant="soft" tone="neutral" className="w-full justify-start">
                  {label}
                </Button>
              ),
            )}
          </div>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
}

/**
 * An asymmetric bento grid — the layout that gives the component its name. Each box fills its grid
 * cell, so column and row spans are applied to the wrapping cells rather than the boxes themselves.
 */
export const BentoGrid: Story = {
  name: 'Bento Grid (Asymmetric)',
  render: (args) => {
    faker.seed(7)

    const revenueChartConfig = {
      revenue: {
        label: 'Revenue',
        color: 'var(--cartyx-brand-default)',
        icon: TrendUpIcon,
      },
    } satisfies ChartConfig

    const revenueData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({
      day,
      revenue: faker.number.int({ min: 4200, max: 12800 }),
    }))
    const totalRevenue = revenueData.reduce((sum, point) => sum + point.revenue, 0)

    const team = Array.from({ length: 5 }, () => {
      const name = faker.person.fullName()
      return {
        name,
        role: faker.person.jobTitle(),
        avatar: faker.image.avatarGitHub(),
        initials: name
          .split(' ')
          .map((part) => part[0])
          .join('')
          .slice(0, 2)
          .toUpperCase(),
      }
    })

    const stats = [
      {
        label: 'New signups',
        value: faker.number.int({ min: 900, max: 1800 }).toLocaleString(),
        delta: '+8.2%',
        trend: 'up' as const,
        icon: UsersThreeIcon,
        iconClass: 'bg-brand-muted text-brand-on-default',
      },
      {
        label: 'Conversion',
        value: `${faker.number.float({ min: 3, max: 6, fractionDigits: 1 })}%`,
        delta: '+1.1%',
        trend: 'up' as const,
        icon: TargetIcon,
        iconClass: 'bg-accent-muted text-accent-on-default',
      },
      {
        label: 'Churn',
        value: `${faker.number.float({ min: 0.5, max: 2.4, fractionDigits: 1 })}%`,
        delta: '-0.4%',
        trend: 'down' as const,
        icon: PulseIcon,
        iconClass: 'bg-success-muted text-success-on-default',
      },
    ]

    return (
      <div className="grid h-[42rem] w-4xl grid-cols-3 grid-rows-3 gap-md">
        <div className="col-span-2 row-span-2">
          <BentoBox {...args}>
            <BentoBoxHeader>
              <BentoBoxTitle>Revenue Overview</BentoBoxTitle>
              <BentoBoxDescription>Last 7 days across all products</BentoBoxDescription>
              <BentoBoxAction>
                <Badge tone="success" variant="soft">
                  <TrendUpIcon weight="bold" /> 12.4%
                </Badge>
              </BentoBoxAction>
            </BentoBoxHeader>
            <BentoBoxContent>
              <div className="flex h-full flex-col gap-sm">
                <span className="style-text-strong-4">${totalRevenue.toLocaleString()}</span>
                <ChartContainer config={revenueChartConfig} className="aspect-auto size-full">
                  <AreaChart data={revenueData} margin={{ left: 0, right: 0, top: 8, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      axisLine={false}
                      dataKey="day"
                      tickLine={false}
                      tickMargin={8}
                      type="category"
                    />
                    <ChartTooltip
                      content={
                        <ChartTooltipContent>
                          <ChartTooltipLabel />
                          <ChartTooltipPayload>
                            <ChartTooltipIndicator />
                            <ChartTooltipName />
                            <ChartTooltipValue />
                          </ChartTooltipPayload>
                        </ChartTooltipContent>
                      }
                    />
                    <Area
                      dataKey="revenue"
                      fill="var(--cartyx-brand-default)"
                      fillOpacity={0.12}
                      stroke="var(--cartyx-brand-default)"
                      strokeWidth={2}
                      type="natural"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </BentoBoxContent>
          </BentoBox>
        </div>
        <div className="row-span-2">
          <BentoBox {...args}>
            <BentoBoxHeader>
              <BentoBoxTitle>Team</BentoBoxTitle>
              <BentoBoxDescription>Active members today</BentoBoxDescription>
            </BentoBoxHeader>
            <BentoBoxContent>
              <div className="flex flex-col gap-md">
                {team.map((member) => (
                  <div key={member.name} className="flex items-center gap-xs">
                    <Avatar size="small">
                      <AvatarImage alt={member.name} src={member.avatar} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate style-text-strong-0">{member.name}</span>
                      <span className="truncate style-text-default--1 text-on-surface-variant">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </BentoBoxContent>
          </BentoBox>
        </div>
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label}>
              <BentoBox {...args}>
                <BentoBoxContent>
                  <div className="flex h-full flex-col justify-between gap-xs">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex size-lg items-center justify-center rounded-xl ${stat.iconClass}`}
                      >
                        <Icon className="size-sm" weight="bold" />
                      </div>
                      <Badge tone={stat.trend === 'up' ? 'success' : 'error'} variant="soft">
                        {stat.trend === 'up' ? (
                          <TrendUpIcon weight="bold" />
                        ) : (
                          <TrendDownIcon weight="bold" />
                        )}
                        {stat.delta}
                      </Badge>
                    </div>
                    <div className="flex flex-col">
                      <span className="style-text-strong-3">{stat.value}</span>
                      <BentoBoxDescription>{stat.label}</BentoBoxDescription>
                    </div>
                  </div>
                </BentoBoxContent>
              </BentoBox>
            </div>
          )
        })}
      </div>
    )
  },
}

/**
 * A uniform, responsive grid of equally sized bento boxes. This is the go-to layout for a
 * collection of cards such as products, settings groups, or reports.
 */
export const UniformGrid: Story = {
  name: 'Uniform Grid',
  render: (args) => {
    const cards = [
      {
        title: 'Analytics',
        description: 'Track traffic, conversions, and retention with real-time dashboards.',
      },
      {
        title: 'Automations',
        description: 'Trigger workflows from events without writing a single line of code.',
      },
      {
        title: 'Integrations',
        description: 'Connect the tools your team already uses in just a few clicks.',
      },
      {
        title: 'Notifications',
        description: 'Keep everyone in the loop with email, Slack, and in-app alerts.',
      },
      {
        title: 'Permissions',
        description: 'Give each teammate exactly the access they need, and nothing more.',
      },
      {
        title: 'Audit Log',
        description: 'Review every change with a complete, exportable activity history.',
      },
    ]

    return (
      <div className="grid w-5xl grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <BentoBox {...args} key={card.title}>
            <BentoBoxHeader>
              <BentoBoxTitle>{card.title}</BentoBoxTitle>
              <BentoBoxDescription>{card.description}</BentoBoxDescription>
              <BentoBoxAction>
                <Button variant="ghost" tone="neutral" size="small">
                  Open
                </Button>
              </BentoBoxAction>
            </BentoBoxHeader>
            <BentoBoxContent>
              <p>Enabled for your workspace</p>
            </BentoBoxContent>
          </BentoBox>
        ))}
      </div>
    )
  },
}

export const Sizes: Story = {
  name: 'Sizes',
  render: (args) => (
    <div className="flex flex-col gap-lg">
      <BentoBox {...args} size="small">
        <BentoBoxHeader>
          <BentoBoxTitle>Small Bento Box</BentoBoxTitle>
          <BentoBoxDescription>This is a small bento box.</BentoBoxDescription>
        </BentoBoxHeader>
        <BentoBoxContent>
          <p>Content goes here.</p>
        </BentoBoxContent>
      </BentoBox>

      <BentoBox {...args} size="medium">
        <BentoBoxHeader>
          <BentoBoxTitle>Medium Bento Box</BentoBoxTitle>
          <BentoBoxDescription>This is a medium bento box.</BentoBoxDescription>
        </BentoBoxHeader>
        <BentoBoxContent>
          <p>Content goes here.</p>
        </BentoBoxContent>
      </BentoBox>

      <BentoBox {...args} size="large">
        <BentoBoxHeader>
          <BentoBoxTitle>Large Bento Box</BentoBoxTitle>
          <BentoBoxDescription>This is a large bento box.</BentoBoxDescription>
        </BentoBoxHeader>
        <BentoBoxContent>
          <p>Content goes here.</p>
        </BentoBoxContent>
      </BentoBox>
    </div>
  ),
}
