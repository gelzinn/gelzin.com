import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import './globals.css'

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
      </head>
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
