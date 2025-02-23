'use client'
import type { ReactElement } from 'react'
import { AppSidebar } from '#components/app-sidebar'
import { Chat } from '#components/chat'
import { SidebarInset, SidebarProvider } from '#components/ui/sidebar'

export default function Page(): ReactElement {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Chat />
      </SidebarInset>
    </SidebarProvider>
  )
}
