import { GlobeIcon } from 'lucide-react'
import type { ReactElement } from 'react'
import { Chatbox } from '#components/chatbox'
import { Messge } from '#components/message'
import { Button } from '#components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '#components/ui/select'
import { Role } from '#lib/role'

type Message = {
  role: Role
  content: string
}

const messages: Message[] = [
  { role: Role.USER, content: 'What is the meaning of life?' },
  {
    role: Role.SYSTEM,
    content:
      'Next.js offers several advantages, especially for building modern web applications. Here are the key benefits:\n' +
      '\n' +
      '1. **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Next.js supports both SSR and SSG out of the box, improving SEO, load times, and user experience.\n' +
      '\n' +
      '2. **Hybrid Rendering:** You can mix and match static generation and server-side rendering within the same application, allowing for flexibility based on the page’s needs.\n' +
      '\n' +
      '3. **Automatic Code Splitting:** Next.js automatically splits your code into smaller bundles, which reduces the initial load time and improves performance.\n' +
      '\n' +
      '4. **Built-in Routing:** Next.js provides a file-based routing system, eliminating the need for external routing libraries like React Router. Each file in the `pages` directory automatically becomes a route.\n' +
      '\n' +
      '5. **API Routes:** You can create backend endpoints directly in your Next.js application, avoiding the need for a separate backend server in some cases.\n' +
      '\n' +
      '6. **Image Optimization:** The `next/image` component provides automatic image optimization, including lazy loading, resizing, and format conversion.\n' +
      '\n' +
      '7. **Incremental Static Regeneration (ISR):** Allows you to update static content after the build process, keeping static sites fresh without a full rebuild.\n' +
      '\n' +
      '8. **Performance:** Next.js provides features like automatic static optimization, fast refresh, and in-built support for TypeScript, which contribute to overall performance gains.\n' +
      '\n' +
      '9. **SEO Benefits:** With SSR and SSG, Next.js improves SEO by ensuring that content is crawlable by search engines.\n' +
      '\n' +
      '10. **Development Experience:** Hot reloading, rich error messages, and extensive documentation contribute to a smooth development process.\n' +
      '\n' +
      '11. **Versatile Data Fetching:** Supports various data fetching methods (`getStaticProps`, `getServerSideProps`, `getInitialProps`, and client-side fetching) to handle data in different scenarios.\n' +
      '\n' +
      '12. **Built-in CSS & CSS-in-JS Support:** Supports global CSS, CSS Modules, and popular styling solutions like Styled Components and Emotion.\n' +
      '\n' +
      '13. **Large Ecosystem & Community:** Backed by Vercel, Next.js has a robust ecosystem, frequent updates, and a large community.\n' +
      '\n' +
      '14. **Edge Functions & Middleware:** Next.js supports edge computing, allowing you to run code at the edge, improving performance for global audiences.\n' +
      '\n' +
      'Overall, Next.js is a powerful framework for building fast, scalable, and SEO-friendly web applications with minimal configuration and maximum flexibility.'
  },
  { role: Role.USER, content: 'What is the meaning of life?' },
  {
    role: Role.SYSTEM,
    content:
      'Next.js offers several advantages, especially for building modern web applications. Here are the key benefits:\n' +
      '\n' +
      '1. **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Next.js supports both SSR and SSG out of the box, improving SEO, load times, and user experience.\n' +
      '\n' +
      '2. **Hybrid Rendering:** You can mix and match static generation and server-side rendering within the same application, allowing for flexibility based on the page’s needs.\n' +
      '\n' +
      '3. **Automatic Code Splitting:** Next.js automatically splits your code into smaller bundles, which reduces the initial load time and improves performance.\n' +
      '\n' +
      '4. **Built-in Routing:** Next.js provides a file-based routing system, eliminating the need for external routing libraries like React Router. Each file in the `pages` directory automatically becomes a route.\n' +
      '\n' +
      '5. **API Routes:** You can create backend endpoints directly in your Next.js application, avoiding the need for a separate backend server in some cases.\n' +
      '\n' +
      '6. **Image Optimization:** The `next/image` component provides automatic image optimization, including lazy loading, resizing, and format conversion.\n' +
      '\n' +
      '7. **Incremental Static Regeneration (ISR):** Allows you to update static content after the build process, keeping static sites fresh without a full rebuild.\n' +
      '\n' +
      '8. **Performance:** Next.js provides features like automatic static optimization, fast refresh, and in-built support for TypeScript, which contribute to overall performance gains.\n' +
      '\n' +
      '9. **SEO Benefits:** With SSR and SSG, Next.js improves SEO by ensuring that content is crawlable by search engines.\n' +
      '\n' +
      '10. **Development Experience:** Hot reloading, rich error messages, and extensive documentation contribute to a smooth development process.\n' +
      '\n' +
      '11. **Versatile Data Fetching:** Supports various data fetching methods (`getStaticProps`, `getServerSideProps`, `getInitialProps`, and client-side fetching) to handle data in different scenarios.\n' +
      '\n' +
      '12. **Built-in CSS & CSS-in-JS Support:** Supports global CSS, CSS Modules, and popular styling solutions like Styled Components and Emotion.\n' +
      '\n' +
      '13. **Large Ecosystem & Community:** Backed by Vercel, Next.js has a robust ecosystem, frequent updates, and a large community.\n' +
      '\n' +
      '14. **Edge Functions & Middleware:** Next.js supports edge computing, allowing you to run code at the edge, improving performance for global audiences.\n' +
      '\n' +
      'Overall, Next.js is a powerful framework for building fast, scalable, and SEO-friendly web applications with minimal configuration and maximum flexibility.'
  }
]

export function Chat(): ReactElement {
  return (
    <section className='px-4 relative mx-auto bg-background w-full md:max-w-3xl h-full'>
      <div className='h-[8vh]'>
        <div className='flex flex-row items-center h-full'>
          <Select defaultValue='light'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
          <Button variant='ghost' className='hover:bg-zinc-200'>
            <GlobeIcon /> Search
          </Button>
        </div>
      </div>
      <div className='h-[82vh] overflow-y-scroll no-scrollbar'>
        {messages.map((message, index) => (
          <Messge {...message} />
        ))}
      </div>
      <form className='bottom-8 absolute w-full'>
        <Chatbox />
      </form>
    </section>
  )
}
