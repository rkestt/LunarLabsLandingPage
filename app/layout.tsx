import type { Metadata } from 'next'
import { inter, syne } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lunar Labs | B2B Digital Innovation Studio',
  description: 'We build digital products that drive growth. From MVP to scale, Lunar Labs helps ambitious B2B companies transform ideas into high-performing digital products.',
  keywords: ['B2B', 'Digital Innovation', 'MVP Development', 'Software Development', 'UI/UX Design'],
  authors: [{ name: 'Lunar Labs' }],
  openGraph: {
    title: 'Lunar Labs | B2B Digital Innovation Studio',
    description: 'We build digital products that drive growth.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-near-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
