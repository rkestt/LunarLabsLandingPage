import type { Metadata } from 'next'
import { inter, spaceGrotesk } from '@/lib/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lunar Labs | Industrial Digital Engineering',
  description: 'Progettiamo e costruiamo MVP ad alte prestazioni per PMI e privati con standard tecnici rigorosi. Trasparenza, innovazione e sviluppo custom.',
  keywords: ['MVP Development', 'Sviluppo Software Custom', 'PMI Digitalizzazione', 'Web App', 'Desktop App'],
  authors: [{ name: 'Lunar Labs' }],
  openGraph: {
    title: 'Lunar Labs | Industrial Digital Engineering',
    description: 'Sviluppo di prodotti digitali ad alte prestazioni.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-github-black text-cloud-dancer antialiased">
        {children}
      </body>
    </html>
  )
}
