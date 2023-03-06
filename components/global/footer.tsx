import Link from 'next/link';

import PoweredByVercel from 'powered-by-vercel';

import siteConfig from '@/config/site.config';

const Footer = () => {
    return (
        <div id='notion-photo-footer' className='my-3 text-sm dark:text-neutral-300'>
            <div className='space-y-1 text-center'>
                <Link href={siteConfig.global.content.license.url} className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' target='_blank'>
                    {siteConfig.global.content.license.name}
                </Link>
                <p>{siteConfig.global.content.footer.copyright}</p>
                <p id='notion-photo-footer-built-with' className='text-sm md:px-52'>
                    <Link className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://nextjs.org' target='_blank'>
                        Next.js
                    </Link>
                    /
                    <Link className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://tailwindcss.com' target='_blank'>
                        tailwindcss
                    </Link>
                    /
                    <Link className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600' href='https://www.typescriptlang.org/' target='_blank'>
                        TypeScript
                    </Link>
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

export default Footer;
