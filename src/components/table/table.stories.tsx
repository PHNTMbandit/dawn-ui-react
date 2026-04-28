import { faker } from '@faker-js/faker'
import {
  type ColumnDef,
  type ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import { Checkbox } from '../checkbox'
import { Table } from './table'
import { TableBody } from './table-body'
import { TableChangeView } from './table-change-view'
import { TableContent } from './table-content'
import { TableFilter } from './table-filter'
import { TableFirstPage } from './table-first-page'
import { TableFooter } from './table-footer'
import { TableHeader } from './table-header'
import { TableLastPage } from './table-last-page'
import { TableNav } from './table-nav'
import { TableNextPage } from './table-next-page'
import { TablePagination } from './table-pagination'
import { TablePreviousPage } from './table-previous-page'
import { TableRefresh } from './table-refresh'
import { TableResults } from './table-results'
import { TableRowGrid } from './table-row-grid'
import { TableRowList } from './table-row-list'
import { TableSearch } from './table-search'
import { TableSort } from './table-sort'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    TableBody,
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
    TablePreviousPage,
    TableRefresh,
    TableResults,
    TableRowGrid,
    TableRowList,
    TableSearch,
    TableSort,
  },
  parameters: {
    subtitle: 'A table component for displaying tabular data.',
    description: {
      component:
        'The Table component is used to display data in a structured format with rows and columns. Stories demonstrate filtering, sorting, pagination, searching, selection, and list/grid view switching using TanStack Table.',
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
    table: {
      control: false,
      description: 'TanStack table instance passed by composed stories.',
      table: {
        type: { summary: 'TanstackTable<any>' },
      },
    },
  },
} as Meta<typeof Table>

type Story = StoryObj<typeof Table>

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>(['relationship', 'complicated', 'single'])[0]!,
  }
}

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((_d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export const Playground: Story = {
  render: (args) => {
    const initialData: Person[] = [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'complicated',
        progress: 10,
      },
    ]

    const columnHelper = createColumnHelper<Person>()
    const [data, _setData] = React.useState<Person[]>(initialData)

    const columns = [
      columnHelper.accessor('firstName', {
        header: () => 'First Name',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor((row) => row.lastName, {
        id: 'lastName',
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('age', {
        header: () => 'Age',
        cell: (info) => info.renderValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('visits', {
        header: () => <span>Visits</span>,
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('progress', {
        header: 'Profile Progress',
        size: 200,
        footer: (info) => info.column.id,
        enableSorting: false,
      }),
    ]

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    return (
      <Table {...args} table={table}>
        <TableHeader />
        <TableBody />
        <TableFooter />
      </Table>
    )
  },
}

export const HeaderGroups: Story = {
  render: (args) => {
    const data: Person[] = [
      {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'relationship',
        progress: 50,
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'single',
        progress: 80,
      },
      {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'complicated',
        progress: 10,
      },
    ]

    const columnHelper = createColumnHelper<Person>()

    const columns = [
      columnHelper.group({
        id: 'hello',
        header: () => <span>Hello</span>,
        // footer: props => props.column.id,
        columns: [
          columnHelper.accessor('firstName', {
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          }),
          columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          }),
        ],
      }),
      columnHelper.group({
        header: 'Info',
        footer: (props) => props.column.id,
        columns: [
          columnHelper.accessor('age', {
            header: () => 'Age',
            footer: (props) => props.column.id,
          }),
          columnHelper.group({
            header: 'More Info',
            columns: [
              columnHelper.accessor('visits', {
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id,
              }),
              columnHelper.accessor('status', {
                header: 'Status',
                footer: (props) => props.column.id,
              }),
              columnHelper.accessor('progress', {
                header: 'Profile Progress',
                footer: (props) => props.column.id,
              }),
            ],
          }),
        ],
      }),
    ]

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })
    return (
      <Table {...args} table={table}>
        <TableHeader />
        <TableBody />
        <TableFooter />
      </Table>
    )
  },
}

export const ColumnFilters: Story = {
  render: (_args) => {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

    const columns: ColumnDef<Person, any>[] = [
      {
        accessorKey: 'firstName',
        header: () => 'First Name',
        cell: (info) => info.getValue(),
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: () => <span>Full Name</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'visits',
        header: () => <span>Visits</span>,
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'status',
        header: () => 'Status',
        meta: {
          filterVariant: 'select',
        },
      },
      {
        accessorKey: 'progress',
        header: () => 'Profile Progress',
        meta: {
          filterVariant: 'range',
        },
      },
    ]

    const [data, _setData] = React.useState<Person[]>(() => makeData(5_000))

    const table = useReactTable({
      data,
      columns,
      filterFns: {},
      state: {
        columnFilters,
      },
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table table={table}>
        <TableHeader />
        <TableBody />
        <TableFooter />
        <TablePagination>
          <TableFirstPage />
          <TablePreviousPage />
          <TableNextPage />
          <TableLastPage />
        </TablePagination>
      </Table>
    )
  },
}

export const Search: Story = {
  render: (args) => {
    const columns: ColumnDef<Person, any>[] = [
      {
        accessorKey: 'id',
        filterFn: 'equalsString',
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        filterFn: 'includesString',
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
      },
    ]

    const [data, _setData] = React.useState<Person[]>(() => makeData(5_000))
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableHeader />
        <TableBody />
        <TableFooter />
        <TablePagination>
          <TableSearch />
          <TableFirstPage />
          <TablePreviousPage />
          <TableNextPage />
          <TableLastPage />
        </TablePagination>
      </Table>
    )
  },
}

export const Select: Story = {
  render: (args) => {
    const columns: ColumnDef<Person, any>[] = [
      {
        id: 'select',
        enableSorting: false,
        enableGlobalFilter: false,
        size: 10,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all"
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        ),
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        filterFn: 'includesString',
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
      },
    ]

    const [data, _setData] = React.useState<Person[]>(() => makeData(5_000))
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableHeader />
        <TableBody />
        <TableFooter />
        <p>Selected Rows: {table.getSelectedRowModel().rows.length}</p>
      </Table>
    )
  },
}

export const Pagination: Story = {
  render: (args) => {
    const columns: ColumnDef<Person, any>[] = [
      {
        id: 'select',
        size: 10,
        enableSorting: false,
        enableGlobalFilter: false,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all"
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        ),
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        header: () => 'First Name',
        filterFn: 'includesStringSensitive',
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        filterFn: 'includesString',
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
      },
    ]

    const [data, _setData] = React.useState<Person[]>(() => makeData(5_000))
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    })

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
        pagination,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableSearch />
        <TableContent>
          <TableHeader />
          <TableBody />
          <TableFooter />
        </TableContent>
        <TableNav>
          <TableResults>
            {(start, end, total) => (
              <span className="grow">
                Showing {start} to {end} of {total} results
              </span>
            )}
          </TableResults>
          <TablePagination />
        </TableNav>
      </Table>
    )
  },
}

export const Grid: Story = {
  args: {
    defaultView: 'grid',
  },
  render: (args) => {
    type Project = {
      id: string
      name: string
      status: 'not started' | 'in progress' | 'completed'
    }

    const columns: ColumnDef<Project, any>[] = [
      {
        accessorKey: 'name',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
    ]

    const testData: Project[] = Array.from({ length: 1000 }, (_, i) => ({
      id: `project-${i + 1}`,
      name: `Project ${i + 1}`,
      status: faker.helpers.shuffle<Project['status']>([
        'not started',
        'in progress',
        'completed',
      ])[0]!,
    }))

    const [data, _setData] = React.useState<Project[]>(testData)
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    })

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
        pagination,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableSearch />
        <TableBody />
        <TablePagination>
          <TableFirstPage />
          <TablePreviousPage />
          <TableNextPage />
          <TableLastPage />
          <TableResults>
            {(start, end, total) => (
              <span>
                Showing {start} to {end} of {total} results
              </span>
            )}
          </TableResults>
        </TablePagination>
      </Table>
    )
  },
}

export const ChangeView: Story = {
  render: (args) => {
    type Project = {
      id: string
      name: string
      status: 'not started' | 'in progress' | 'completed'
    }

    const columns: ColumnDef<Project, any>[] = [
      {
        accessorKey: 'name',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
    ]

    const testData: Project[] = Array.from({ length: 1000 }, (_, i) => ({
      id: `project-${i + 1}`,
      name: `Project ${i + 1}`,
      status: faker.helpers.shuffle<Project['status']>([
        'not started',
        'in progress',
        'completed',
      ])[0]!,
    }))

    const [data, _setData] = React.useState<Project[]>(testData)
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    })

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
        pagination,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableSearch />
        <TableBody />
        <TablePagination>
          <TableChangeView />
          <TableResults>
            {(start, end, total) => (
              <span>
                Showing {start} to {end} of {total} results
              </span>
            )}
          </TableResults>
        </TablePagination>
      </Table>
    )
  },
}

export const OverrideDefaultRowUI: Story = {
  render: (args) => {
    type Project = {
      id: string
      name: string
      status: 'not started' | 'in progress' | 'completed'
    }

    const columns: ColumnDef<Project, any>[] = [
      {
        accessorKey: 'name',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
    ]

    const testData: Project[] = Array.from({ length: 1000 }, (_, i) => ({
      id: `project-${i + 1}`,
      name: `Project ${i + 1}`,
      status: faker.helpers.shuffle<Project['status']>([
        'not started',
        'in progress',
        'completed',
      ])[0]!,
    }))

    const [data, _setData] = React.useState<Project[]>(testData)
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    })

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
        pagination,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    const CustomRowList: React.FC<{ row: any }> = ({ row }) => {
      return (
        <tr style={{ backgroundColor: 'darkgreen' }}>
          <td colSpan={columns.length}>{row.original.name} - Custom List Row</td>
        </tr>
      )
    }

    const CustomRowGrid: React.FC<{ row: any }> = ({ row }) => {
      return (
        <div
          style={{
            border: '1px solid black',
            padding: '8px',
            backgroundColor: 'darkgreen',
          }}
        >
          {row.original.name} - Custom Grid Row
        </div>
      )
    }

    return (
      <Table {...args} table={table}>
        <TableSearch />
        <TableBody rowGridOverride={CustomRowGrid} rowListOverride={CustomRowList} />
        <TablePagination>
          <TableChangeView />
          <TableFirstPage />
          <TablePreviousPage />
          <TableNextPage />
          <TableLastPage />
          <TableResults>
            {(start, end, total) => (
              <span>
                Showing {start} to {end} of {total} results
              </span>
            )}
          </TableResults>
        </TablePagination>
      </Table>
    )
  },
}

export const HeaderSorting: Story = {
  render: (args) => {
    const columns: ColumnDef<Person, any>[] = [
      {
        id: 'select',
        enableSorting: false,
        enableGlobalFilter: false,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all"
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label="Select row"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
        ),
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        filterFn: 'includesStringSensitive',
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        filterFn: 'includesString',
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
      },
    ]

    const [data, _setData] = React.useState<Person[]>(() => makeData(5_000))
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [pagination, setPagination] = React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 15,
    })

    const table = useReactTable({
      data,
      columns,
      state: {
        columnFilters,
        globalFilter,
        pagination,
      },
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onPaginationChange: setPagination,
      debugTable: true,
      debugHeaders: true,
      debugColumns: false,
    })

    return (
      <Table {...args} table={table}>
        <TableSearch />
        <TableHeader />
        <TableBody />
        <TableNav>
          <TableChangeView />
          <TablePagination />
          <TableResults>
            {(start, end, total) => (
              <span>
                Showing {start} to {end} of {total} results
              </span>
            )}
          </TableResults>
        </TableNav>
      </Table>
    )
  },
}
