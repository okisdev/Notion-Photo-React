import { Suspense } from 'react';
import { HomeExtraSection } from '@/components/home/extra-section';
import { GallerySection } from '@/components/home/gallery';
import { GallerySectionSkeleton } from '@/components/home/loading';
import NewsletterForm from '@/components/shared/newsletter-form';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <header className='mb-10'>
        <h1 className='mb-1 font-medium text-2xl text-foreground'>
          Notion Photo React
        </h1>
        <p className='text-muted-foreground text-sm'>
          A Notion Photo Gallery powered by Next.js
        </p>
      </header>

      <Suspense fallback={<GallerySectionSkeleton />}>
        <GallerySection />
      </Suspense>

      <section className='mb-10'>
        <NewsletterForm />
      </section>

      <HomeExtraSection />
    </div>
  );
}
