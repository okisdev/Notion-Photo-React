import Head from 'next/head';

import PhotoNavBar from '../components/PhotoNavBar';
import PhotoFooter from '../components/PhotoFooter';
import PhotoThemeSwither from '../components/PhotoThemeSwitcher';

const Error404 = () => {
    return (
        <div>
            <Head>
                <title>404 - Notion Photo React Example</title>
            </Head>

            <div id='notion-photo-404' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik select-none'>
                <PhotoNavBar></PhotoNavBar>

                <div id='notion-photo-404-content' className='mx-auto flex flex-grow leading-10 dark:text-[#adbac7]'>
                    <div className='container mx-auto flex flex-col justify-center text-center'>
                        <h1 className='text-4xl font-bold'>404 Not Found</h1>
                        <p>This page does not exist.</p>
                    </div>
                </div>

                <PhotoFooter></PhotoFooter>

                <PhotoThemeSwither></PhotoThemeSwither>
            </div>
        </div>
    );
};

export default Error404;
