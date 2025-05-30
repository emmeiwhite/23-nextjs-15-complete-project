import './globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The reality of next.js',
  description: 'A journey into the world of true frontend',
  keywords: 'Next.JS, Typescript, Tailwindcss'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-5 mt-8">{children}</main>
      </body>
    </html>
  )
}
