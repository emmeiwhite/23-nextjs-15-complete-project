import './globals.css'

import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'NextJS Foundations',
  description: 'Master NextJS with TypeScript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-4xl mx-auto px-5 mt-8">{children}</main>
      </body>
    </html>
  )
}
