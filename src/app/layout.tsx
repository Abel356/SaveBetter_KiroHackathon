import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaveBetter Revised - Smart Financial Planning for Canadians',
  description: 'Adaptive saving recommendations that adjust to your real spending patterns. Built for Canadian financial goals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {children}
      </body>
    </html>
  )
}