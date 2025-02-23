import './globals.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { ReactElement } from 'react'
import { cn } from '#lib/utils'

export default async function Layout({
  children
}: {
  children: ReactElement
}): Promise<ReactElement> {
  return (
    <html
      lang='en'
      className={cn(GeistSans.variable, GeistMono.variable, 'antialiased')}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
