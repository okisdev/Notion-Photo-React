import { Skeleton } from '@/components/ui/skeleton';

export function PhotoHeaderSkeleton() {
  return (
    <header>
      <Skeleton className='mb-2 h-8 w-3/4' />
      <div className='flex items-center gap-4'>
        <Skeleton className='h-5 w-32' />
        <div className='flex gap-1.5'>
          <Skeleton className='h-5 w-16 rounded-sm' />
          <Skeleton className='h-5 w-16 rounded-sm' />
        </div>
      </div>
    </header>
  );
}

export function PhotoContentSkeleton() {
  return (
    <div className='space-y-6'>
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
        <Skeleton className='h-full w-full' />
      </div>
    </div>
  );
}

export function RelatedPhotosSkeleton() {
  return (
    <section className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between'>
      <div className='block'>
        <Skeleton className='mb-1 h-4 w-16' />
        <Skeleton className='h-5 w-48' />
        <div className='mt-1.5 flex items-center gap-2'>
          <Skeleton className='h-3 w-20' />
          <Skeleton className='h-3 w-16 rounded-sm' />
        </div>
      </div>
      <div className='block'>
        <Skeleton className='mb-1 h-4 w-16' />
        <Skeleton className='h-5 w-48' />
        <div className='mt-1.5 flex items-center gap-2'>
          <Skeleton className='h-3 w-20' />
          <Skeleton className='h-3 w-16 rounded-sm' />
        </div>
      </div>
    </section>
  );
}

/**
 * Progressive skeleton for streaming.
 * Shows remaining sections that haven't loaded yet.
 */
export function PhotoSkeleton({
  sections,
}: {
  sections: ('header' | 'content' | 'related')[];
}) {
  return (
    <>
      {sections.includes('header') && <PhotoHeaderSkeleton />}
      {sections.includes('content') && <PhotoContentSkeleton />}
      {sections.includes('related') && (
        <>
          <div className='border-tertiary border-b' />
          <RelatedPhotosSkeleton />
        </>
      )}
    </>
  );
}

/**
 * Full page skeleton for loading.tsx
 */
export function PhotoLoadingSkeleton() {
  return (
    <div className='mx-auto max-w-4xl space-y-8'>
      <PhotoSkeleton sections={['header', 'content', 'related']} />
    </div>
  );
}
