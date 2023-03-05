import Link from 'next/link';

import toast from 'react-hot-toast';

import { useTranslation } from 'next-i18next';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import getNotionPostSlug from '@/utils/notion/getNotionPostSlug';

import modeConfig from '@/config/mode.config';

import { PostProps } from '@/types/app';

const Card = ({ post }: { post: PostProps }) => {
    const { t } = useTranslation('common');

    return (
        <div id='notion-photo-body-card' className='grid break-inside-avoid'>
            <div id='notion-photo-body-card-content' className='p-1'>
                <div id='notion-photo-body-card-image' className='py-2'>
                    <img src={post.url} alt={post.title} className='rounded-md' />
                </div>
                <div
                    id='notion-photo-body-card-title'
                    className='flex items-center justify-center text-lg font-semibold transition duration-500 ease-in-out hover:text-blue-400 dark:text-blue-200 dark:hover:text-blue-400'
                >
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
                <div id='notion-photo-body-card-intro'>
                    <div className='flex items-center justify-center space-x-3'>
                        <div id='notion-photo-body-card-date'>
                            <span className='text-sm dark:text-gray-300'>
                                {new Date(post.date).toLocaleDateString(modeConfig.home.card.date.locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                            </span>
                        </div>
                        <div>•</div>
                        <div id='notion-photo-body-card-tags-item' className='rounded-md'>
                            <span className='text-sm dark:text-gray-300'>{post.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
