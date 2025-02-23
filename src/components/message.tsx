import type { ReactElement } from 'react'
import type { Role } from '#lib/role'

interface Props {
  role: Role
  content: string
}

export function Messge({ role, content }: Props): ReactElement {
  return (
    <div
      className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`p-2 my-1 text-sm rounded-lg ${
          role === 'user'
            ? 'bg-primary text-white'
            : 'text-gray-500 bg-transparent'
        }`}
      >
        {content}
      </div>
    </div>
  )
}
