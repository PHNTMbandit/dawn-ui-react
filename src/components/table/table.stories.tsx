import { faker, fakerJA } from '@faker-js/faker'
import { ArrowsDownUpIcon, ColumnsIcon, FunnelIcon, TrashIcon } from '@phosphor-icons/react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Badge, type BadgeProps } from '../badge'
import { Button } from '../button'
import { createAppColumnHelper, useAppTable } from './table-context'
import { TableResults } from './table-results'

export default {
  title: 'Components/Table',
  parameters: {
    docs: {
      subtitle: 'Flexible data table with sorting, filtering, pagination, and multiple view modes.',
      description: {
        component:
          'A composition-first data table built on TanStack Table. Supports common patterns like simple lists, data grids, dashboards, user directories, and task trackers.',
      },
    },
  },
}

type Person = {
  age: number
  avatar: string
  dateJoined: Date
  email: string
  firstName: string
  lastName: string
  progress: number
  status: 'active' | 'inactive' | 'pending'
  visits: number
}

const makePeople = (count: number): Person[] =>
  Array.from({ length: count }, () => ({
    age: faker.number.int({ min: 18, max: 65 }),
    avatar: faker.image.avatar(),
    dateJoined: faker.date.past({ years: 5 }),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    progress: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']),
    visits: faker.number.int({ min: 0, max: 500 }),
  }))

const makePeopleJA = (count: number): Person[] =>
  Array.from({ length: count }, () => ({
    age: fakerJA.number.int({ min: 18, max: 65 }),
    avatar: fakerJA.image.avatar(),
    dateJoined: fakerJA.date.past({ years: 5 }),
    email: fakerJA.internet.email(),
    firstName: fakerJA.person.firstName(),
    lastName: fakerJA.person.lastName(),
    progress: fakerJA.number.int({ min: 0, max: 100 }),
    status: fakerJA.helpers.arrayElement(['active', 'inactive', 'pending']),
    visits: fakerJA.number.int({ min: 0, max: 500 }),
  }))

const statusTone = (value: string): BadgeProps['tone'] => {
  switch (value) {
    case 'active':
    case 'in-stock':
      return 'success'
    case 'pending':
    case 'low-stock':
      return 'warning'
    default:
      return 'neutral'
  }
}

type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
}

const makeProducts = (count: number): Product[] =>
  Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.number.float({ min: 5, max: 500, fractionDigits: 2 }),
    stock: faker.number.int({ min: 0, max: 200 }),
    status: faker.helpers.arrayElement(['in-stock', 'low-stock', 'out-of-stock']),
  }))

export const Playground = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'A simple table with three columns: First Name, Last Name, and Email. The table is populated with 5 rows of fake data generated using the Faker library.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.display({
        id: 'select',
        header: ({ header }) => <header.TableSelectHeader />,
        cell: ({ cell }) => <cell.TableCheckboxCell />,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableHiding: false,
        size: 48,
      }),
      columnHelper.accessor('avatar', {
        header: 'Avatar',
        cell: ({ cell }) => <cell.TableImageCell className="rounded-full" />,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
      }),
      columnHelper.accessor('firstName', {
        header: 'First Name',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('dateJoined', {
        header: 'Date Joined',
        cell: ({ cell }) => <cell.TableDateCell />,
        filterFn: 'date',
        meta: {
          filterVariant: 'date',
        },
      }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('progress', {
        header: 'Progress',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        filterFn: 'select',
        meta: { filterVariant: 'select' },
        cell: ({ cell }) => <cell.TableBadgeCell tone={statusTone} />,
      }),
    ])

    const table = useAppTable({
      key: 'people-simple',
      columns,
      data: React.useMemo(() => makePeople(5000), []),
      enableMultiSort: true,
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
        sorting: [{ id: 'firstName', desc: false }],
        rowSelection: {},
      },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableToolbar>
            <table.TableSearch placeholder="Search..." />
            <table.TableFilterMenu>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <FunnelIcon weight="bold" />
              </Button>
            </table.TableFilterMenu>
            <table.TableSortMenu>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <ArrowsDownUpIcon weight="bold" />
              </Button>
            </table.TableSortMenu>
            <table.TableColumnToggle>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <ColumnsIcon weight="bold" />
              </Button>
            </table.TableColumnToggle>
          </table.TableToolbar>
          <table.TableFilterList />
          <table.TableSortList />
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
            <table.TableFooter />
          </table.TableViewport>
          <table.TableNav>
            <table.TablePagination>
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const PlaygroundJA = {
  name: 'Playground (JA)',
  parameters: {
    docs: {
      description: {
        story:
          'A simple table with three columns: First Name, Last Name, and Email. The table is populated with 5 rows of fake data generated using the Faker library.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.display({
        id: 'select',
        header: ({ header }) => <header.TableSelectHeader />,
        cell: ({ cell }) => <cell.TableCheckboxCell />,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
        enableHiding: false,
        size: 48,
      }),
      columnHelper.accessor('avatar', {
        header: 'アバター',
        cell: ({ cell }) => <cell.TableImageCell className="rounded-full" />,
        enableSorting: false,
        enableColumnFilter: false,
        enableGlobalFilter: false,
      }),
      columnHelper.accessor('firstName', {
        header: '名',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('lastName', {
        header: '姓',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('email', {
        header: 'メール',
        enableMultiSort: true,
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('age', {
        header: '年齢',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('dateJoined', {
        header: '入社日',
        cell: ({ cell }) => <cell.TableDateCell />,
        filterFn: 'date',
        meta: {
          filterVariant: 'date',
        },
      }),
      columnHelper.accessor('visits', {
        header: '訪問回数',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('progress', {
        header: '進捗',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('status', {
        header: 'ステータス',
        filterFn: 'select',
        meta: { filterVariant: 'select' },
        cell: ({ cell }) => <cell.TableBadgeCell tone={statusTone} />,
      }),
    ])

    const table = useAppTable({
      key: 'people-simple-ja',
      columns,
      data: React.useMemo(() => makePeopleJA(5000), []),
      enableMultiSort: true,
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
        sorting: [{ id: 'firstName', desc: false }],
        rowSelection: {},
      },
      meta: {
        translations: {
          filterOperatorLabels: {
            equals: 'と等しい',
            notEquals: 'と等しくない',
            contains: 'を含む',
            notContains: 'を含まない',
            startsWith: 'で始まる',
            endsWith: 'で終わる',
            greaterThan: 'より大きい',
            lessThan: 'より小さい',
            between: 'の間',
          },
          buttonLabels: {
            ascending: '昇順',
            descending: '降順',
            reset: 'リセット',
            apply: '適用',
          },
        },
      },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableToolbar>
            <table.TableSearch placeholder="検索..." />
            <table.TableFilterMenu>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <FunnelIcon weight="bold" />
              </Button>
            </table.TableFilterMenu>
            <table.TableSortMenu>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <ArrowsDownUpIcon weight="bold" />
              </Button>
            </table.TableSortMenu>
            <table.TableColumnToggle>
              <Button size="iconMedium" variant={'ghost'} tone="neutral">
                <ColumnsIcon weight="bold" />
              </Button>
            </table.TableColumnToggle>
          </table.TableToolbar>
          <table.TableFilterList />
          <table.TableSortList />
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
            <table.TableFooter />
          </table.TableViewport>
          <table.TableNav>
            <table.TablePagination>
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const BasicList = {
  name: 'Use case / Basic list',
  parameters: {
    docs: {
      description: {
        story:
          'A minimal, read-only table with only a header and body — no toolbar, filtering, or pagination. Ideal for short static lists embedded in a page.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Product>()
    const columns = columnHelper.columns([
      columnHelper.accessor('name', { header: 'Product' }),
      columnHelper.accessor('category', { header: 'Category' }),
      columnHelper.accessor('stock', {
        header: 'Stock',
        cell: ({ cell }) => <cell.TableNumberCell />,
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: ({ cell }) => <cell.TableNumberCell>$</cell.TableNumberCell>,
      }),
    ])

    const table = useAppTable({
      key: 'products-basic',
      columns,
      data: React.useMemo(() => makeProducts(6), []),
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
          </table.TableViewport>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const RowSelection = {
  name: 'Use case / Row selection',
  parameters: {
    docs: {
      description: {
        story:
          'Multi-row selection with a select-all header checkbox. A contextual toolbar reveals bulk actions once one or more rows are selected.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.display({
        id: 'select',
        header: ({ header }) => <header.TableSelectHeader />,
        cell: ({ cell }) => <cell.TableCheckboxCell />,
        enableSorting: false,
        enableHiding: false,
        size: 48,
      }),
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('email', { header: 'Email' }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ cell }) => <cell.TableBadgeCell tone={statusTone} />,
      }),
    ])

    const table = useAppTable({
      key: 'people-selection',
      columns,
      data: React.useMemo(() => makePeople(8), []),
      initialState: { rowSelection: {} },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableToolbar>
            <table.Subscribe selector={(state) => state.rowSelection}>
              {(rowSelection) => {
                const count = Object.keys(rowSelection).length

                return count > 0 ? (
                  <div className="flex w-full items-center justify-between gap-xs">
                    <span className="style-text-default--1 text-on-surface-variant">
                      {count} selected
                    </span>
                    <Button size="small" tone="error" variant="soft">
                      <TrashIcon weight="bold" />
                      Delete
                    </Button>
                  </div>
                ) : (
                  <span className="style-text-default--1 text-on-surface-variant">
                    Select rows to reveal bulk actions.
                  </span>
                )
              }}
            </table.Subscribe>
          </table.TableToolbar>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
          </table.TableViewport>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const Filtering = {
  name: 'Use case / Filtering',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates every filter variant — string, number, date, and multi-select — surfaced through the filter menu and rendered as removable chips in the active filter list.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.accessor('firstName', {
        header: 'First Name',
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        filterFn: 'string',
        meta: { filterVariant: 'string' },
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        filterFn: 'number',
        meta: { filterVariant: 'number' },
      }),
      columnHelper.accessor('dateJoined', {
        header: 'Date Joined',
        cell: ({ cell }) => <cell.TableDateCell />,
        filterFn: 'date',
        meta: { filterVariant: 'date' },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        filterFn: 'select',
        meta: { filterVariant: 'select' },
        cell: ({ cell }) => <cell.TableBadgeCell tone={statusTone} />,
      }),
    ])

    const table = useAppTable({
      key: 'people-filtering',
      columns,
      data: React.useMemo(() => makePeople(200), []),
      initialState: { pagination: { pageIndex: 0, pageSize: 8 } },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableToolbar>
            <table.TableSearch placeholder="Search..." />
            <table.TableFilterMenu>
              <Button size="iconMedium" variant="ghost" tone="neutral">
                <FunnelIcon weight="bold" />
              </Button>
            </table.TableFilterMenu>
          </table.TableToolbar>
          <table.TableFilterList />
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
          </table.TableViewport>
          <table.TableNav>
            <table.TablePagination>
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const WithFooterTotals = {
  name: 'Use case / Footer totals',
  parameters: {
    docs: {
      description: {
        story:
          'Uses column footers to render aggregate values. Totals recompute from the filtered row model, so they stay in sync as the data is filtered.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Product>()
    const columns = columnHelper.columns([
      columnHelper.accessor('name', { header: 'Product', footer: 'Total' }),
      columnHelper.accessor('category', { header: 'Category' }),
      columnHelper.accessor('stock', {
        header: 'Stock',
        cell: ({ cell }) => <cell.TableNumberCell />,
        footer: ({ table }) =>
          table
            .getFilteredRowModel()
            .rows.reduce((sum, row) => sum + row.getValue<number>('stock'), 0)
            .toLocaleString(),
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: ({ cell }) => <cell.TableNumberCell>$</cell.TableNumberCell>,
        footer: ({ table }) =>
          `$${table
            .getFilteredRowModel()
            .rows.reduce((sum, row) => sum + row.getValue<number>('price'), 0)
            .toLocaleString(undefined, { maximumFractionDigits: 2 })}`,
      }),
    ])

    const table = useAppTable({
      key: 'products-footer',
      columns,
      data: React.useMemo(() => makeProducts(8), []),
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
            <table.TableFooter />
          </table.TableViewport>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const CompactDensity = {
  name: 'Use case / Compact density',
  parameters: {
    docs: {
      description: {
        story:
          'A denser presentation with row dividers disabled via `showDivider={false}` and a smaller page size, suited to information-dense dashboards.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('email', { header: 'Email' }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        cell: ({ cell }) => <cell.TableNumberCell />,
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ cell }) => <cell.TableBadgeCell tone={statusTone} />,
      }),
    ])

    const table = useAppTable({
      key: 'people-compact',
      columns,
      data: React.useMemo(() => makePeople(50), []),
      initialState: { pagination: { pageIndex: 0, pageSize: 6 } },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody showDivider={false} />
          </table.TableViewport>
          <table.TableNav>
            <table.TablePagination>
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const EmptyState = {
  name: 'Use case / Empty state',
  parameters: {
    docs: {
      description: {
        story:
          'Renders a friendly empty message when there is no data to display, while keeping the column headers visible for context.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('email', { header: 'Email' }),
    ])

    const table = useAppTable({
      key: 'people-empty',
      columns,
      data: [],
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
          </table.TableViewport>
          <div className="flex flex-col items-center justify-center gap-3xs py-2xl text-center">
            <span className="style-text-default-0 text-on-surface">No records found</span>
            <span className="style-text-default--1 text-on-surface-variant">
              New entries will appear here once they are added.
            </span>
          </div>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const CustomPagination = {
  name: 'Use case / Custom pagination',
  parameters: {
    docs: {
      description: {
        story:
          'Composes a richer pagination bar with first/last jump buttons and a live "showing x–y of z" summary via `TableResults`.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.accessor('firstName', { header: 'First Name' }),
      columnHelper.accessor('lastName', { header: 'Last Name' }),
      columnHelper.accessor('email', { header: 'Email' }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        cell: ({ cell }) => <cell.TableNumberCell />,
      }),
    ])

    const table = useAppTable({
      key: 'people-pagination',
      columns,
      data: React.useMemo(() => makePeople(120), []),
      initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableHeader />
            <table.TableBody />
          </table.TableViewport>
          <table.TableNav>
            <TableResults>
              {(start, end, total) => (
                <span className="style-text-default--1 text-on-surface-variant">
                  Showing {start}–{end} of {total}
                </span>
              )}
            </TableResults>
            <table.TablePagination>
              <table.TableFirstPage />
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
              <table.TableLastPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}

export const Grid = {
  name: 'Use case / Grid view',
  parameters: {
    docs: {
      description: {
        story:
          'A grid view with a single column and custom cell rendering. The table is configured to display as a grid via `viewMode="grid"`.',
      },
    },
  },
  render: () => {
    const columnHelper = createAppColumnHelper<Person>()
    const columns = columnHelper.columns([
      columnHelper.display({
        id: 'person',
        cell: ({ cell }) => {
          const person = cell.row.original

          return (
            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-sm">
                <Avatar size="medium">
                  <AvatarImage alt={`${person.firstName} ${person.lastName}`} src={person.avatar} />
                  <AvatarFallback>
                    {person.firstName[0]}
                    {person.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate style-text-strong-0">
                    {person.firstName} {person.lastName}
                  </span>
                  <span className="truncate style-text-default--1 text-on-surface-variant">
                    {person.email}
                  </span>
                </div>
                <Badge
                  className="ml-auto capitalize"
                  tone={statusTone(person.status)}
                  variant="soft"
                >
                  {person.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between style-text-default--1 text-on-surface-variant">
                <span>{person.visits.toLocaleString()} visits</span>
                <span>Joined {person.dateJoined.getFullYear()}</span>
              </div>
              <div className="flex flex-col gap-3xs">
                <div className="flex items-center justify-between style-text-default--2 text-on-surface-variant">
                  <span>Progress</span>
                  <span>{person.progress}%</span>
                </div>
                <div className="h-2xs w-full overflow-hidden rounded-full bg-neutral-container-high">
                  <div
                    className="h-full rounded-full bg-brand-default"
                    style={{ width: `${person.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )
        },
      }),
    ])

    const table = useAppTable({
      key: 'people-pagination',
      columns,
      meta: {
        viewMode: 'grid',
      },
      data: React.useMemo(() => makePeople(120), []),
      initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
    })

    return (
      <table.AppTable>
        <table.TableContainer>
          <table.TableViewport>
            <table.TableBody />
          </table.TableViewport>
          <table.TableNav>
            <TableResults>
              {(start, end, total) => (
                <span className="style-text-default--1 text-on-surface-variant">
                  Showing {start}–{end} of {total}
                </span>
              )}
            </TableResults>
            <table.TablePagination>
              <table.TableFirstPage />
              <table.TablePreviousPage />
              <table.TablePaging />
              <table.TableNextPage />
              <table.TableLastPage />
            </table.TablePagination>
          </table.TableNav>
        </table.TableContainer>
      </table.AppTable>
    )
  },
}
