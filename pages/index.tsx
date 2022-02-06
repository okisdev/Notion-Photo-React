import Head from 'next/head';

import PhotoNavBar from '../components/PhotoNavBar';
import PhotoBody from '../components/PhotoBody';
import PhotoFooter from '../components/PhotoFooter';

import { PostContent } from '../utils/PostContent';
import { getNotionPosts } from '../utils/getNotionPosts';
import { Toaster } from 'react-hot-toast';

export const getStaticProps = async () => {
    const unSortedPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const posts = unSortedPosts.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
};

const PhotoHomePage = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div>
            <Head>
                <title>Notion Photo React Example</title>

                <meta charSet='UTF-8' />

                <meta name='author' content='Harry Yep' />
                <meta name='description' content='Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.' />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />

                <meta property='og:title' content='Notion Photo React Example' />
                <meta property='og:description' content='Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.' />
                <meta property='og:url' content='https://react-notion-photo.demo.harisfox.com/' />

                <meta property='og:image' content={`https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png`} />
                <meta property='og:url' content={`https://react-notion-photo.demo.harisfox.com/`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='Notion Photo React Example' />

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`Notion Photo React Example`} />
                <meta name='twitter:description' content={`Photo Gallery built with Notion, React, Next.js, tailwindcss, TypeScript, Notion-Api-Worker and more.`} />
                <meta name='twitter:image' content={`https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png`} />
                <meta name='twitter:url' content={`https://react-notion-photo.demo.harisfox.com/`} />
            </Head>

            <div id='notion-photo-homepage' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik select-none'>
                <Toaster />

                <PhotoNavBar></PhotoNavBar>

                <PhotoBody posts={posts}></PhotoBody>

                <PhotoFooter></PhotoFooter>
            </div>
        </div>
    );
};

export default PhotoHomePage;
