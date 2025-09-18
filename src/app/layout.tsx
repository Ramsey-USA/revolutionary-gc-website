import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'MH Construction - Building Tomorrow with Today\'s Technology',
  description: 'Veteran-owned construction excellence powered by cutting-edge AI technology. Experience the future of construction with transparent pricing, immersive project visualization, and military-grade precision.',
  keywords: 'construction, veteran-owned, AI technology, Pacific Northwest, commercial construction, estimating',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/mhc-logo-light.png', sizes: '64x64', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/images/mhc-logo-light.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-saira m-0 p-0 bg-white dark:bg-dark-surface text-army-black dark:text-dark-text transition-colors duration-300" style={{ fontFamily: 'Saira, sans-serif' }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
