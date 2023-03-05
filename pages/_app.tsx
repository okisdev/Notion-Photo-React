import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute='class'>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
