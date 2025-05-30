import './globals.css'

import Navbar from '@/components/Navbar'

import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'NextJS Foundations',
  description: 'Master NextJS with TypeScript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={roboto.className}>
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-5 mt-8">{children}</main>
      </body>
    </html>
  )
}
