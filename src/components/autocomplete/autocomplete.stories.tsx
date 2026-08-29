import { MagnifyingGlassIcon, SpinnerGapIcon, TagIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { Autocomplete } from './autocomplete'
import { AutocompleteCollection } from './autocomplete-collection'
import { AutocompleteContent } from './autocomplete-content'
import { AutocompleteGridContent } from './autocomplete-grid-content'
import { AutocompleteGridItem } from './autocomplete-grid-item'
import { AutocompleteGroup } from './autocomplete-group'
import { AutocompleteGroupLabel } from './autocomplete-group-label'
import { AutocompleteInputGroup } from './autocomplete-input-group'
import { AutocompleteInputGroupAddon } from './autocomplete-input-group-addon'
import { AutocompleteInputGroupInput } from './autocomplete-input-group-input'
import { AutocompleteItem } from './autocomplete-item'
import { AutocompleteRow } from './autocomplete-row'
import { AutocompleteStatus } from './autocomplete-status'
import { AutocompleteTrigger } from './autocomplete-trigger'
import { useFilter } from './autocomplete.types'

import type { Meta, StoryObj } from '@storybook/react-vite'

type AutocompleteMode = 'list' | 'both' | 'inline' | 'none'

interface TagItem {
  id: string
  label: string
  group: 'Type' | 'Component'
}

interface TagGroup {
  value: string
  items: TagItem[]
}

interface EmojiItem {
  emoji: string
  value: string
  name: string
}

interface EmojiGroup {
  value: string
  label: string
  items: EmojiItem[]
}

interface Movie {
  id: string
  title: string
  year: number
}

const AUTOCOMPLETE_MODES = [
  'list',
  'both',
  'inline',
  'none',
] as const satisfies readonly AutocompleteMode[]

const tagsData: TagItem[] = [
  { id: 't1', label: 'feature', group: 'Type' },
  { id: 't2', label: 'fix', group: 'Type' },
  { id: 't3', label: 'bug', group: 'Type' },
  { id: 't4', label: 'docs', group: 'Type' },
  { id: 't5', label: 'internal', group: 'Type' },
  { id: 't6', label: 'mobile', group: 'Type' },
  { id: 'c-accordion', label: 'component: accordion', group: 'Component' },
  { id: 'c-alert-dialog', label: 'component: alert dialog', group: 'Component' },
  { id: 'c-autocomplete', label: 'component: autocomplete', group: 'Component' },
  { id: 'c-avatar', label: 'component: avatar', group: 'Component' },
  { id: 'c-checkbox', label: 'component: checkbox', group: 'Component' },
  { id: 'c-combobox', label: 'component: combobox', group: 'Component' },
  { id: 'c-dialog', label: 'component: dialog', group: 'Component' },
  { id: 'c-field', label: 'component: field', group: 'Component' },
  { id: 'c-form', label: 'component: form', group: 'Component' },
  { id: 'c-input', label: 'component: input', group: 'Component' },
  { id: 'c-menu', label: 'component: menu', group: 'Component' },
  { id: 'c-popover', label: 'component: popover', group: 'Component' },
  { id: 'c-select', label: 'component: select', group: 'Component' },
  { id: 'c-tabs', label: 'component: tabs', group: 'Component' },
  { id: 'c-toast', label: 'component: toast', group: 'Component' },
  { id: 'c-tooltip', label: 'component: tooltip', group: 'Component' },
]

const emojiCategories = [
  {
    label: 'Smileys & Emotion',
    emojis: [
      { emoji: '😀', name: 'grinning face' },
      { emoji: '😄', name: 'grinning face with smiling eyes' },
      { emoji: '😂', name: 'face with tears of joy' },
      { emoji: '😊', name: 'smiling face with smiling eyes' },
      { emoji: '😍', name: 'smiling face with heart-eyes' },
      { emoji: '🤩', name: 'star-struck' },
      { emoji: '😘', name: 'face blowing a kiss' },
      { emoji: '😎', name: 'smiling face with sunglasses' },
      { emoji: '🤔', name: 'thinking face' },
      { emoji: '😭', name: 'loudly crying face' },
    ],
  },
  {
    label: 'Animals & Nature',
    emojis: [
      { emoji: '🐶', name: 'dog face' },
      { emoji: '🐱', name: 'cat face' },
      { emoji: '🦊', name: 'fox' },
      { emoji: '🐼', name: 'panda' },
      { emoji: '🦁', name: 'lion' },
      { emoji: '🐸', name: 'frog' },
      { emoji: '🐧', name: 'penguin' },
      { emoji: '🦉', name: 'owl' },
      { emoji: '🦋', name: 'butterfly' },
      { emoji: '🌵', name: 'cactus' },
    ],
  },
  {
    label: 'Food & Drink',
    emojis: [
      { emoji: '🍎', name: 'red apple' },
      { emoji: '🍋', name: 'lemon' },
      { emoji: '🍇', name: 'grapes' },
      { emoji: '🍓', name: 'strawberry' },
      { emoji: '🍍', name: 'pineapple' },
      { emoji: '🥑', name: 'avocado' },
      { emoji: '🌽', name: 'ear of corn' },
      { emoji: '🥕', name: 'carrot' },
      { emoji: '🍕', name: 'pizza' },
      { emoji: '☕', name: 'hot beverage' },
    ],
  },
]

const topMovies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'Pulp Fiction', year: 1994 },
  { id: '5', title: 'Fight Club', year: 1999 },
  { id: '6', title: 'Inception', year: 2010 },
  { id: '7', title: 'The Matrix', year: 1999 },
  { id: '8', title: 'Interstellar', year: 2014 },
  { id: '9', title: 'Parasite', year: 2019 },
  { id: '10', title: 'Whiplash', year: 2014 },
]

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = []
  for (let index = 0; index < array.length; index += size) {
    result.push(array.slice(index, index + size))
  }
  return result
}

function groupTags(tags: TagItem[]): TagGroup[] {
  const groups: Record<string, TagItem[]> = {}
  tags.forEach((tag) => {
    groups[tag.group] ??= []
    groups[tag.group].push(tag)
  })
  return ['Type', 'Component'].map((value) => ({
    value,
    items: groups[value] ?? [],
  }))
}

const groupedTags = groupTags(tagsData)

const emojiGroups: EmojiGroup[] = emojiCategories.map((category) => ({
  value: category.label,
  label: category.label,
  items: category.emojis.map((emoji) => ({
    ...emoji,
    value: emoji.name.toLowerCase(),
  })),
}))

const ListAutocompleteTemplate = ({
  mode = 'list',
  autoHighlight = false,
  highlightItemOnHover = false,
  keepHighlight = false,
  openOnInputClick = true,
  variant = 'primary',
}: {
  mode?: AutocompleteMode
  autoHighlight?: boolean | 'always'
  highlightItemOnHover?: boolean
  keepHighlight?: boolean
  openOnInputClick?: boolean
  variant?: 'primary' | 'secondary'
}) => (
  <div className="w-[420px]">
    <Autocomplete
      autoHighlight={autoHighlight}
      highlightItemOnHover={highlightItemOnHover}
      items={tagsData}
      keepHighlight={keepHighlight}
      mode={mode}
      openOnInputClick={openOnInputClick}
    >
      <AutocompleteInputGroup variant={variant}>
        <AutocompleteInputGroupInput placeholder="Search tags or components" />
        <AutocompleteInputGroupAddon>
          <MagnifyingGlassIcon weight="bold" />
        </AutocompleteInputGroupAddon>
      </AutocompleteInputGroup>
      <AutocompleteContent emptyText="No matches found">
        <AutocompleteCollection>
          {(tag: TagItem) => (
            <AutocompleteItem key={tag.id} value={tag}>
              {tag.label}
            </AutocompleteItem>
          )}
        </AutocompleteCollection>
      </AutocompleteContent>
    </Autocomplete>
  </div>
)

const GroupedAutocompleteTemplate = ({ mode = 'both' }: { mode?: AutocompleteMode }) => (
  <div className="w-[420px]">
    <Autocomplete items={groupedTags} mode={mode} openOnInputClick>
      <AutocompleteInputGroup variant="primary">
        <AutocompleteInputGroupInput placeholder="Search grouped tags" />
        <AutocompleteInputGroupAddon>
          <TagIcon weight="bold" />
        </AutocompleteInputGroupAddon>
      </AutocompleteInputGroup>
      <AutocompleteContent emptyText="No grouped results found">
        {groupedTags.map((group) => (
          <AutocompleteGroup items={group.items} key={group.value}>
            <AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
            <AutocompleteCollection>
              {(item: TagItem) => (
                <AutocompleteItem key={item.id} value={item}>
                  {item.label}
                </AutocompleteItem>
              )}
            </AutocompleteCollection>
          </AutocompleteGroup>
        ))}
      </AutocompleteContent>
    </Autocomplete>
  </div>
)

const EmojiPickerTemplate = () => (
  <div className="mx-auto w-[18rem]">
    <div className="flex items-center gap-xs">
      <Input placeholder="Choose an emoji..." />
      <Autocomplete grid items={emojiGroups} open>
        <AutocompleteTrigger aria-label="Choose emoji">
          <Button className="shrink-0" size="iconMedium">
            😀
          </Button>
        </AutocompleteTrigger>
        <AutocompleteGridContent emptyText="No emojis found">
          {emojiGroups.map((group) => (
            <AutocompleteGroup className="block" items={group.items} key={group.value}>
              <AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
              <div className="p-3xs" role="presentation">
                {chunkArray(group.items, 5).map((row, rowIndex) => (
                  <AutocompleteRow key={`${group.value}-${rowIndex}`}>
                    {row.map((rowItem) => (
                      <AutocompleteGridItem key={rowItem.emoji} value={rowItem}>
                        {rowItem.emoji}
                      </AutocompleteGridItem>
                    ))}
                  </AutocompleteRow>
                ))}
              </div>
            </AutocompleteGroup>
          ))}
        </AutocompleteGridContent>
      </Autocomplete>
    </div>
  </div>
)

async function searchMovies(
  query: string,
  filter: (item: string, search: string) => boolean,
): Promise<{ movies: Movie[]; error: string | null }> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 350 + 120)
  })

  if (Math.random() < 0.01 || query === 'will_error') {
    return {
      movies: [],
      error: 'Failed to fetch movies. Please try again.',
    }
  }

  return {
    movies: topMovies.filter(
      (movie) => filter(movie.title, query) || filter(movie.year.toString(), query),
    ),
    error: null,
  }
}

const AsyncLoadingTemplate = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<Movie[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [isPending, startTransition] = React.useTransition()
  const { contains } = useFilter()

  const hasQuery = searchValue.trim().length > 0

  React.useEffect(() => {
    if (!hasQuery) {
      return
    }

    let cancelled = false

    startTransition(() => {
      void searchMovies(searchValue, contains).then((result) => {
        if (cancelled) {
          return
        }
        setSearchResults(result.movies)
        setError(result.error)
      })
    })

    return () => {
      cancelled = true
    }
  }, [contains, searchValue, hasQuery])

  const results = hasQuery ? searchResults : []
  const displayError = hasQuery ? error : null

  function getStatus(): React.ReactNode | null {
    if (isPending) {
      return (
        <div className="flex items-center gap-3xs">
          <SpinnerGapIcon aria-hidden className="size-xs animate-spin" weight="bold" />
          Searching…
        </div>
      )
    }

    if (displayError) {
      return displayError
    }

    if (!hasQuery) {
      return 'Start typing to search movies.'
    }

    return `${results.length} result${results.length === 1 ? '' : 's'} found`
  }

  return (
    <div className="w-[420px]">
      <Autocomplete items={results} mode="list" openOnInputClick>
        <AutocompleteInputGroup variant="primary">
          <AutocompleteInputGroupInput
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            placeholder="Search top movies"
            value={searchValue}
          />
          <AutocompleteInputGroupAddon>
            <MagnifyingGlassIcon weight="bold" />
          </AutocompleteInputGroupAddon>
        </AutocompleteInputGroup>
        <AutocompleteContent emptyText="No matching movies">
          <AutocompleteStatus>{getStatus()}</AutocompleteStatus>
          <AutocompleteCollection>
            {(movie: Movie) => (
              <AutocompleteItem key={movie.id} value={movie}>
                <div className="flex w-full items-center justify-between gap-sm">
                  <span>{movie.title}</span>
                  <span className="style-text-default--1 text-on-surface-variant">
                    {movie.year}
                  </span>
                </div>
              </AutocompleteItem>
            )}
          </AutocompleteCollection>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  )
}

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  subcomponents: {
    AutocompleteContent,
    AutocompleteInputGroupInput,
    AutocompleteItem,
    AutocompleteGroup,
    AutocompleteGroupLabel,
    AutocompleteGridContent,
    AutocompleteGridItem,
    AutocompleteRow,
    AutocompleteStatus,
    AutocompleteTrigger,
    AutocompleteInputGroupAddon,
    AutocompleteInputGroup,
  },
  parameters: {
    docs: {
      subtitle: 'An input enhancement that suggests matching options while the user types.',
      description: {
        component:
          'Autocomplete improves text entry by surfacing matching suggestions in real time. This implementation supports list and inline completion modes, grouped results, trigger-based grid pickers, async status feedback, and an input-group composition model for richer controls.',
      },
    },
  },
  args: {
    autoHighlight: false,
    highlightItemOnHover: false,
    keepHighlight: false,
    mode: 'list',
    openOnInputClick: true,
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    grid: {
      table: {
        disable: true,
      },
    },
    mode: {
      control: { type: 'select' },
      options: AUTOCOMPLETE_MODES,
      description: 'Controls how completion behaves: list popup, inline text, both, or disabled.',
      table: {
        defaultValue: { summary: 'list' },
      },
    },
    autoHighlight: {
      control: { type: 'select' },
      options: [true, false, 'always'],
      description: 'Controls whether the first or matching item is automatically highlighted.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    highlightItemOnHover: {
      control: 'boolean',
      description: 'Highlights items as the pointer moves over them.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    keepHighlight: {
      control: 'boolean',
      description: 'Keeps the current highlight active as the input changes.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    openOnInputClick: {
      control: 'boolean',
      description: 'Opens the suggestions popup when the input is clicked.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  render: (args) => (
    <ListAutocompleteTemplate
      autoHighlight={args.autoHighlight}
      highlightItemOnHover={args.highlightItemOnHover}
      keepHighlight={args.keepHighlight}
      mode={args.mode as AutocompleteMode}
      openOnInputClick={args.openOnInputClick}
    />
  ),
} satisfies Meta<typeof Autocomplete>

type Story = StoryObj<typeof Autocomplete>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Use controls to explore completion modes and interaction behavior on the base list autocomplete.',
      },
    },
  },
}

export const ListMode: Story = {
  name: 'Mode / List',
  args: {
    mode: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard dropdown suggestion list. This is the most common autocomplete pattern.',
      },
    },
  },
}

export const InlineMode: Story = {
  name: 'Mode / Inline',
  args: {
    mode: 'inline',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inline completion fills the input as the user types, without relying on a list popup alone.',
      },
    },
  },
}

export const BothMode: Story = {
  name: 'Mode / Both',
  args: {
    mode: 'both',
  },
  parameters: {
    docs: {
      description: {
        story: 'Combines inline completion with the suggestion list for maximum discoverability.',
      },
    },
  },
}

export const AutoHighlight: Story = {
  name: 'Behaviour / Auto Highlight',
  args: {
    autoHighlight: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Automatically highlights a matching option to streamline keyboard selection.',
      },
    },
  },
}

export const HoverHighlight: Story = {
  name: 'Behaviour / Hover Highlight',
  args: {
    highlightItemOnHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Highlights options on pointer hover for mouse-driven interactions.',
      },
    },
  },
}

export const GroupedResults: Story = {
  name: 'Composition / Grouped Results',
  render: () => <GroupedAutocompleteTemplate mode="both" />,
  parameters: {
    docs: {
      description: {
        story:
          'Grouped results are useful when suggestions span multiple categories, such as tags and components.',
      },
    },
  },
}

export const SecondaryInputSurface: Story = {
  name: 'Composition / Secondary Surface',
  render: () => <ListAutocompleteTemplate mode="list" variant="secondary" />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates autocomplete inside a lower-emphasis input surface for denser layouts.',
      },
    },
  },
}

export const EmojiPickerGrid: Story = {
  name: 'Composition / Emoji Picker Grid',
  render: () => <EmojiPickerTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          'A trigger-based grid picker pattern for dense visual choices such as emoji, icons, or swatches.',
      },
    },
  },
}

export const AsyncLoadingState: Story = {
  name: 'State / Async Loading',
  render: () => <AsyncLoadingTemplate />,
  parameters: {
    docs: {
      description: {
        story:
          'An async search pattern with live status feedback, loading state, and empty/error handling.',
      },
    },
  },
}
