import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { getAllPhotos, getPhotoBySlug } from '@/lib/notion';

export async function RelatedPhotos({ slug }: { slug: string }) {
  const photo = await getPhotoBySlug(slug);

  if (!photo) {
    return notFound();
  }

  const allPhotos = await getAllPhotos();
  const relatedPhotos = allPhotos.filter((p) => p.id !== photo.id).slice(0, 2);

  if (relatedPhotos.length === 0) {
    return null;
  }

  return (
    <section className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      {relatedPhotos.map((relatedPhoto, index) => (
        <Link
          className='group block'
          href={`/${relatedPhoto.slug}`}
          key={relatedPhoto.id}
        >
          <p className='mb-1 text-muted-foreground text-sm'>
            {index === 0 ? 'Previous' : 'Next'}
          </p>
          <h3 className='font-medium text-base text-foreground transition-colors group-hover:text-muted-foreground'>
            {relatedPhoto.title}
          </h3>
          <div className='mt-1.5 flex items-center gap-2'>
            <p className='text-muted-foreground text-xs'>
              {relatedPhoto.date
                ? format(new Date(relatedPhoto.date), 'MMM d, yyyy')
                : ''}
            </p>
            {relatedPhoto.location && relatedPhoto.location.length > 0 && (
              <div className='flex gap-1'>
                {relatedPhoto.location.slice(0, 1).map((location) => (
                  <span
                    className='rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground text-xs'
                    key={location}
                  >
                    {location}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </section>
  );
}
