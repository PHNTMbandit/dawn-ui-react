import { FileCssIcon, FileJsIcon, FileTsIcon } from '@phosphor-icons/react'
import { codeToHtml } from 'shiki/bundle/web'
import { CodeBlock } from './code-block'
import { CodeBlockActions } from './code-block-actions'
import { CodeBlockCopy } from './code-block-copy'
import { CodeBlockDownload } from './code-block-download'
import { CodeBlockHeader } from './code-block-header'
import { CodeBlockName } from './code-block-name'
import { CodeBlockSelect } from './code-block-select'
import { CodeBlockTabs } from './code-block-tabs'
import { CodeBlockWindow } from './code-block-window'

import type { CodeBlockValue } from './code-block.types'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { BundledLanguage } from 'shiki/bundle/web'

async function highlightCode(code: string, lang: BundledLanguage): Promise<string> {
  return await codeToHtml(code, {
    lang: lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [
      {
        pre: (node) => {
          node.properties.style = ''
          return node
        },
      },
    ],
  })
}

const data: CodeBlockValue[] = [
  {
    id: '1',
    icon: <FileJsIcon weight="bold" />,
    content: await highlightCode(
      `const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    console.log('User data:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};`,
      'javascript',
    ),
    label: 'JavaScript',
    name: 'api.js',
  },
  {
    id: '2',
    icon: <FileTsIcon weight="bold" />,
    content: await highlightCode(
      `interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchUserData(userId: string): Promise<User> {
  const response = await fetch(\`/api/users/\${userId}\`);
  if (!response.ok) throw new Error('User not found');
  return response.json();
}`,
      'typescript',
    ),
    label: 'TypeScript',
    name: 'types.ts',
  },
  {
    id: '3',
    icon: <FileCssIcon weight="bold" />,
    content: await highlightCode(
      `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

.button {
  background-color: #0066cc;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0052a3;
}`,
      'css',
    ),
    label: 'CSS',
    name: 'styles.css',
  },
]

export default {
  title: 'Components/Code Block',
  component: CodeBlock,
  subcomponents: {
    CodeBlockHeader,
    CodeBlockWindow,
    CodeBlockCopy,
    CodeBlockSelect,
    CodeBlockTabs,
    CodeBlockName,
    CodeBlockActions,
    CodeBlockDownload,
  },
  argTypes: {
    items: {
      description:
        'Array of code block values containing id, label, and content for each tab or select option.',
      table: {
        type: { summary: 'CodeBlockValue[]' },
      },
    },
    defaultValue: {
      description: 'The initially selected code block value from the items array.',
      table: {
        type: { summary: 'CodeBlockValue' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A container for displaying formatted code snippets with optional navigation.',
      description: {
        component:
          'The CodeBlock component provides a structured way to display code snippets with support for multiple languages or versions. It includes subcomponents for headers, navigation (tabs or select), and copy functionality, allowing for a customizable and interactive code display experience.',
      },
    },
  },
  args: {
    defaultValue: data[0],
    items: data,
  },
} satisfies Meta<typeof CodeBlock>

type Story = StoryObj<typeof CodeBlock>

// ─── Playground ──────────────────────────────────────────────────────────────

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for the CodeBlock component. Combine navigation patterns with header elements to suit your use case.',
      },
    },
  },
  render: (args) => (
    <CodeBlock className="w-[800px]" {...args}>
      <CodeBlockHeader>
        <CodeBlockSelect />
        <CodeBlockName />
      </CodeBlockHeader>
      <CodeBlockWindow>
        <CodeBlockActions>
          <CodeBlockDownload />
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockWindow>
    </CodeBlock>
  ),
}

// ─── Navigation Patterns ─────────────────────────────────────────────────────

export const Select: Story = {
  name: 'Navigation / Select',
  parameters: {
    docs: {
      description: {
        story:
          'Uses a dropdown select menu for switching between code snippets. Ideal when screen space is limited  or when there are many options.',
      },
    },
  },
  render: (args) => (
    <CodeBlock className="w-[800px]" {...args}>
      <CodeBlockHeader>
        <CodeBlockSelect />
        <CodeBlockName />
      </CodeBlockHeader>
      <CodeBlockWindow>
        <CodeBlockActions>
          <CodeBlockDownload />
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockWindow>
    </CodeBlock>
  ),
}

export const Tabs: Story = {
  name: 'Navigation / Tabs',
  parameters: {
    docs: {
      description: {
        story:
          'Uses inline tabs for switching between code snippets. Best for a small number of options where all choices should be visible.',
      },
    },
  },
  render: (args) => (
    <CodeBlock className="w-[800px]" {...args}>
      <CodeBlockHeader>
        <CodeBlockTabs />
        <CodeBlockName />
      </CodeBlockHeader>
      <CodeBlockWindow>
        <CodeBlockActions>
          <CodeBlockDownload />
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockWindow>
    </CodeBlock>
  ),
}

// ─── Layout Variations ───────────────────────────────────────────────────────

export const NoHeader: Story = {
  name: 'Layout / No Header',
  parameters: {
    docs: {
      description: {
        story:
          'A minimal code block without a header. Use when displaying a single code snippet that does not   require navigation or labelling.',
      },
    },
  },
  render: (args) => (
    <CodeBlock className="w-[800px]" {...args}>
      <CodeBlockWindow>
        <CodeBlockActions>
          <CodeBlockDownload />
          <CodeBlockCopy />
        </CodeBlockActions>
      </CodeBlockWindow>
    </CodeBlock>
  ),
}
