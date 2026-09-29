import { FileArrowUpIcon } from '@phosphor-icons/react'
import { Dropzone } from './dropzone'
import { DropzoneActions } from './dropzone-actions'
import { DropzoneClear } from './dropzone-clear'
import { DropzoneConfirm } from './dropzone-confirm'
import { DropzoneContainer } from './dropzone-container'
import { DropzoneError } from './dropzone-error'
import { DropzoneFileLimit } from './dropzone-file-limit'
import { DropzoneFileSizeLimit } from './dropzone-file-size-limit'
import { DropzoneFiles } from './dropzone-files'
import { DropzoneFilesHeader } from './dropzone-files-header'
import { DropzoneFilesList } from './dropzone-files-list'
import { DropzoneFilesTitle } from './dropzone-files-title'
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
    onConfirm: (files) => {
      alert(`Confirmed ${files.length} file${files.length === 1 ? '' : 's'}.`)
    },
  },
  render: (args) => (
    <Dropzone {...args} className="w-[900px]">
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
      <DropzoneFiles>
        <DropzoneFilesHeader>
          <DropzoneFilesTitle>Uploaded Files</DropzoneFilesTitle>
          <DropzoneFileLimit />
        </DropzoneFilesHeader>
        <DropzoneFilesList />
      </DropzoneFiles>
      <DropzoneActions>
        <DropzoneClear>Clear</DropzoneClear>
        <DropzoneConfirm>Confirm</DropzoneConfirm>
      </DropzoneActions>
    </Dropzone>
  ),
} as Meta<typeof Dropzone>

type Story = StoryObj<typeof Dropzone>

export const Playground: Story = {}
export const SingleFile: Story = {
  args: {
    multiple: false,
    maxFiles: 1,
  },
}

export const CustomErrorMessages: Story = {
  args: {
    maxFilesErrorLabel: (maxFiles) => `You can only upload up to ${maxFiles} files.`,
    maxFileSizeErrorLabel: (fileName, maxFileSize) =>
      `The file "${fileName}" exceeds the maximum size of ${maxFileSize}.`,
  },
}

export const UploadProgress: Story = {
  args: {
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
}
