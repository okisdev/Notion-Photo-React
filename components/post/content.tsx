import { notFound } from 'next/navigation';
import { getPhotoBySlug } from '@/lib/notion';

export async function PhotoContent({ slug }: { slug: string }) {
  const photo = await getPhotoBySlug(slug);

  if (!photo) {
    return notFound();
  }

  return (
    <div className='space-y-6'>
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted'>
        <img
          alt={photo.title}
          className='h-full w-full object-cover'
          loading='lazy'
          src={photo.url}
        />
      </div>
    </div>
  );
}
