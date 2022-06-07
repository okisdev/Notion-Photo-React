import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PhotoNavBar from '../components/PhotoNavBar';
import PhotoFooter from '../components/PhotoFooter';
import PhotoThemeSwither from '../components/PhotoThemeSwitcher';

import siteConfig from '../config/site.config';

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

const Error500 = () => {
    return (
        <div>
            <Head>
                <title>500 - {siteConfig.global.site.name}</title>
            </Head>

            <div id='notion-photo-500' className='flex min-h-screen select-none flex-col font-Rubik dark:bg-[#23272d]'>
                <PhotoNavBar></PhotoNavBar>

                <div id='notion-photo-500-content' className='mx-auto flex flex-grow leading-10 dark:text-[#adbac7]'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-bold'>500</h1>
                        <p>Internal Server Error.</p>
                    </div>
                </div>

                <PhotoFooter></PhotoFooter>

                <PhotoThemeSwither></PhotoThemeSwither>
            </div>
        </div>
    );
};

export default Error500;
