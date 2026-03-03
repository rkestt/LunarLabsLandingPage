import { Inter, Syne } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const fonts = {
  inter,
  syne,
}

export const fontVariables = `${inter.variable} ${syne.variable}`
