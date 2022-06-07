import Head from 'next/head';

import { FC } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { getNotionPosts } from '../../utils/getNotionPosts';
import { PostContent } from '../../utils/PostContent';

import PhotoNavBar from '../../components/PhotoNavBar';
import PhotoFooter from '../../components/PhotoFooter';
import PhotoCopyright from '../../components/PhotoCopyright';
import PhotoBackHome from '../../components/PhotoBackHome';
import PhotoThemeSwither from '../../components/PhotoThemeSwitcher';

import siteConfig from '../../config/site.config';

export const getServerSideProps = async ({ params, locale }: any) => {
    const { slug } = params as { slug: string };

    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);

    const notionPost = notionPosts[notionPostIndex];

    return {
        props: {
            notionPost,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
};

const PhotoPost: FC<{ notionPost: PostContent }> = ({ notionPost }: { notionPost: PostContent }) => {
    return (
        <div>
            <Head>
                <title>
                    {notionPost.title} - {siteConfig.global.site.name}
                </title>

                <meta name='description' content={`${notionPost.title} - ${siteConfig.global.site.name}`} />
                <meta name='keywords' content={`${notionPost.title}, ${siteConfig.global.author}, ${siteConfig.global.site.name}`} />

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

            <div id='notion-photo-post' className='flex min-h-screen select-none flex-col font-Rubik dark:bg-[#23272d]'>
                <PhotoNavBar></PhotoNavBar>

                <div className='container mx-auto px-6 dark:text-[#adbac7] sm:px-8'>
                    <div id='notion-photo-post-body-content' className='my-20 leading-6'>
                        <article id='notion-photo-post-article'>
                            <div id='notion-photo-post-detail' className='space-y-3'>
                                <img id='notion-photo-post-img' src={notionPost.url} alt={notionPost.title} className='mx-auto' />
                                <p id='notion-photo-post-name' className='text-center text-3xl font-bold'>
                                    {notionPost.title.split(' - ')[0]}
                                </p>
                                <p id='notion-photo-post-location' className='text-center text-xl font-bold'>
                                    {notionPost.title.split(' - ')[1]}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>

                <PhotoCopyright notionPost={notionPost}></PhotoCopyright>

                <PhotoBackHome></PhotoBackHome>

                <PhotoFooter></PhotoFooter>

                <PhotoThemeSwither></PhotoThemeSwither>
            </div>
        </div>
    );
};
export default PhotoPost;
