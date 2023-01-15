import Head from 'next/head';

import { Toaster } from 'react-hot-toast';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PhotoNavBar from '../components/PhotoNavBar';
import PhotoFooter from '../components/PhotoFooter';
import PhotoThemeSwither from '../components/PhotoThemeSwitcher';

import { PostContent } from '../utils/PostContent';
import { getNotionPosts } from '../utils/getNotionPosts';

import siteConfig from '../config/site.config';
import PhotoHeader from '../components/PhotoHeader';
import PhotoCard from '../components/PhotoCard';

export const getStaticProps = async ({ locale }: any) => {
    const unSortedPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const posts = unSortedPosts.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return {
        props: {
            posts,
            ...(await serverSideTranslations(locale, ['common'])),
        },
        revalidate: 60,
    };
};

const PhotoHomePage = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div>
            <Head>
                <title>{siteConfig.global.site.name}</title>

                <meta charSet='UTF-8' />

                <meta name='author' content={siteConfig.global.author} />
                <meta name='description' content={siteConfig.global.site.description} />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />

                <meta property='og:title' content={siteConfig.global.site.name} />
                <meta property='og:description' content={siteConfig.global.site.description} />
                <meta property='og:url' content={siteConfig.global.site.url} />

                <meta property='og:image' content={siteConfig.global.site.banner_img} />
                <meta property='og:url' content={siteConfig.global.site.url} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={siteConfig.global.site.name} />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={siteConfig.global.site.name} />
                <meta name='twitter:description' content={siteConfig.global.site.description} />
                <meta name='twitter:image' content={siteConfig.global.site.banner_img} />
                <meta name='twitter:url' content={siteConfig.global.site.url} />
            </Head>

            <div id='notion-photo-homepage' className='flex min-h-screen select-none flex-col font-Rubik dark:bg-[#23272d]'>
                <Toaster />

                <PhotoNavBar />

                <div className='container mx-auto flex-grow justify-center px-4 sm:px-6'>
                    <div id='notion-photo-content' className='my-16'>
                        <PhotoHeader></PhotoHeader>

                        <div id='notion-photo-body' className='columns-1 md:columns-3'>
                            {posts?.map((post) => post.published && <PhotoCard key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>

                <PhotoFooter />

                <PhotoThemeSwither />
            </div>
        </div>
    );
};

export default PhotoHomePage;
