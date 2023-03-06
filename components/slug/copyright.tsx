import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import siteConfig from '@/config/site.config';

const Copyright = ({ notionPost }: { notionPost: any }) => {
    const publishDomain = typeof window !== 'undefined' ? window.location.origin : 'https://npr.okis.dev/';

    const { t } = useTranslation('common');

    return (
        <div id='notion-photo-copyright' className='container mx-auto my-3 px-6 sm:px-8'>
            <div className='mx-auto space-y-3 rounded-md border-2 p-3 dark:text-neutral-300 md:w-7/12'>
                <div id='notion-photo-copyright-header'>
                    <div id='notion-photo-copyright-title'>
                        <span className='font-semibold'>{notionPost.title}</span>
                    </div>
                    <div id='notion-photo-copyright-url'>
                        <Link href={`${publishDomain}/posts/${notionPost.slug}`} target='_blank' className='underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                            {publishDomain}/posts/{notionPost.slug}
                        </Link>
                    </div>
                </div>
                <div id='notion-photo-copyright-body' className='flew-row flex space-x-3'>
                    <div id='notion-photo-copyright-author' className='flex flex-col'>
                        <span>{t('Author')}</span>
                        <span className='font-semibold'>{notionPost.author}</span>
                    </div>
                    <div id='notion-photo-copyright-date' className='flex flex-col'>
                        <span>{t('Date')}</span>
                        <span className='font-semibold'>{notionPost.date}</span>
                    </div>
                    <div id='notion-photo-copyright-license' className='flex flex-col'>
                        <span>{t('License')}</span>
                        <Link href={siteConfig.global.content.license.url} target='_blank' className='font-semibold underline transition duration-500 hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                            {siteConfig.global.content.license.name}
                        </Link>
                    </div>
                </div>
                <div id='notion-photo-copyright-footer'>
                    <p id='notion-photo-copyright-reminder' className='text-sm'>
                        {t('* When reposting, sharing or citing this article, please abide by the license agreement and indicate the source of the article.')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
