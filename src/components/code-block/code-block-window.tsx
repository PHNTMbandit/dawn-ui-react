import { useCodeBlock } from './code-block'
import { cn } from '@/utils/cn'

type CodeBlockWindowProps = React.ComponentProps<'div'>

export const CodeBlockWindow = ({ className, children, ref, ...props }: CodeBlockWindowProps) => {
  const { currentValue } = useCodeBlock()

  return (
    <div className={cn('relative rounded-lg px-md py-sm', className)} ref={ref} {...props}>
      {children}
      <div dangerouslySetInnerHTML={{ __html: currentValue.content }} />
    </div>
  )
}
