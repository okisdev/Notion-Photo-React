import { getAllPhotos } from '@/lib/notion';
import { format } from 'date-fns';
import { Link } from 'next-view-transitions';

export async function GallerySection() {
  const photos = await getAllPhotos();

  const sortedPhotos = photos.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className='mb-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
      {sortedPhotos.length > 0 ? (
        sortedPhotos.map((photo) => (
          <Link key={photo.id} href={`/${photo.slug}`} className='group block'>
            <article className='overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg'>
              <div className='relative aspect-[4/3] overflow-hidden bg-muted'>
                <img src={photo.url} alt={photo.title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' loading='lazy' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70' />
              </div>
              <div className='p-4'>
                <h3 className='mb-1 font-medium text-foreground transition-colors group-hover:text-accent-foreground'>{photo.title}</h3>
                <p className='text-muted-foreground text-sm'>{photo.date ? format(new Date(photo.date), 'MMM d, yyyy') : ''}</p>
              </div>
            </article>
          </Link>
        ))
      ) : (
        <p className='col-span-full py-10 text-center text-muted-foreground'>No photos found.</p>
      )}
    </section>
  );
}
