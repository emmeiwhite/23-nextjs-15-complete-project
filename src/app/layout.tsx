export const metadata = {
  title: 'NextJS Foundations',
  description: 'Master NextJS with TypeScript'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
