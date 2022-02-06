import Head from 'next/head';

import { FC } from 'react';

import { PostContent } from '../../utils/PostContent';

import PhotoNavBar from '../../components/PhotoNavBar';
import PhotoFooter from '../../components/PhotoFooter';
import PhotoCopyright from '../../components/PhotoCopyright';
import PhotoBackHome from '../../components/PhotoBackHome';

import { getNotionPosts } from '../../utils/getNotionPosts';

export const getServerSideProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const notionPosts = (await getNotionPosts()).filter((posts) => posts.published);

    const notionPostIndex = notionPosts.findIndex((post) => post.slug === slug);

    const notionPost = notionPosts[notionPostIndex];

    return {
        props: {
            notionPost,
        },
    };
};

const PhotoPost: FC<{ notionPost: PostContent }> = ({ notionPost }: { notionPost: PostContent }) => {
    return (
        <div>
            <Head>
                <title>{notionPost.title} - Notion Photo React Example</title>
                <meta name='description' content={`${notionPost.title} - Notion Photo React Example`} />
                <meta name='keywords' content={`${notionPost.title}, Harry Yep, Notion Photo React Example`} />
                <meta property='og:title' content={`${notionPost.title} - Notion Photo React Example`} />
                <meta property='og:description' content={`${notionPost.title} - Notion Photo React Example`} />
                <meta property='og:image' content={`${notionPost.url}`} />
                <meta property='og:url' content={`https://react-notion-blog.demo.harisfox.com/posts/${notionPost.slug}`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='Notion Photo React Example' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={`${notionPost.title} - Notion Photo React Example`} />
                <meta name='twitter:description' content={`${notionPost.title} - Notion Photo React Example`} />
                <meta name='twitter:image' content={`${notionPost.url}`} />
                <meta name='twitter:url' content={`https://react-notion-blog.demo.harisfox.com/posts/${notionPost.slug}`} />
            </Head>

            <div id='notion-photo-post' className='min-h-screen flex flex-col dark:bg-[#23272d] font-Rubik select-none'>
                <PhotoNavBar></PhotoNavBar>

                <div className='container mx-auto px-6 sm:px-8 dark:text-[#adbac7]'>
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
            </div>
        </div>
    );
};
export default PhotoPost;
