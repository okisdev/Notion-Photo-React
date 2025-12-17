import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { PhotoContent } from '@/components/post/content';
import { PostFooter } from '@/components/post/footer';
import { PhotoHeader } from '@/components/post/header';
import { PhotoSkeleton } from '@/components/post/loading';
import { RelatedPhotos } from '@/components/post/related';
import { getPhotoBySlug } from '@/lib/notion';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const photo = await getPhotoBySlug(slug);

  if (!photo) {
    return notFound();
  }

  return {
    title: `${photo.title} - Notion Photo React`,
    description: photo.location || `Photo taken on ${photo.date}`,
  };
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className='mx-auto max-w-4xl space-y-8'>
      <Suspense
        fallback={<PhotoSkeleton sections={['header', 'content', 'related']} />}
      >
        <PhotoHeader slug={slug} />

        <Suspense
          fallback={<PhotoSkeleton sections={['content', 'related']} />}
        >
          <PhotoContent slug={slug} />

          <Suspense fallback={<PhotoSkeleton sections={['related']} />}>
            <div className='border-tertiary border-b' />
            <RelatedPhotos slug={slug} />
            <PostFooter />
          </Suspense>
        </Suspense>
      </Suspense>
    </div>
  );
}
