import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

import './globals.css'
import { DocumentSizeContextProvider } from '@/contexts/DocumentSizeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gelzin · Software Engineer and UX/UI Designer',
  description: 'Software Engineer and UX/UI Designer',
  authors: [
    {
      name: 'gelzin',
      url: 'https://gelzin.com',
    },
  ],
  applicationName: 'gelzin',
  keywords: [
    'software', 'engineer', 'ux', 'ui', 'designer'
  ],
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/gelzin.svg" type="image/svg+xml" />

        <meta property="twitter:image" content="https://gelzin.com/metadata/og_image.png" />
        <meta property="twitter:card" content="https://gelzin.com/metadata/og_image.png" />
        <meta property="twitter:title" content="gelzin · Software Engineer and UX/UI Designer" />
        <meta property="twitter:description" content="Software Engineer and UX/UI Designer" />

        <meta property="og:image" content="https://gelzin.com/metadata/og_image.png" />
        <meta property="og:title" content="gelzin · Software Engineer and UX/UI Designer" />
        <meta property="og:description" content="Software Engineer and UX/UI Designer" />
        <meta property="og:url" content="https://gelzin.coom" />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
        <DocumentSizeContextProvider>
          {children}
          <Analytics />
        </DocumentSizeContextProvider>
      </body>
    </html>
  )
}
