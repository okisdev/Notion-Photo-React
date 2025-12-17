import BodyProvider from '@/app/provider';
import { cn } from '@/lib/utils';
import { font } from '@/styles/font';
import { ReactScan } from '@/utils/react-scan';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ViewTransitions } from 'next-view-transitions';
import { env } from '@/lib/env';

export const metadata: Metadata = {
  title: {
    default: 'Notion Photo React',
    template: '%s | Notion Photo React',
  },
  description: 'A Notion Photo Gallery powered by Next.js',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta
            content='white'
            media='(prefers-color-scheme: light)'
            name='theme-color'
          />
          <meta
            content='black'
            media='(prefers-color-scheme: dark)'
            name='theme-color'
          />
          {env.NEXT_PUBLIC_UMAMI_URL && (
            <Script
              data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              defer
              src={env.NEXT_PUBLIC_UMAMI_URL}
            />
          )}
        </head>

        <ReactScan />

        <body className={cn(font.geistSans.className, 'antialiased')}>
          <BodyProvider>{children}</BodyProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
