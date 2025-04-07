import { Skeleton } from '@/components/ui/skeleton';

export function HeaderSkeleton() {
  return (
    <header>
      <Skeleton className='mb-2 h-9 w-3/4' />
      <Skeleton className='h-5 w-32' />
    </header>
  );
}

export function ContentSkeleton() {
  return (
    <article className='space-y-4'>
      <Skeleton className='h-72 w-full' />
    </article>
  );
}

export function RelatedPostsSkeleton() {
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

export function PostLoadingSkeleton() {
  return (
    <div className='space-y-6'>
      <HeaderSkeleton />
      <ContentSkeleton />
      <div className='border-tertiary border-b' />
      <RelatedPostsSkeleton />
      <div className='border-tertiary border-b' />
    </div>
  );
}

export function PhotoHeaderSkeleton() {
  return (
    <header className='mb-6'>
      <Skeleton className='mb-2 h-8 w-3/4' />
      <Skeleton className='h-5 w-32' />
    </header>
  );
}

export function PhotoContentSkeleton() {
  return (
    <div className='space-y-6'>
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted'>
        <Skeleton className='h-full w-full' />
      </div>
      <div className='space-y-4'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
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

export function PhotoLoadingSkeleton() {
  return (
    <div className='space-y-8'>
      <PhotoHeaderSkeleton />
      <PhotoContentSkeleton />
      <div className='border-tertiary border-b' />
      <RelatedPhotosSkeleton />
    </div>
  );
}
