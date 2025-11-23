import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kotiba - Professional Logo Generator',
  description: 'Create stunning professional logos for Kotiba brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
