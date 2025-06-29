import './globals.css'
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
        <main className="max-w-5xl mx-auto px-5 mt-8">{children}</main>
      </body>
    </html>
  )
}
