import React from 'react';

import PhotoHeader from '../components/PhotoHeader';
import PhotoCard from '../components/PhotoCard';

import { PostContent } from '../utils/PostContent';

const PhotoBody = ({ posts }: { posts: PostContent[] }) => {
    return (
        <div className='container mx-auto flex-grow justify-center px-4 sm:px-6'>
            <div id='notion-photo-content' className='my-16'>
                <PhotoHeader></PhotoHeader>

                <div id='notion-photo-body' className='columns-1 md:columns-3'>
                    {posts.map((post) => post.published && <PhotoCard key={post.id} post={post} />)}
                </div>
            </div>
        </div>
    );
};

export default PhotoBody;
