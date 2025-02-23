'use client'
import { Textarea } from '@/components/ui/textarea'
import { type ReactElement, useRef } from 'react'

export function Chatbox(): ReactElement {
  const textareaRef = useRef({} as HTMLTextAreaElement)

  function adjustHeight(): void {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`
  }

  function resetHeight(): void {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = '98px'
  }

  return (
    <div className='relative w-full flex flex-col gap-2'>
      <Textarea
        ref={textareaRef}
        onInput={(): void => {
          adjustHeight()
        }}
        placeholder='Send a message...'
        className={
          'p-4 min-h-[24px] max-h-[calc(75dvh)] overflow-y-scroll overflow-x-hidden resize-none rounded-2xl !text-base bg-muted'
        }
        rows={1}
        autoFocus
      />
    </div>
  )
}
