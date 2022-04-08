import Link from 'next/link';

import toast from 'react-hot-toast';

import { useTranslation } from 'next-i18next';

import { HiOutlinePhotograph } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { TiLocationArrowOutline } from 'react-icons/ti';

import { PostContent } from '../utils/PostContent';

import getNotionPostSlug from '../utils/getNotionPostSlug';

import modeConfig from '../config/mode.config';

const PhotoCard = ({ post }: { post: PostContent }) => {
    const { t } = useTranslation('common');

    return (
        <div id='notion-photo-body-card' className='grid break-inside-avoid'>
            <div id='notion-photo-body-card-content' className='transition duration-500 ease-in-out p-3 my-3 border-2 rounded-lg bg-white dark:bg-gray-500 hover:shadow-2xl'>
                <div id='notion-photo-body-card-image' className='py-3'>
                    <img src={post.url} alt={post.title} className='rounded' />
                </div>
                <div
                    id='notion-photo-body-card-title'
                    className='flex items-center font-bold text-lg mb-2 space-x-3 dark:text-blue-200 transition duration-500 ease-in-out hover:text-blue-400 dark:hover:text-blue-400'
                >
                    <HiOutlinePhotograph />
                    <div
                        onClick={() => {
                            toast(t('Loading...'), {
                                icon: <AiOutlineLoading3Quarters className='animate-spin' />,
                                style: {
                                    borderRadius: '15px',
                                    background: '#2d3748',
                                    color: '#cadada',
                                },
                            });
                        }}
                    >
                        <Link href='/posts/[slug]' as={getNotionPostSlug(post.slug)} passHref>
                            {post.title}
                        </Link>
                    </div>
                </div>
                {modeConfig.home.card.mode === 0 ? (
                    <div id='notion-photo-body-card-intro' className='flex items-center space-x-6 md:space-x-8'>
                        <div id='notion-photo-body-card-date' className='flex items-center'>
                            <span className='flex flex-col'>
                                <MdDateRange className='mb-1' />
                                <span className='text-sm dark:text-gray-300'>
                                    {new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                            </span>
                        </div>

                        <div id='notion-photo-body-card-tags' className='flex items-center'>
                            <span className='flex flex-col'>
                                <TiLocationArrowOutline className='mb-1' />
                                <span className='flex flex-row'>
                                    <div id='notion-photo-body-card-tags-item' className='bg-blue-200 dark:bg-[#728796] px-3 rounded-xl'>
                                        <span className='text-sm dark:text-gray-300'>{post.location}</span>
                                    </div>
                                </span>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div id='notion-photo-body-card-intro'>
                        <div className='flex items-center space-x-3'>
                            <div id='notion-photo-body-card-date'>
                                <span className='text-sm dark:text-gray-300'>
                                    {new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                            </div>
                            <div>•</div>
                            <div id='notion-photo-body-card-tags-item' className='bg-blue-200 dark:bg-[#728796] px-3 rounded-xl'>
                                <span className='text-sm dark:text-gray-300'>{post.location}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoCard;
