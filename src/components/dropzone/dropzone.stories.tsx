import { FileArrowUpIcon } from '@phosphor-icons/react'
import { Dropzone } from './dropzone'
import { DropzoneContainer } from './dropzone-container'
import { DropzoneError } from './dropzone-error'
import { DropzoneFileList } from './dropzone-file-list'
import { DropzoneFileSizeLimit } from './dropzone-file-size-limit'
import { DropzoneFormats } from './dropzone-formats'
import { DropzoneHeading } from './dropzone-heading'
import { DropzoneIcon } from './dropzone-icon'
import { DropzoneInfo } from './dropzone-info'
import { DropzoneSubtitle } from './dropzone-subtitle'
import { DropzoneTrigger } from './dropzone-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
  args: {
    accept: '.jpg,.png,.pdf',
    maxFiles: 3,
    maxFileSize: 200000000,
    multiple: true,
    onUpload: (_file, onProgress) => {
      let percent = 0
      const interval = setInterval(() => {
        percent += 20
        onProgress(percent)

        if (percent >= 100) {
          clearInterval(interval)
        }
      }, 300)
    },
  },
  render: (args) => (
    <Dropzone {...args} className="h-[300px] w-[900px]">
      <DropzoneContainer>
        <DropzoneIcon>
          <FileArrowUpIcon />
        </DropzoneIcon>
        <DropzoneInfo>
          <DropzoneHeading>
            <DropzoneTrigger>Click here</DropzoneTrigger> to upload your files or drag and drop them
            into this area.
          </DropzoneHeading>
          <DropzoneSubtitle>
            Accepted formats: <DropzoneFormats /> (<DropzoneFileSizeLimit /> each)
          </DropzoneSubtitle>
        </DropzoneInfo>
      </DropzoneContainer>
      <DropzoneError />
      <DropzoneFileList />
    </Dropzone>
  ),
} as Meta<typeof Dropzone>

type Story = StoryObj<typeof Dropzone>

export const Playground: Story = {}
