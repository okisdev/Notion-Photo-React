import { PhotoContent } from '@/components/post/content';
import { PhotoHeader } from '@/components/post/header';
import { PhotoContentSkeleton, PhotoHeaderSkeleton, RelatedPhotosSkeleton } from '@/components/post/loading';
import { RelatedPhotos } from '@/components/post/related';
import { config } from '@/config';
import { getPhotoBySlug } from '@/lib/notion';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const photo = await getPhotoBySlug(slug);

  if (!photo) return notFound();

  return {
    title: `${photo.title} - ${config.site.name}`,
    description: photo.location || `Photo taken on ${photo.date}`,
  };
}

export default async function PhotoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const photo = await getPhotoBySlug(slug);

  if (!photo) return notFound();

  return (
    <div className='mx-auto max-w-4xl space-y-8'>
      <Suspense fallback={<PhotoHeaderSkeleton />}>
        <PhotoHeader photo={photo} />
      </Suspense>

      <Suspense fallback={<PhotoContentSkeleton />}>
        <PhotoContent photo={photo} />
      </Suspense>

      <div className='border-tertiary border-b' />

      <Suspense fallback={<RelatedPhotosSkeleton />}>
        <RelatedPhotos currentPhotoId={photo.id} />
      </Suspense>

      {config.post.footer}
    </div>
  );
}
