import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradeAm',
  description: 'No Middleman, No Wahala',
  generator: 'Covenant Monday',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
