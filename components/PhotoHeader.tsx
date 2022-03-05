import siteConfig from '../config/site.config';

const PhotoHeader = () => {
    return (
        <div id='notion-photo-header' className='flex flex-row justify-center items-center my-10 space-x-2 md:space-x-8 dark:text-[#adbac7]'>
            <div id='notion-photo-header-content'>
                <div id='notion-photo-header-title' className='text-center text-2xl font-bold'>
                    <span>{siteConfig.global.site.name}</span>
                </div>
                <div id='notion-photo-header-description' className='pt-6'>
                    <span className='text-center'>
                        Photo Gallery built with{' '}
                        <a href='https://notion.so/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                            Notion
                        </a>
                        ,{' '}
                        <a href='https://reactjs.org/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                            React
                        </a>
                        ,{' '}
                        <a href='https://nextjs.org/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                            Next.js
                        </a>
                        ,{' '}
                        <a href='https://tailwindcss.com/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                            tailwindcss
                        </a>
                        ,{' '}
                        <a href='https://www.typescriptlang.org/' className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                            TypeScript
                        </a>
                        ,{' '}
                        <a
                            href='https://github.com/splitbee/notion-api-worker'
                            className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Notion-Api-Worker
                        </a>{' '}
                        and more. (Find more on{' '}
                        <a
                            href='https://github.com/Harry-Yep/Notion-Photo-React'
                            className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            GitHub
                        </a>
                        )
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PhotoHeader;
