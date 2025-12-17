'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

export default function BodyProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
      value={{ light: 'light', dark: 'dark' }}
    >
      {children}

      <ProgressBar
        color='hsl(var(--foreground))'
        height='2px'
        options={{ showSpinner: false }}
        shallowRouting
      />

      <Toaster position='top-right' richColors />

      <SpeedInsights />

      <Analytics />
    </ThemeProvider>
  );
}
