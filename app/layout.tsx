import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eswar Mathematics Tuition Centre | Choolaimedu, Chennai',
  description: 'Focused tuition, personal attention, weekly tests and model exams for Class 10 and Class 12 students in Choolaimedu, Chennai. Call 099411 20361.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f1e5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
