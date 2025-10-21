import './globals.css'
import type { Metadata } from 'next'
import GAProvider from './GAProvider'

export const metadata: Metadata = {
  title: 'Deductly — Keep more of what you earn',
  description:
    'AI tax sidekick for gig workers. Automatically tracks mileage, finds write-offs, and estimates taxes in real time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-[#0b0f10] dark:text-gray-100">
        {children}
        <GAProvider />
      </body>
    </html>
  )
}
