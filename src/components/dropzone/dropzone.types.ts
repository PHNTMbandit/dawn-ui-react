export type DropzoneContainerProps = React.ComponentProps<'div'> & {
  children?: React.ReactNode
}
export type DropzoneErrorProps = React.ComponentProps<'p'>
export type DropzoneFileListProps = React.ComponentProps<'ul'>
export type DropzoneFileSizeLimitProps = React.ComponentProps<'span'>
export type DropzoneFormatsProps = React.ComponentProps<'span'>
export type DropzoneHeadingProps = React.ComponentProps<'span'>
export type DropzoneIconProps = React.ComponentProps<'div'>
export type DropzoneInfoProps = React.ComponentProps<'div'>
export type DropzoneSubtitleProps = React.ComponentProps<'span'>
export type DropzoneTriggerProps = React.ComponentProps<'button'>
export type DropzoneProps = React.ComponentProps<'input'> & {
  children?: React.ReactNode
  maxFiles?: number
  maxFileSize?: number
  maxFilesErrorLabel?: (maxFiles: number) => string
  maxFileSizeErrorLabel?: (fileName: string, maxFileSize: string) => string
  onUpload?: (file: File, onProgress: (percent: number) => void) => void | Promise<void>
}
