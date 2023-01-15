import PoweredByVercel from 'powered-by-vercel';

import siteConfig from '../config/site.config';

const PhotoFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id='notion-photo-footer' className='text-sm leading-relaxed dark:text-[#adbac7]'>
            <div className='text-center'>
                <a href={siteConfig.global.content.license.url} className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank' rel='noopener noreferrer'>
                    {siteConfig.global.content.license.name}
                </a>
                <p>
                    Copyright &#169; <span>{currentYear}</span> <span>{siteConfig.global.author}</span>. All rights reserved.
                </p>
                <p>
                    Made by Harry Yep with <span className='text-red-600'>♥</span>
                </p>
                <p id='notion-photo-footer-built-with' className='text-sm md:px-52'>
                    Built with{' '}
                    <a className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://reactjs.org'>
                        React
                    </a>{' '}
                    &{' '}
                    <a className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://nextjs.org'>
                        Next.js
                    </a>{' '}
                    &{' '}
                    <a className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://tailwindcss.com'>
                        tailwindcss
                    </a>{' '}
                    &{' '}
                    <a className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://www.typescriptlang.org/'>
                        TypeScript
                    </a>
                </p>
                <PoweredByVercel
                    className='my-1 flex items-center justify-center'
                    svgProps={{
                        width: 150,
                    }}
                    aria-label='Powered By Vercel'
                />
            </div>
        </div>
    );
};

export default PhotoFooter;
