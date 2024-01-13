import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '../styles/globals.css';
import { DocumentSizeContextProvider } from '@/contexts/DocumentSizeContext';

const inter = Inter({ subsets: ['latin'] });

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
  themeColor: '#080808',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <DocumentSizeContextProvider>{children}</DocumentSizeContextProvider>
      </body>
    </html>
  );
}
