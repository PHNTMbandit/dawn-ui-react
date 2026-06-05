import { SpinnerGapIcon } from '@phosphor-icons/react'
import React from 'react'
import { Combobox } from './combobox'
import { ComboboxChip } from './combobox-chip'
import { ComboboxChips } from './combobox-chips'
import { ComboboxCollection } from './combobox-collection'
import { ComboboxEmpty } from './combobox-empty'
import { ComboboxGroup } from './combobox-group'
import { ComboboxGroupLabel } from './combobox-group-label'
import { ComboboxInput } from './combobox-input'
import { ComboboxItem } from './combobox-item'
import { ComboboxList } from './combobox-list'
import { ComboboxPopup } from './combobox-popup'
import { ComboboxStatus } from './combobox-status'
import { ComboboxTrigger } from './combobox-trigger'
import { ComboboxValue } from './combobox-value'
import { ComboboxVirtualizedList } from './combobox-virtualized-list'
import { useFilter } from './combobox.types'

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { Virtualizer } from '@tanstack/react-virtual'

interface Fruit {
  label: string
  value: string
}

const fruits: Fruit[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pineapple', value: 'pineapple' },
  { label: 'Grape', value: 'grape' },
  { label: 'Mango', value: 'mango' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Blackberry', value: 'blackberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Peach', value: 'peach' },
  { label: 'Pear', value: 'pear' },
  { label: 'Plum', value: 'plum' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Cantaloupe', value: 'cantaloupe' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Papaya', value: 'papaya' },
  { label: 'Guava', value: 'guava' },
  { label: 'Lychee', value: 'lychee' },
  { label: 'Pomegranate', value: 'pomegranate' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Grapefruit', value: 'grapefruit' },
  { label: 'Passionfruit', value: 'passionfruit' },
]

interface ProgrammingLanguage {
  id: string
  value: string
}

const langs: ProgrammingLanguage[] = [
  { id: 'js', value: 'JavaScript' },
  { id: 'ts', value: 'TypeScript' },
  { id: 'py', value: 'Python' },
  { id: 'java', value: 'Java' },
  { id: 'cpp', value: 'C++' },
  { id: 'cs', value: 'C#' },
  { id: 'php', value: 'PHP' },
  { id: 'ruby', value: 'Ruby' },
  { id: 'go', value: 'Go' },
  { id: 'rust', value: 'Rust' },
  { id: 'swift', value: 'Swift' },
]

interface Country {
  code: string
  value: string
  continent: string
  label: string
}

const countries: Country[] = [
  { code: 'af', value: 'afghanistan', label: 'Afghanistan', continent: 'Asia' },
  { code: 'al', value: 'albania', label: 'Albania', continent: 'Europe' },
  { code: 'dz', value: 'algeria', label: 'Algeria', continent: 'Africa' },
  { code: 'ad', value: 'andorra', label: 'Andorra', continent: 'Europe' },
  { code: 'ao', value: 'angola', label: 'Angola', continent: 'Africa' },
  {
    code: 'ar',
    value: 'argentina',
    label: 'Argentina',
    continent: 'South America',
  },
  { code: 'am', value: 'armenia', label: 'Armenia', continent: 'Asia' },
  { code: 'au', value: 'australia', label: 'Australia', continent: 'Oceania' },
  { code: 'at', value: 'austria', label: 'Austria', continent: 'Europe' },
  { code: 'az', value: 'azerbaijan', label: 'Azerbaijan', continent: 'Asia' },
  {
    code: 'bs',
    value: 'bahamas',
    label: 'Bahamas',
    continent: 'North America',
  },
  { code: 'bh', value: 'bahrain', label: 'Bahrain', continent: 'Asia' },
  { code: 'bd', value: 'bangladesh', label: 'Bangladesh', continent: 'Asia' },
  {
    code: 'bb',
    value: 'barbados',
    label: 'Barbados',
    continent: 'North America',
  },
  { code: 'by', value: 'belarus', label: 'Belarus', continent: 'Europe' },
  { code: 'be', value: 'belgium', label: 'Belgium', continent: 'Europe' },
  { code: 'bz', value: 'belize', label: 'Belize', continent: 'North America' },
  { code: 'bj', value: 'benin', label: 'Benin', continent: 'Africa' },
  { code: 'bt', value: 'bhutan', label: 'Bhutan', continent: 'Asia' },
  {
    code: 'bo',
    value: 'bolivia',
    label: 'Bolivia',
    continent: 'South America',
  },
  {
    code: 'ba',
    value: 'bosnia-and-herzegovina',
    label: 'Bosnia and Herzegovina',
    continent: 'Europe',
  },
  { code: 'bw', value: 'botswana', label: 'Botswana', continent: 'Africa' },
  { code: 'br', value: 'brazil', label: 'Brazil', continent: 'South America' },
  { code: 'bn', value: 'brunei', label: 'Brunei', continent: 'Asia' },
  { code: 'bg', value: 'bulgaria', label: 'Bulgaria', continent: 'Europe' },
  {
    code: 'bf',
    value: 'burkina-faso',
    label: 'Burkina Faso',
    continent: 'Africa',
  },
  { code: 'bi', value: 'burundi', label: 'Burundi', continent: 'Africa' },
  { code: 'kh', value: 'cambodia', label: 'Cambodia', continent: 'Asia' },
  { code: 'cm', value: 'cameroon', label: 'Cameroon', continent: 'Africa' },
  { code: 'ca', value: 'canada', label: 'Canada', continent: 'North America' },
  { code: 'cv', value: 'cape-verde', label: 'Cape Verde', continent: 'Africa' },
  {
    code: 'cf',
    value: 'central-african-republic',
    label: 'Central African Republic',
    continent: 'Africa',
  },
  { code: 'td', value: 'chad', label: 'Chad', continent: 'Africa' },
  { code: 'cl', value: 'chile', label: 'Chile', continent: 'South America' },
  { code: 'cn', value: 'china', label: 'China', continent: 'Asia' },
  {
    code: 'co',
    value: 'colombia',
    label: 'Colombia',
    continent: 'South America',
  },
  { code: 'km', value: 'comoros', label: 'Comoros', continent: 'Africa' },
  { code: 'cg', value: 'congo', label: 'Congo', continent: 'Africa' },
  {
    code: 'cr',
    value: 'costa-rica',
    label: 'Costa Rica',
    continent: 'North America',
  },
  { code: 'hr', value: 'croatia', label: 'Croatia', continent: 'Europe' },
  { code: 'cu', value: 'cuba', label: 'Cuba', continent: 'North America' },
  { code: 'cy', value: 'cyprus', label: 'Cyprus', continent: 'Asia' },
  {
    code: 'cz',
    value: 'czech-republic',
    label: 'Czech Republic',
    continent: 'Europe',
  },
  { code: 'dk', value: 'denmark', label: 'Denmark', continent: 'Europe' },
  { code: 'dj', value: 'djibouti', label: 'Djibouti', continent: 'Africa' },
  {
    code: 'dm',
    value: 'dominica',
    label: 'Dominica',
    continent: 'North America',
  },
  {
    code: 'do',
    value: 'dominican-republic',
    label: 'Dominican Republic',
    continent: 'North America',
  },
  {
    code: 'ec',
    value: 'ecuador',
    label: 'Ecuador',
    continent: 'South America',
  },
  { code: 'eg', value: 'egypt', label: 'Egypt', continent: 'Africa' },
  {
    code: 'sv',
    value: 'el-salvador',
    label: 'El Salvador',
    continent: 'North America',
  },
  {
    code: 'gq',
    value: 'equatorial-guinea',
    label: 'Equatorial Guinea',
    continent: 'Africa',
  },
  { code: 'er', value: 'eritrea', label: 'Eritrea', continent: 'Africa' },
  { code: 'ee', value: 'estonia', label: 'Estonia', continent: 'Europe' },
  { code: 'et', value: 'ethiopia', label: 'Ethiopia', continent: 'Africa' },
  { code: 'fj', value: 'fiji', label: 'Fiji', continent: 'Oceania' },
  { code: 'fi', value: 'finland', label: 'Finland', continent: 'Europe' },
  { code: 'fr', value: 'france', label: 'France', continent: 'Europe' },
  { code: 'ga', value: 'gabon', label: 'Gabon', continent: 'Africa' },
  { code: 'gm', value: 'gambia', label: 'Gambia', continent: 'Africa' },
  { code: 'ge', value: 'georgia', label: 'Georgia', continent: 'Asia' },
  { code: 'de', value: 'germany', label: 'Germany', continent: 'Europe' },
  { code: 'gh', value: 'ghana', label: 'Ghana', continent: 'Africa' },
  { code: 'gr', value: 'greece', label: 'Greece', continent: 'Europe' },
  {
    code: 'gd',
    value: 'grenada',
    label: 'Grenada',
    continent: 'North America',
  },
  {
    code: 'gt',
    value: 'guatemala',
    label: 'Guatemala',
    continent: 'North America',
  },
  { code: 'gn', value: 'guinea', label: 'Guinea', continent: 'Africa' },
  {
    code: 'gw',
    value: 'guinea-bissau',
    label: 'Guinea-Bissau',
    continent: 'Africa',
  },
  { code: 'gy', value: 'guyana', label: 'Guyana', continent: 'South America' },
  { code: 'ht', value: 'haiti', label: 'Haiti', continent: 'North America' },
  {
    code: 'hn',
    value: 'honduras',
    label: 'Honduras',
    continent: 'North America',
  },
  { code: 'hu', value: 'hungary', label: 'Hungary', continent: 'Europe' },
  { code: 'is', value: 'iceland', label: 'Iceland', continent: 'Europe' },
  { code: 'in', value: 'india', label: 'India', continent: 'Asia' },
  { code: 'id', value: 'indonesia', label: 'Indonesia', continent: 'Asia' },
  { code: 'ir', value: 'iran', label: 'Iran', continent: 'Asia' },
  { code: 'iq', value: 'iraq', label: 'Iraq', continent: 'Asia' },
  { code: 'ie', value: 'ireland', label: 'Ireland', continent: 'Europe' },
  { code: 'il', value: 'israel', label: 'Israel', continent: 'Asia' },
  { code: 'it', value: 'italy', label: 'Italy', continent: 'Europe' },
  {
    code: 'jm',
    value: 'jamaica',
    label: 'Jamaica',
    continent: 'North America',
  },
  { code: 'jp', value: 'japan', label: 'Japan', continent: 'Asia' },
  { code: 'jo', value: 'jordan', label: 'Jordan', continent: 'Asia' },
  { code: 'kz', value: 'kazakhstan', label: 'Kazakhstan', continent: 'Asia' },
  { code: 'ke', value: 'kenya', label: 'Kenya', continent: 'Africa' },
  { code: 'kw', value: 'kuwait', label: 'Kuwait', continent: 'Asia' },
  { code: 'kg', value: 'kyrgyzstan', label: 'Kyrgyzstan', continent: 'Asia' },
  { code: 'la', value: 'laos', label: 'Laos', continent: 'Asia' },
  { code: 'lv', value: 'latvia', label: 'Latvia', continent: 'Europe' },
  { code: 'lb', value: 'lebanon', label: 'Lebanon', continent: 'Asia' },
  { code: 'ls', value: 'lesotho', label: 'Lesotho', continent: 'Africa' },
  { code: 'lr', value: 'liberia', label: 'Liberia', continent: 'Africa' },
  { code: 'ly', value: 'libya', label: 'Libya', continent: 'Africa' },
  {
    code: 'li',
    value: 'liechtenstein',
    label: 'Liechtenstein',
    continent: 'Europe',
  },
  { code: 'lt', value: 'lithuania', label: 'Lithuania', continent: 'Europe' },
  { code: 'lu', value: 'luxembourg', label: 'Luxembourg', continent: 'Europe' },
  { code: 'mg', value: 'madagascar', label: 'Madagascar', continent: 'Africa' },
  { code: 'mw', value: 'malawi', label: 'Malawi', continent: 'Africa' },
  { code: 'my', value: 'malaysia', label: 'Malaysia', continent: 'Asia' },
  { code: 'mv', value: 'maldives', label: 'Maldives', continent: 'Asia' },
  { code: 'ml', value: 'mali', label: 'Mali', continent: 'Africa' },
  { code: 'mt', value: 'malta', label: 'Malta', continent: 'Europe' },
  {
    code: 'mh',
    value: 'marshall-islands',
    label: 'Marshall Islands',
    continent: 'Oceania',
  },
  { code: 'mr', value: 'mauritania', label: 'Mauritania', continent: 'Africa' },
  { code: 'mu', value: 'mauritius', label: 'Mauritius', continent: 'Africa' },
  { code: 'mx', value: 'mexico', label: 'Mexico', continent: 'North America' },
  {
    code: 'fm',
    value: 'micronesia',
    label: 'Micronesia',
    continent: 'Oceania',
  },
  { code: 'md', value: 'moldova', label: 'Moldova', continent: 'Europe' },
  { code: 'mc', value: 'monaco', label: 'Monaco', continent: 'Europe' },
  { code: 'mn', value: 'mongolia', label: 'Mongolia', continent: 'Asia' },
  { code: 'me', value: 'montenegro', label: 'Montenegro', continent: 'Europe' },
  { code: 'ma', value: 'morocco', label: 'Morocco', continent: 'Africa' },
  { code: 'mz', value: 'mozambique', label: 'Mozambique', continent: 'Africa' },
  { code: 'mm', value: 'myanmar', label: 'Myanmar', continent: 'Asia' },
  { code: 'na', value: 'namibia', label: 'Namibia', continent: 'Africa' },
  { code: 'nr', value: 'nauru', label: 'Nauru', continent: 'Oceania' },
  { code: 'np', value: 'nepal', label: 'Nepal', continent: 'Asia' },
  {
    code: 'nl',
    value: 'netherlands',
    label: 'Netherlands',
    continent: 'Europe',
  },
  {
    code: 'nz',
    value: 'new-zealand',
    label: 'New Zealand',
    continent: 'Oceania',
  },
  {
    code: 'ni',
    value: 'nicaragua',
    label: 'Nicaragua',
    continent: 'North America',
  },
  { code: 'ne', value: 'niger', label: 'Niger', continent: 'Africa' },
  { code: 'ng', value: 'nigeria', label: 'Nigeria', continent: 'Africa' },
  { code: 'kp', value: 'north-korea', label: 'North Korea', continent: 'Asia' },
  {
    code: 'mk',
    value: 'north-macedonia',
    label: 'North Macedonia',
    continent: 'Europe',
  },
  { code: 'no', value: 'norway', label: 'Norway', continent: 'Europe' },
  { code: 'om', value: 'oman', label: 'Oman', continent: 'Asia' },
  { code: 'pk', value: 'pakistan', label: 'Pakistan', continent: 'Asia' },
  { code: 'pw', value: 'palau', label: 'Palau', continent: 'Oceania' },
  { code: 'ps', value: 'palestine', label: 'Palestine', continent: 'Asia' },
  { code: 'pa', value: 'panama', label: 'Panama', continent: 'North America' },
  {
    code: 'pg',
    value: 'papua-new-guinea',
    label: 'Papua New Guinea',
    continent: 'Oceania',
  },
  {
    code: 'py',
    value: 'paraguay',
    label: 'Paraguay',
    continent: 'South America',
  },
  { code: 'pe', value: 'peru', label: 'Peru', continent: 'South America' },
  { code: 'ph', value: 'philippines', label: 'Philippines', continent: 'Asia' },
  { code: 'pl', value: 'poland', label: 'Poland', continent: 'Europe' },
  { code: 'pt', value: 'portugal', label: 'Portugal', continent: 'Europe' },
  { code: 'qa', value: 'qatar', label: 'Qatar', continent: 'Asia' },
  { code: 'ro', value: 'romania', label: 'Romania', continent: 'Europe' },
  { code: 'ru', value: 'russia', label: 'Russia', continent: 'Europe' },
  { code: 'rw', value: 'rwanda', label: 'Rwanda', continent: 'Africa' },
  { code: 'ws', value: 'samoa', label: 'Samoa', continent: 'Oceania' },
  { code: 'sm', value: 'san-marino', label: 'San Marino', continent: 'Europe' },
  {
    code: 'sa',
    value: 'saudi-arabia',
    label: 'Saudi Arabia',
    continent: 'Asia',
  },
  { code: 'sn', value: 'senegal', label: 'Senegal', continent: 'Africa' },
  { code: 'rs', value: 'serbia', label: 'Serbia', continent: 'Europe' },
  { code: 'sc', value: 'seychelles', label: 'Seychelles', continent: 'Africa' },
  {
    code: 'sl',
    value: 'sierra-leone',
    label: 'Sierra Leone',
    continent: 'Africa',
  },
  { code: 'sg', value: 'singapore', label: 'Singapore', continent: 'Asia' },
  { code: 'sk', value: 'slovakia', label: 'Slovakia', continent: 'Europe' },
  { code: 'si', value: 'slovenia', label: 'Slovenia', continent: 'Europe' },
  {
    code: 'sb',
    value: 'solomon-islands',
    label: 'Solomon Islands',
    continent: 'Oceania',
  },
  { code: 'so', value: 'somalia', label: 'Somalia', continent: 'Africa' },
  {
    code: 'za',
    value: 'south-africa',
    label: 'South Africa',
    continent: 'Africa',
  },
  { code: 'kr', value: 'south-korea', label: 'South Korea', continent: 'Asia' },
  {
    code: 'ss',
    value: 'south-sudan',
    label: 'South Sudan',
    continent: 'Africa',
  },
  { code: 'es', value: 'spain', label: 'Spain', continent: 'Europe' },
  { code: 'lk', value: 'sri-lanka', label: 'Sri Lanka', continent: 'Asia' },
  { code: 'sd', value: 'sudan', label: 'Sudan', continent: 'Africa' },
  {
    code: 'sr',
    value: 'suriname',
    label: 'Suriname',
    continent: 'South America',
  },
  { code: 'se', value: 'sweden', label: 'Sweden', continent: 'Europe' },
  {
    code: 'ch',
    value: 'switzerland',
    label: 'Switzerland',
    continent: 'Europe',
  },
  { code: 'sy', value: 'syria', label: 'Syria', continent: 'Asia' },
  { code: 'tw', value: 'taiwan', label: 'Taiwan', continent: 'Asia' },
  { code: 'tj', value: 'tajikistan', label: 'Tajikistan', continent: 'Asia' },
  { code: 'tz', value: 'tanzania', label: 'Tanzania', continent: 'Africa' },
  { code: 'th', value: 'thailand', label: 'Thailand', continent: 'Asia' },
  { code: 'tl', value: 'timor-leste', label: 'Timor-Leste', continent: 'Asia' },
  { code: 'tg', value: 'togo', label: 'Togo', continent: 'Africa' },
  { code: 'to', value: 'tonga', label: 'Tonga', continent: 'Oceania' },
  {
    code: 'tt',
    value: 'trinidad-and-tobago',
    label: 'Trinidad and Tobago',
    continent: 'North America',
  },
  { code: 'tn', value: 'tunisia', label: 'Tunisia', continent: 'Africa' },
  { code: 'tr', value: 'turkey', label: 'Turkey', continent: 'Asia' },
  {
    code: 'tm',
    value: 'turkmenistan',
    label: 'Turkmenistan',
    continent: 'Asia',
  },
  { code: 'tv', value: 'tuvalu', label: 'Tuvalu', continent: 'Oceania' },
  { code: 'ug', value: 'uganda', label: 'Uganda', continent: 'Africa' },
  { code: 'ua', value: 'ukraine', label: 'Ukraine', continent: 'Europe' },
  {
    code: 'ae',
    value: 'united-arab-emirates',
    label: 'United Arab Emirates',
    continent: 'Asia',
  },
  {
    code: 'gb',
    value: 'united-kingdom',
    label: 'United Kingdom',
    continent: 'Europe',
  },
  {
    code: 'us',
    value: 'united-states',
    label: 'United States',
    continent: 'North America',
  },
  {
    code: 'uy',
    value: 'uruguay',
    label: 'Uruguay',
    continent: 'South America',
  },
  { code: 'uz', value: 'uzbekistan', label: 'Uzbekistan', continent: 'Asia' },
  { code: 'vu', value: 'vanuatu', label: 'Vanuatu', continent: 'Oceania' },
  {
    code: 'va',
    value: 'vatican-city',
    label: 'Vatican City',
    continent: 'Europe',
  },
  {
    code: 've',
    value: 'venezuela',
    label: 'Venezuela',
    continent: 'South America',
  },
  { code: 'vn', value: 'vietnam', label: 'Vietnam', continent: 'Asia' },
  { code: 'ye', value: 'yemen', label: 'Yemen', continent: 'Asia' },
  { code: 'zm', value: 'zambia', label: 'Zambia', continent: 'Africa' },
  { code: 'zw', value: 'zimbabwe', label: 'Zimbabwe', continent: 'Africa' },
]

export default {
  title: 'Components/Combobox',
  component: Combobox,
  subcomponents: {
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxPopup,
  },
  parameters: {
    docs: {
      subtitle: 'A Combobox component for selecting options from a dropdown list.',
      description: {
        component:
          'The Combobox component allows users to select an option from a dropdown list. It provides a user-friendly interface for selecting options, with support for keyboard navigation and accessibility features. The Combobox can be used in various contexts, such as forms, filters, and search inputs.',
      },
    },
  },
  args: {
    items: fruits,
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Select an option" />
      <ComboboxPopup>
        <ComboboxEmpty>No options found</ComboboxEmpty>
        <ComboboxList>
          {(item: Fruit) => (
            <ComboboxItem key={item.value} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
} as Meta<typeof Combobox>

type Story = StoryObj<typeof Combobox>

export const Default: Story = {}

export const MultipleSelection: Story = {
  args: {
    items: langs,
    multiple: true,
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput className={'max-w-[300px]'} placeholder={'e.g. Typescript'}>
        <ComboboxChips>
          <ComboboxValue>
            {(value: ProgrammingLanguage[]) => (
              <React.Fragment>
                {value.map((lang) => (
                  <ComboboxChip aria-label={lang.value} key={lang.id}>
                    {lang.value}
                  </ComboboxChip>
                ))}
              </React.Fragment>
            )}
          </ComboboxValue>
        </ComboboxChips>
      </ComboboxInput>
      <ComboboxPopup>
        <ComboboxEmpty>No options found</ComboboxEmpty>
        <ComboboxList>
          {(lang: ProgrammingLanguage) => (
            <ComboboxItem key={lang.id} value={lang}>
              {lang.value}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
}

export const InputInsidePopup: Story = {
  args: {
    items: countries,
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxTrigger placeholder="Select a country" />
      <ComboboxPopup align="start" sideOffset={4}>
        <ComboboxInput inline />
        <ComboboxEmpty>No options found</ComboboxEmpty>
        <ComboboxList>
          {(country: Country) => (
            <ComboboxItem key={country.code} value={country}>
              {country.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
}

interface Produce {
  id: string
  label: string
  group: 'Fruits' | 'Vegetables'
}

interface ProduceGroup {
  value: string
  items: Produce[]
}

const produceData: Produce[] = [
  { id: 'fruit-apple', label: 'Apple', group: 'Fruits' },
  { id: 'fruit-banana', label: 'Banana', group: 'Fruits' },
  { id: 'fruit-mango', label: 'Mango', group: 'Fruits' },
  { id: 'fruit-kiwi', label: 'Kiwi', group: 'Fruits' },
  { id: 'fruit-grape', label: 'Grape', group: 'Fruits' },
  { id: 'fruit-orange', label: 'Orange', group: 'Fruits' },
  { id: 'fruit-strawberry', label: 'Strawberry', group: 'Fruits' },
  { id: 'fruit-watermelon', label: 'Watermelon', group: 'Fruits' },
  { id: 'veg-broccoli', label: 'Broccoli', group: 'Vegetables' },
  { id: 'veg-carrot', label: 'Carrot', group: 'Vegetables' },
  { id: 'veg-cauliflower', label: 'Cauliflower', group: 'Vegetables' },
  { id: 'veg-cucumber', label: 'Cucumber', group: 'Vegetables' },
  { id: 'veg-kale', label: 'Kale', group: 'Vegetables' },
  { id: 'veg-pepper', label: 'Bell pepper', group: 'Vegetables' },
  { id: 'veg-spinach', label: 'Spinach', group: 'Vegetables' },
  { id: 'veg-zucchini', label: 'Zucchini', group: 'Vegetables' },
]

function groupProduce(items: Produce[]): ProduceGroup[] {
  const groups: Record<string, Produce[]> = {}
  items.forEach((item) => {
    if (!groups[item.group]) {
      groups[item.group] = []
    }
    groups[item.group].push(item)
  })
  const order = ['Fruits', 'Vegetables']
  return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedProduce: ProduceGroup[] = groupProduce(produceData)

export const GroupedOptions: Story = {
  args: {
    items: groupedProduce,
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxInput placeholder="Select a produce" />
      <ComboboxPopup>
        <ComboboxEmpty>No options found</ComboboxEmpty>
        <ComboboxList>
          {(group: ProduceGroup) => (
            <ComboboxGroup items={group.items} key={group.value}>
              <ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
              <ComboboxCollection>
                {(item: Produce) => (
                  <ComboboxItem key={item.id} value={item}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  ),
}

interface DirectoryUser {
  id: string
  name: string
  username: string
  email: string
  title: string
}

const allUsers: DirectoryUser[] = [
  {
    id: 'leslie-alexander',
    name: 'Leslie Alexander',
    username: 'leslie',
    email: 'leslie.alexander@example.com',
    title: 'Product Manager',
  },
  {
    id: 'kathryn-murphy',
    name: 'Kathryn Murphy',
    username: 'kathryn',
    email: 'kathryn.murphy@example.com',
    title: 'Marketing Lead',
  },
  {
    id: 'courtney-henry',
    name: 'Courtney Henry',
    username: 'courtney',
    email: 'courtney.henry@example.com',
    title: 'Design Systems',
  },
  {
    id: 'michael-foster',
    name: 'Michael Foster',
    username: 'michael',
    email: 'michael.foster@example.com',
    title: 'Engineering Manager',
  },
  {
    id: 'lindsay-walton',
    name: 'Lindsay Walton',
    username: 'lindsay',
    email: 'lindsay.walton@example.com',
    title: 'Product Designer',
  },
  {
    id: 'tom-cook',
    name: 'Tom Cook',
    username: 'tom',
    email: 'tom.cook@example.com',
    title: 'Frontend Engineer',
  },
  {
    id: 'whitney-francis',
    name: 'Whitney Francis',
    username: 'whitney',
    email: 'whitney.francis@example.com',
    title: 'Customer Success',
  },
  {
    id: 'jacob-jones',
    name: 'Jacob Jones',
    username: 'jacob',
    email: 'jacob.jones@example.com',
    title: 'Security Engineer',
  },
  {
    id: 'arlene-mccoy',
    name: 'Arlene McCoy',
    username: 'arlene',
    email: 'arlene.mccoy@example.com',
    title: 'Data Analyst',
  },
  {
    id: 'marvin-mckinney',
    name: 'Marvin McKinney',
    username: 'marvin',
    email: 'marvin.mckinney@example.com',
    title: 'QA Specialist',
  },
  {
    id: 'eleanor-pena',
    name: 'Eleanor Pena',
    username: 'eleanor',
    email: 'eleanor.pena@example.com',
    title: 'Operations',
  },
  {
    id: 'jerome-bell',
    name: 'Jerome Bell',
    username: 'jerome',
    email: 'jerome.bell@example.com',
    title: 'DevOps Engineer',
  },
]

async function searchUsers(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<{ users: DirectoryUser[]; error: string | null }> {
  // Simulate network delay
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 500 + 100)
  })

  // Simulate occasional network errors (1% chance)
  if (Math.random() < 0.01 || query === 'will_error') {
    return {
      users: [],
      error: 'Failed to fetch people. Please try again.',
    }
  }

  const users = allUsers.filter((user) => {
    return (
      filter(user.name, query) ||
      filter(user.username, query) ||
      filter(user.email, query) ||
      filter(user.title, query)
    )
  })

  return {
    users,
    error: null,
  }
}

export const AsyncLoading: Story = {
  render: (args) => {
    const [searchResults, setSearchResults] = React.useState<DirectoryUser[]>([])
    const [selectedValue, setSelectedValue] = React.useState<DirectoryUser | null>(null)
    const [searchValue, setSearchValue] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)
    const [isPending, startTransition] = React.useTransition()

    const { contains } = useFilter()

    const abortControllerRef = React.useRef<AbortController | null>(null)

    const trimmedSearchValue = searchValue.trim()

    const items = React.useMemo(() => {
      if (!selectedValue || searchResults.some((user) => user.id === selectedValue.id)) {
        return searchResults
      }

      return [...searchResults, selectedValue]
    }, [searchResults, selectedValue])

    function getStatus() {
      if (isPending) {
        return (
          <div className="flex items-center gap-3xs">
            <SpinnerGapIcon aria-hidden className="size-xs animate-spin" weight="bold" />
            Searching…
          </div>
        )
      }

      if (error) {
        return error
      }

      if (trimmedSearchValue === '') {
        return selectedValue ? null : 'Start typing to search people…'
      }

      if (searchResults.length === 0) {
        return `No matches for "${trimmedSearchValue}".`
      }

      return null
    }

    function getEmptyMessage() {
      if (trimmedSearchValue === '' || isPending || searchResults.length > 0 || error) {
        return null
      }
      return 'Try a different search term.'
    }

    return (
      <Combobox
        {...args}
        filter={null}
        items={items}
        itemToStringLabel={(user) => (user as DirectoryUser).name}
        onInputValueChange={(nextSearchValue, { reason }) => {
          setSearchValue(nextSearchValue)

          if (nextSearchValue === '') {
            setSearchResults([])
            setError(null)
            return
          }

          if (reason === 'item-press') {
            return
          }

          const controller = new AbortController()
          abortControllerRef.current?.abort()
          abortControllerRef.current = controller

          startTransition(async () => {
            setError(null)

            const result = await searchUsers(nextSearchValue, contains)

            if (controller.signal.aborted) {
              return
            }

            startTransition(() => {
              setSearchResults(result.users)
              setError(result.error)
            })
          })
        }}
        onOpenChangeComplete={(open) => {
          if (!open && selectedValue) {
            setSearchResults([selectedValue])
          }
        }}
        onValueChange={(nextSelectedValue) => {
          setSelectedValue(nextSelectedValue as DirectoryUser | null)
          setSearchValue('')
          setError(null)
        }}
      >
        <ComboboxInput placeholder="e.g. Michael" />
        <ComboboxPopup>
          <ComboboxStatus>{getStatus()}</ComboboxStatus>
          <ComboboxEmpty>{getEmptyMessage()}</ComboboxEmpty>
          <ComboboxList>
            {(user: DirectoryUser) => (
              <ComboboxItem key={user.id} value={user}>
                <div className="flex flex-col gap-3xs">
                  <div className="text-[0.95rem] font-medium">{user.name}</div>
                  <div className="flex flex-wrap gap-2xs text-[0.8125rem] text-on-surface-variant">
                    <span className="opacity-80">@{user.username}</span>
                    <span>{user.title}</span>
                  </div>
                  <div className="text-xs opacity-80">{user.email}</div>
                </div>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxPopup>
      </Combobox>
    )
  },
}

export const Virtualized: Story = {
  args: {
    items: countries,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    const virtualizerRef = React.useRef<Virtualizer<HTMLDivElement, HTMLDivElement> | null>(null)

    return (
      <Combobox
        {...args}
        virtualized
        items={countries}
        open={open}
        onOpenChange={setOpen}
        onItemHighlighted={(item, { reason, index }) => {
          const virtualizer = virtualizerRef.current

          if (!item || !virtualizer) {
            return
          }

          const isStart = index === 0
          const isEnd = index === virtualizer.options.count - 1
          const shouldScroll = reason === 'none' || (reason === 'keyboard' && (isStart || isEnd))

          if (shouldScroll) {
            queueMicrotask(() => {
              virtualizer.scrollToIndex(index, { align: isEnd ? 'start' : 'end' })
            })
          }
        }}
      >
        <ComboboxInput placeholder="Select a country" />
        <ComboboxPopup align="start" sideOffset={4}>
          <ComboboxEmpty>No options found</ComboboxEmpty>
          <ComboboxVirtualizedList estimateSize={195} open={open} virtualizerRef={virtualizerRef}>
            {(country: Country) => <>{country.label}</>}
          </ComboboxVirtualizedList>
        </ComboboxPopup>
      </Combobox>
    )
  },
}
