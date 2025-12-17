import { Skeleton } from '@/components/ui/skeleton';

export function GallerySectionSkeleton() {
  const skeletonItems = Array.from(
    { length: 6 },
    (_, i) => `skeleton-${i + 1}`
  );

  return (
    <section className='mb-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
      {skeletonItems.map((id) => (
        <div className='overflow-hidden rounded-lg border bg-card' key={id}>
          <div className='relative aspect-[4/3] overflow-hidden'>
            <Skeleton className='h-full w-full' />
          </div>
          <div className='p-4'>
            <Skeleton className='mb-1 h-5 w-3/4' />
            <Skeleton className='h-4 w-1/2' />
          </div>
        </div>
      ))}
    </section>
  );
}
