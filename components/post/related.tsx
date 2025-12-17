import { getAllPhotos } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';

export async function RelatedPhotos({
  currentPhotoId,
}: {
  currentPhotoId: string;
}) {
  const allPhotos = await getAllPhotos();
  const relatedPhotos = allPhotos
    .filter((p) => p.id !== currentPhotoId)
    .slice(0, 2);

  if (relatedPhotos.length === 0) return null;

  return (
    <section className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      {relatedPhotos.map((relatedPhoto, index) => (
        <Link
          key={relatedPhoto.id}
          href={`/${relatedPhoto.slug}`}
          className='group block'
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
                    key={location}
                    className='rounded-sm bg-secondary px-1.5 py-0.5 text-secondary-foreground text-xs'
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
