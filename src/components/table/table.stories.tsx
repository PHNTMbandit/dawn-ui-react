import { faker } from '@faker-js/faker'
import {
  ArrowsDownUpIcon,
  CheckCircleIcon,
  CircleIcon,
  ClockIcon,
  ColumnsIcon,
  FunnelIcon,
  SpinnerIcon,
  WarningCircleIcon,
} from '@phosphor-icons/react'
import {
  type ColumnDef,
  type ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { Badge } from '../badge'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { Table } from './table'
import { TableBodyGrid } from './table-body-grid'
import { TableBodyList } from './table-body-list'
import { TableChangeView } from './table-change-view'
import { TableColumnToggle } from './table-column-toggle'
import { TableContainer } from './table-container'
import { TableContent } from './table-content'
import { TableDataSetTabs } from './table-data-set-tabs'
import { TableFilter } from './table-filter'
import { TableFilters } from './table-filters'
import { TableFirstPage } from './table-first-page'
import { TableFooter } from './table-footer'
import { TableHeader } from './table-header'
import { TableLastPage } from './table-last-page'
import { TableNav } from './table-nav'
import { TableNextPage } from './table-next-page'
import { TablePagination } from './table-pagination'
import { TablePaging } from './table-paging'
import { TablePreviousPage } from './table-previous-page'
import { TableRefresh } from './table-refresh'
import { TableResults } from './table-results'
import { TableRowGrid } from './table-row-grid'
import { TableRowList } from './table-row-list'
import { TableSearch } from './table-search'
import { TableSort } from './table-sort'
import { TableToolbar } from './table-toolbar'
import { numberFilterFn, selectFilterFn, textFilterFn } from './table.utils'

import type { TableDataSet, TableProps } from './table.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    TableBodyGrid,
    TableBodyList,
    TableChangeView,
    TableContent,
    TableFilter,
    TableFirstPage,
    TableFooter,
    TableHeader,
    TableLastPage,
    TableNav,
    TableNextPage,
    TablePagination,
    TablePaging,
    TablePreviousPage,
    TableRefresh,
    TableResults,
    TableRowGrid,
    TableRowList,
    TableSearch,
    TableSort,
  },
  parameters: {
    docs: {
      subtitle: 'Flexible data table with sorting, filtering, pagination, and multiple view modes.',
      description: {
        component:
          'A composition-first data table built on TanStack Table. Supports common patterns like simple lists, data grids, dashboards, user directories, and task trackers.',
      },
    },
  },
  args: {
    defaultView: 'list',
  },
  argTypes: {
    defaultView: {
      control: { type: 'inline-radio' },
      options: ['list', 'grid'],
      description: 'Initial table display mode.',
      table: {
        type: { summary: 'list | grid' },
        defaultValue: { summary: 'list' },
      },
    },
  },
} satisfies Meta<TableProps<any, any>>

type Story = StoryObj<TableProps<any, any>>

// ─────────────────────────────────────────────────────────────────────────────
// Data Types
// ─────────────────────────────────────────────────────────────────────────────

type Person = {
  firstName: string
  lastName: string
  email: string
  age: number
  visits: number
  progress: number
  status: 'active' | 'inactive' | 'pending'
  avatar: string
}

type Task = {
  id: string
  title: string
  status: 'todo' | 'in-progress' | 'done' | 'blocked'
  priority: 'low' | 'medium' | 'high'
  assignee: string
  dueDate: string
}

type Product = {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
}

// ─────────────────────────────────────────────────────────────────────────────
// Data Generators
// ─────────────────────────────────────────────────────────────────────────────

const makePeople = (count: number): Person[] =>
  Array.from({ length: count }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 }),
    visits: faker.number.int({ min: 0, max: 500 }),
    progress: faker.number.int({ min: 0, max: 100 }),
    status: faker.helpers.arrayElement(['active', 'inactive', 'pending']),
    avatar: faker.image.avatar(),
  }))

const makeTasks = (count: number): Task[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `TASK-${1000 + i}`,
    title: faker.hacker.phrase(),
    status: faker.helpers.arrayElement(['todo', 'in-progress', 'done', 'blocked']),
    priority: faker.helpers.arrayElement(['low', 'medium', 'high']),
    assignee: faker.person.fullName(),
    dueDate: faker.date.soon({ days: 30 }).toLocaleDateString(),
  }))

const makeProducts = (count: number): Product[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `PRD-${1000 + i}`,
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: Number.parseFloat(faker.commerce.price({ min: 10, max: 500 })),
    stock: faker.number.int({ min: 0, max: 200 }),
    status: faker.helpers.arrayElement(['in-stock', 'low-stock', 'out-of-stock']),
  }))

// ─────────────────────────────────────────────────────────────────────────────
// Status Components
// ─────────────────────────────────────────────────────────────────────────────

const TaskStatusBadge = ({ status }: { status: Task['status'] }) => {
  const config = {
    todo: { icon: CircleIcon, tone: 'neutral' as const },
    'in-progress': { icon: SpinnerIcon, tone: 'info' as const },
    done: { icon: CheckCircleIcon, tone: 'success' as const },
    blocked: { icon: WarningCircleIcon, tone: 'error' as const },
  }
  const { icon: Icon, tone } = config[status]
  return (
    <Badge tone={tone} variant="soft">
      <Icon weight="fill" />
      {status}
    </Badge>
  )
}

const PriorityBadge = ({ priority }: { priority: Task['priority'] }) => {
  const tone = { low: 'neutral', medium: 'warning', high: 'error' } as const
  return (
    <Badge tone={tone[priority]} variant="soft">
      {priority}
    </Badge>
  )
}

const StockBadge = ({ status }: { status: Product['status'] }) => {
  const config = {
    'in-stock': { tone: 'success' as const, label: 'In Stock' },
    'low-stock': { tone: 'warning' as const, label: 'Low Stock' },
    'out-of-stock': { tone: 'error' as const, label: 'Out of Stock' },
  }
  return (
    <Badge tone={config[status].tone} variant="soft">
      {config[status].label}
    </Badge>
  )
}

const UserStatusDot = ({ status }: { status: Person['status'] }) => {
  const colors = {
    active: 'bg-success-default',
    inactive: 'bg-neutral-default',
    pending: 'bg-warning-default',
  }
  return <span className={`rounded-full ${colors[status]}`} />
}

// ═══════════════════════════════════════════════════════════════════════════════
// BASIC VARIATIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const Simple: Story = {
  name: 'Basic / Simple',
  parameters: {
    docs: {
      description: {
        story:
          'Minimal table with just data rows. No toolbar, pagination, or interactive features.',
      },
    },
  },
  render: () => {
    const columns: ColumnDef<Person>[] = [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'age', header: 'Age' },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(5), []),
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
      </Table>
    )
  },
}

export const WithFooter: Story = {
  name: 'Basic / With Footer',
  parameters: {
    docs: {
      description: {
        story: 'Table with header and footer rows for summary data or column labels.',
      },
    },
  },
  render: () => {
    const columnHelper = createColumnHelper<Person>()
    const columns = [
      columnHelper.accessor('firstName', {
        header: 'First Name',
        footer: 'First Name',
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        footer: 'Last Name',
      }),
      columnHelper.accessor('visits', {
        header: 'Visits',
        footer: (info) => {
          const total = info.table
            .getRowModel()
            .rows.reduce((sum, row) => sum + row.original.visits, 0)
          return `Total: ${total}`
        },
      }),
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(5), []),
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
          <TableFooter />
        </TableContainer>
      </Table>
    )
  },
}

export const HeaderGroups: Story = {
  name: 'Basic / Grouped Headers',
  parameters: {
    docs: {
      description: {
        story: 'Nested column groups for organizing related data under shared headers.',
      },
    },
  },
  render: () => {
    const columnHelper = createColumnHelper<Person>()
    const columns = [
      columnHelper.group({
        id: 'identity',
        header: 'Identity',
        columns: [
          columnHelper.accessor('firstName', { header: 'First Name' }),
          columnHelper.accessor('lastName', { header: 'Last Name' }),
        ],
      }),
      columnHelper.group({
        id: 'metrics',
        header: 'Metrics',
        columns: [
          columnHelper.accessor('age', { header: 'Age' }),
          columnHelper.accessor('visits', { header: 'Visits' }),
          columnHelper.accessor('progress', { header: 'Progress' }),
        ],
      }),
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(8), []),
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
      </Table>
    )
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// FEATURE VARIATIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const Sortable: Story = {
  name: 'Feature / Sorting',
  parameters: {
    docs: {
      description: {
        story: 'Click column headers to sort. Supports ascending, descending, and unsorted states.',
      },
    },
  },
  render: () => {
    const columns: ColumnDef<Person>[] = [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'age', header: 'Age' },
      { accessorKey: 'visits', header: 'Visits' },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(20), []),
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 4 } },
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

export const Searchable: Story = {
  name: 'Feature / Global Search',
  parameters: {
    docs: {
      description: {
        story: 'Global search filters across all visible columns.',
      },
    },
  },
  render: () => {
    const [globalFilter, setGlobalFilter] = React.useState('')

    const columns: ColumnDef<Person>[] = [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(50), []),
      columns,
      state: { globalFilter },
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 10 } },
    })

    return (
      <Table table={table}>
        <TableToolbar>
          <TableSearch placeholder="Search people..." />
        </TableToolbar>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav>
          <TableResults>
            {(start, end, total) => (
              <span className="style-text-prose-0 text-on-surface-variant">
                {start}–{end} of {total}
              </span>
            )}
          </TableResults>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

export const Selectable: Story = {
  name: 'Feature / Row Selection',
  parameters: {
    docs: {
      description: {
        story: 'Checkbox-based row selection with bulk select in header.',
      },
    },
  },
  render: () => {
    const columns: ColumnDef<Person>[] = [
      {
        id: 'select',
        enableSorting: false,
        size: 40,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all"
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onCheckedChange={(v) => table.toggleAllRowsSelected(!!v)}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(v) => row.toggleSelected(!!v)}
          />
        ),
      },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(10), []),
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <p className="mt-sm style-text-prose--1 text-on-surface-variant">
          {table.getSelectedRowModel().rows.length} of {table.getRowModel().rows.length} selected
        </p>
      </Table>
    )
  },
}

export const Paginated: Story = {
  name: 'Feature / Pagination',
  parameters: {
    docs: {
      description: {
        story:
          'Full pagination controls with page numbers, first/last navigation, and result count.',
      },
    },
  },
  render: () => {
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

    const columns: ColumnDef<Person>[] = [
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'age', header: 'Age' },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(95), []),
      columns,
      state: { pagination },
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    })

    return (
      <Table table={table}>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav>
          <TableResults>
            {(start, end, total) => (
              <span className="style-text-prose-0 text-on-surface-variant">
                Showing{' '}
                <strong>
                  {start}–{end}
                </strong>{' '}
                of <strong>{total}</strong>
              </span>
            )}
          </TableResults>
          <TablePagination>
            <TableFirstPage />
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
            <TableLastPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// USE CASE VARIATIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const UserDirectory: Story = {
  name: 'Use Case / User Directory',
  parameters: {
    docs: {
      description: {
        story:
          'Contact list with avatars, status indicators, and quick actions. Common in admin panels and CRMs.',
      },
    },
  },
  render: () => {
    const [globalFilter, setGlobalFilter] = React.useState('')

    const columns: ColumnDef<Person>[] = [
      {
        id: 'user',
        header: 'User',
        cell: ({ row }) => (
          <div className="flex items-center gap-sm">
            <Avatar size="small">
              <AvatarImage src={row.original.avatar} />
              <AvatarFallback>
                {row.original.firstName[0]}
                {row.original.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="style-text-default-0">
                {row.original.firstName} {row.original.lastName}
              </div>
              <div className="style-text-prose--1 text-on-surface-variant">
                {row.original.email}
              </div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <div className="flex items-center gap-xs">
            <UserStatusDot status={row.original.status} />
            <span className="capitalize">{row.original.status}</span>
          </div>
        ),
      },
      { accessorKey: 'visits', header: 'Visits' },
      {
        id: 'actions',
        header: '',
        cell: () => (
          <Button variant="ghost" tone="neutral" size="small">
            Edit
          </Button>
        ),
      },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makePeople(25), []),
      columns,
      state: { globalFilter },
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 16 } },
    })

    return (
      <Table table={table} className="max-h-[400px] overflow-y-auto">
        <TableToolbar sticky>
          <TableSearch placeholder="Search users..." />
        </TableToolbar>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav sticky>
          <TableResults>
            {(_start, _end, total) => (
              <span className="text-on-surface-variant">{total} users</span>
            )}
          </TableResults>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

export const TaskTracker: Story = {
  name: 'Use Case / Task Tracker',
  parameters: {
    docs: {
      description: {
        story:
          'Project management table with status badges, priority levels, and assignees. Common in issue trackers and kanban tools.',
      },
    },
  },
  render: () => {
    const [globalFilter, setGlobalFilter] = React.useState('')

    const columns: ColumnDef<Task>[] = [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ row }) => <span className="text-on-surface-variant">{row.original.id}</span>,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 300,
        cell: ({ row }) => <span className="line-clamp-1">{row.original.title}</span>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <TaskStatusBadge status={row.original.status} />,
      },
      {
        accessorKey: 'priority',
        header: 'Priority',
        cell: ({ row }) => <PriorityBadge priority={row.original.priority} />,
      },
      { accessorKey: 'assignee', header: 'Assignee' },
      {
        accessorKey: 'dueDate',
        header: 'Due Date',
        cell: ({ row }) => (
          <div className="flex items-center gap-xs text-on-surface-variant">
            <ClockIcon />
            {row.original.dueDate}
          </div>
        ),
      },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makeTasks(30), []),
      columns,
      state: { globalFilter },
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 10 } },
    })

    return (
      <Table table={table}>
        <TableToolbar>
          <TableSearch placeholder="Search tasks..." />
        </TableToolbar>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav>
          <TableResults>
            {(_start, _end, total) => (
              <span className="text-on-surface-variant">{total} tasks</span>
            )}
          </TableResults>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

export const ProductInventory: Story = {
  name: 'Use Case / Product Inventory',
  parameters: {
    docs: {
      description: {
        story:
          'E-commerce inventory table with stock status, pricing, and category filters. Common in admin dashboards.',
      },
    },
  },
  render: () => {
    const [globalFilter, setGlobalFilter] = React.useState('')

    const columns: ColumnDef<Product>[] = [
      {
        accessorKey: 'id',
        header: 'SKU',
        cell: ({ row }) => <span className="text-on-surface-variant">{row.original.id}</span>,
      },
      { accessorKey: 'name', header: 'Product' },
      {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ row }) => (
          <Badge variant="outline" tone="neutral">
            {row.original.category}
          </Badge>
        ),
      },
      {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => `$${row.original.price.toFixed(2)}`,
      },
      { accessorKey: 'stock', header: 'Stock' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <StockBadge status={row.original.status} />,
      },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makeProducts(50), []),
      columns,
      state: { globalFilter },
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 10 } },
    })

    return (
      <Table table={table}>
        <TableToolbar>
          <TableSearch placeholder="Search products..." />
        </TableToolbar>
        <TableContainer>
          <TableHeader />
          <TableBodyList />
        </TableContainer>
        <TableNav>
          <TableResults>
            {(_start, _end, total) => (
              <span className="text-on-surface-variant">{total} products</span>
            )}
          </TableResults>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

export const DataDashboard: Story = {
  name: 'Use Case / Data Dashboard',
  parameters: {
    docs: {
      description: {
        story:
          'Full-featured data table with toolbar, filters, column toggle, sorting, and view switching. Common in analytics dashboards.',
      },
    },
  },
  render: (args) => {
    const columnHelper = createColumnHelper<Person>()

    const columns = [
      columnHelper.accessor('firstName', {
        id: 'First Name',
        header: 'First Name',
        filterFn: textFilterFn,
        meta: { filterType: 'text' },
      }),
      columnHelper.accessor('lastName', {
        id: 'Last Name',
        header: 'Last Name',
        filterFn: textFilterFn,
        meta: { filterType: 'text' },
      }),
      columnHelper.accessor('age', {
        id: 'Age',
        header: 'Age',
        filterFn: numberFilterFn,
        meta: { filterType: 'number' },
      }),
      columnHelper.accessor('visits', {
        id: 'Visits',
        header: 'Visits',
        filterFn: numberFilterFn,
        meta: { filterType: 'number' },
      }),
      columnHelper.accessor('status', {
        id: 'Status',
        header: 'Status',
        filterFn: selectFilterFn,
        meta: { filterType: 'select' },
        cell: ({ row }) => <span className="capitalize">{row.original.status}</span>,
      }),
      columnHelper.accessor('progress', {
        id: 'Progress',
        header: 'Progress',
      }),
    ]

    const dataSets: TableDataSet<Person, any>[] = [
      {
        id: 'all',
        label: 'All Users',
        columns,
        data: React.useMemo(() => makePeople(100), []),
      },
      {
        id: 'active',
        label: 'Active',
        columns,
        data: React.useMemo(
          () => makePeople(50).map((p) => ({ ...p, status: 'active' as const })),
          [],
        ),
      },
    ]

    const [currentDataSet, setCurrentDataSet] = React.useState<TableDataSet<Person, any>>(
      dataSets[0],
    )
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 12,
    })

    const table = useReactTable({
      data: currentDataSet.data,
      columns: currentDataSet.columns,
      state: { columnFilters, globalFilter, pagination },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
    })

    return (
      <Table
        {...args}
        table={table}
        dataSets={dataSets}
        currentDataSet={currentDataSet}
        setCurrentDataSet={setCurrentDataSet}
      >
        <TableToolbar>
          <TableDataSetTabs variant="underline" />
          <TableSearch placeholder="Search..." />
          <TableSort>
            <Button tone="neutral" variant="ghost">
              <ArrowsDownUpIcon weight="bold" />
              Sort
            </Button>
          </TableSort>
          <TableFilter>
            <Button tone="neutral" variant="ghost">
              <FunnelIcon weight="bold" />
              Filter
            </Button>
          </TableFilter>
          <TableColumnToggle>
            <Button tone="neutral" variant="ghost">
              <ColumnsIcon weight="bold" />
              Columns
            </Button>
          </TableColumnToggle>
          <TableChangeView />
        </TableToolbar>
        <TableFilters />
        <TableContainer>
          <TableHeader />
          <TableBodyList />
          <TableBodyGrid<Person> className="auto-rows-fr grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
            {(row) => (
              <div className="flex aspect-square size-full flex-col items-start gap-xs rounded-xl bg-surface px-sm py-xs">
                <span className="line-clamp-1">
                  {row.original.firstName} {row.original.lastName}
                </span>
                <span className="style-text-prose--1 text-on-surface-variant">
                  ${row.original.age} years old
                </span>
              </div>
            )}
          </TableBodyGrid>
        </TableContainer>
        <TableNav>
          <TableResults>
            {(_start, _end, total) => (
              <span className="text-on-surface-variant">{total} records</span>
            )}
          </TableResults>
          <TablePagination>
            <TableFirstPage />
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
            <TableLastPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}

// ═══════════════════════════════════════════════════════════════════════════════
// VIEW MODES
// ═══════════════════════════════════════════════════════════════════════════════

export const GridView: Story = {
  name: 'View / Grid Cards',
  args: { defaultView: 'grid' },
  parameters: {
    docs: {
      description: {
        story:
          'Card-based grid layout for visual browsing. Common in media galleries and product catalogs.',
      },
    },
  },
  render: (args) => {
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 24,
    })

    const columns: ColumnDef<Product>[] = [
      {
        accessorKey: 'name',
        cell: ({ row }) => (
          <div className="flex size-full flex-col items-start gap-xs rounded-xl bg-surface px-sm py-xs">
            <span className="line-clamp-1">{row.original.name}</span>
            <span className="style-text-prose--1 text-on-surface-variant">
              ${row.original.price.toFixed(2)}
            </span>
          </div>
        ),
      },
    ]

    const table = useReactTable({
      data: React.useMemo(() => makeProducts(48), []),
      columns,
      state: { globalFilter, pagination },
      onGlobalFilterChange: setGlobalFilter,
      onPaginationChange: setPagination,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    })

    return (
      <Table {...args} table={table} className="max-h-[500px] w-[800px]">
        <TableToolbar>
          <TableSearch placeholder="Search products..." />
          <TableChangeView />
        </TableToolbar>
        <TableContainer>
          <TableBodyGrid className="auto-rows-[minmax(9rem,auto)] grid-cols-[repeat(auto-fill,minmax(300px,1fr))]" />
        </TableContainer>
        <TableNav>
          <TableResults>
            {(_start, _end, total) => (
              <span className="text-on-surface-variant">{total} products</span>
            )}
          </TableResults>
          <TablePagination>
            <TablePreviousPage />
            <TablePaging />
            <TableNextPage />
          </TablePagination>
        </TableNav>
      </Table>
    )
  },
}
