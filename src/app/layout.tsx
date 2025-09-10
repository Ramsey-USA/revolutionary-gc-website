import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MH Construction - Building Tomorrow with Today\'s Technology',
  description: 'Veteran-owned construction excellence powered by cutting-edge AI technology. Experience the future of construction with transparent pricing, immersive project visualization, and military-grade precision.',
  keywords: 'construction, veteran-owned, AI technology, Pacific Northwest, commercial construction, estimating',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-saira m-0 p-0" style={{ fontFamily: 'Saira, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
