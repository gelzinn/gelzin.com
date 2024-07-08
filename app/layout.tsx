import type { Metadata, Viewport } from 'next';

import { ReactNode } from 'react';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

import '../styles/globals.css';

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
  keywords: ['software', 'engineer', 'ux', 'ui', 'designer'],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#080808' },
  ],
  colorScheme: 'dark',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/gelzin.svg" type="image/svg+xml" />

        <meta
          property="twitter:image"
          content="https://gelzin.com/metadata/og_image.png"
        />

        <meta
          property="twitter:card"
          content="https://gelzin.com/metadata/og_image.png"
        />

        <meta
          property="twitter:title"
          content="gelzin · Software Engineer and UX/UI Designer"
        />

        <meta
          property="twitter:description"
          content="Software Engineer and UX/UI Designer"
        />

        <meta
          property="og:image"
          content="https://gelzin.com/metadata/og_image.png"
        />

        <meta
          property="og:title"
          content="gelzin · Software Engineer and UX/UI Designer"
        />

        <meta
          property="og:description"
          content="Software Engineer and UX/UI Designer"
        />

        <meta property="og:url" content="https://gelzin.coom" />

        <meta name="google-adsense-account" content="ca-pub-8214931196684102" />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
