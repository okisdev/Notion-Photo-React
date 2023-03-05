import { Head, Html, Main, NextScript } from 'next/document';

import siteConfig from '@/config/site.config';

const Document = () => {
    return (
        <Html lang='en-GB'>
            <Head>
                <link rel='icon' type='image/png' href='/favicon.ico' />
                <link rel='icon' type='image/png' sizes='180x180' href='/icon/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16x16.png' />
                <link rel='icon' type='image/png' sizes='150x150' href='/icon/mstile-150x150.png' />
                <link rel='icon' type='image/png' sizes='192x192' href='/icon/android-chrome-192x192.png' />
                <link rel='icon' type='image/png' sizes='256x256' href='/icon/android-chrome-256x256.png' />

                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800;900&display=swap' rel='stylesheet' />

                <script async defer src={siteConfig.global.analytics.umami.url} data-website-id={siteConfig.global.analytics.umami.website_id} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
