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

const BlogHomePage = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div>
            <Head>
                <title>Notion Photo React Example</title>

                <meta charSet='UTF-8' />
                <meta name='author' content='Harry Yep' />
                <meta name='description' content='Notion Photo React Example' />
                <meta httpEquiv='Content-Type' content='text/html' />
                <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                <meta name='description' content='Notion Photo React Example' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />

                <meta property='og:title' content='Notion Photo React Example' />
                <meta property='og:site_name' content='Notion Photo React Example' />
                <meta property='og:url' content='https://react-notion-blog.demo.harisfox.com/' />
                <meta property='og:description' content='Notion Photo React Example' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='https://cdn.harrly.com/global/assets/icon/android-chrome-256x256.png' />
                <meta property='og:image:width' content='256' />
                <meta property='og:image:height' content='256' />
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

export default BlogHomePage;
