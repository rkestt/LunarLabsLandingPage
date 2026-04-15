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
    url: 'https://lunarlabs.dev',
    siteName: 'Lunar Labs',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lunar Labs | Industrial Digital Engineering',
    description: 'Sviluppo MVP ad alte prestazioni per PMI e privati.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Lunar Labs',
  description: 'Sviluppo MVP ad alte prestazioni per PMI e privati',
  url: 'https://lunarlabs.dev',
  logo: 'https://lunarlabs.dev/logo.png',
  areaServed: {
    '@type': 'Country',
    name: 'Italy',
  },
  serviceType: ['MVP Development', 'Web Development', 'Software Development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-github-black text-cloud-dancer antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
