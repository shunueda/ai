import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'
import { Plus } from 'lucide-react'
import type { ComponentProps, ReactElement } from 'react'
import { Button } from '#components/ui/button'

const data = [
  {
    title: 'Chats',
    url: '#',
    items: [
      {
        title: 'Installation',
        url: '#'
      },
      {
        title: 'Project Structure',
        url: '#'
      }
    ]
  }
]

export function AppSidebar({
  ...props
}: ComponentProps<typeof Sidebar>): ReactElement {
  return (
    <Sidebar {...props}>
      <SidebarHeader className='p-4'>
        <h2 className='text-lg font-semibold'>AI</h2>
        <Button size='sm' variant='outline'>
          <Plus className='h-4 w-4' />
          New Chat
        </Button>
      </SidebarHeader>{' '}
      <SidebarContent>
        {data.map(item => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={false}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
