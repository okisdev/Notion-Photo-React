import siteConfig from '../config/site.config';

const PhotoCopyright = ({ notionPost }: { notionPost: any }) => {
    const publishDomain = typeof window !== 'undefined' ? window.location.origin : 'https://react-photo-blog.demo.harisfox.com/';

    return (
        <div id='notion-blog-copyright' className='my-3 mx-auto w-11/12 md:w-3/5 leading-relaxed'>
            <div className='rounded border-2 p-3 space-y-3 dark:text-[#adbac7]'>
                <div id='notion-blog-copyright-header'>
                    <div id='notion-blog-copyright-title'>
                        <span>{notionPost.title}</span>
                    </div>
                    <div id='notion-blog-copyright-url'>
                        <span>
                            <a
                                href={`${publishDomain}/posts/${notionPost.slug}`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {publishDomain}/posts/{notionPost.slug}
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-body' className='flex flew-row space-x-3'>
                    <div id='notion-blog-copyright-author' className='flex flex-col'>
                        <span>Author</span>
                        <span className='font-bold'>{notionPost.author}</span>
                    </div>
                    <div id='notion-blog-copyright-date' className='flex flex-col'>
                        <span>Date</span>
                        <span className='font-bold'>{notionPost.date}</span>
                    </div>
                    <div id='notion-blog-copyright-license' className='flex flex-col'>
                        <span>License</span>
                        <span className='font-bold'>
                            <a
                                href={siteConfig.global.content.license.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'
                            >
                                {siteConfig.global.content.license.name}
                            </a>
                        </span>
                    </div>
                </div>
                <div id='notion-blog-copyright-footer'>
                    <p id='notion-blog-copyright-reminder' className='text-sm'>
                        When reposting, sharing or citing this article, please abide by the license agreement and indicate the source of the article.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotoCopyright;
