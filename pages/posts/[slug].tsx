import Head from 'next/head';

import { FC } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getNotionTable } from '@/utils/notion/getNotionTable';

import PhotoNavBar from '@/components/global/navbar';
import PhotoFooter from '@/components/global/footer';
import PhotoCopyright from '@/components/slug/copyright';
import PhotoBackHome from '@/components/slug/back';

import { PostProps } from '@/types/app';

import siteConfig from '@/config/site.config';

export const getServerSideProps = async ({ params, locale }: any) => {
    const { slug } = params as { slug: string };

    const notionPosts = (await getNotionTable()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);

    const notionPost = notionPosts[notionPostIndex];

    return {
        props: {
            notionPost,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

const Post: FC<{ notionPost: PostProps }> = ({ notionPost }: { notionPost: PostProps }) => {
    return (
        <div>
            <Head>
                <title>
                    {notionPost.title} - {siteConfig.global.site.name}
                </title>

                <meta name='description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='keywords' content={`${notionPost.title}, ${siteConfig.global.site.author}, ${siteConfig.global.site.name}`} />

                <meta property='og:title' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta property='og:description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta property='og:image' content={`${notionPost.url}`} />
                <meta property='og:url' content={`${siteConfig.global.site.url}/posts/${notionPost.slug}`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={siteConfig.global.site.name} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='twitter:description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='twitter:image' content={`${notionPost.url}`} />
                <meta name='twitter:url' content={`${siteConfig.global.site.url}/posts/${notionPost.slug}`} />
            </Head>

            <div id='notion-photo-post' className='flex min-h-screen select-none flex-col font-Golos dark:bg-[#252525]'>
                <PhotoNavBar />

                <div className='container mx-auto px-6 dark:text-neutral-300 sm:px-8'>
                    <div id='notion-photo-post-body-content' className='my-20 space-y-3 leading-6'>
                        <div>
                            <PhotoBackHome />
                            <p id='notion-photo-post-name' className='text-center text-2xl font-semibold'>
                                {notionPost.title.split(' - ')[0]}
                            </p>
                        </div>
                        <article id='notion-photo-post-article'>
                            <div id='notion-photo-post-detail' className='space-y-3'>
                                <img id='notion-photo-post-img' src={notionPost.url} alt={notionPost.title} className='mx-auto' />
                                <p id='notion-photo-post-location' className='text-center text-xl font-semibold'>
                                    {notionPost.title.split(' - ')[1]}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

                <PhotoCopyright notionPost={notionPost} />

                <PhotoFooter />
            </div>
        </div>
    );
};
export default Post;
