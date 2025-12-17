import { Suspense } from 'react';
import { GallerySection } from '@/components/home/gallery';
import { GallerySectionSkeleton } from '@/components/home/loading';
import NewsletterForm from '@/components/shared/newsletter-form';
import { config } from '@/config';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <header className='mb-10'>
        <h1 className='mb-1 font-medium text-2xl text-foreground'>
          {config.site.name}
        </h1>
        <p className='text-muted-foreground text-sm'>
          {config.site.description}
        </p>
      </header>

      <Suspense fallback={<GallerySectionSkeleton />}>
        <GallerySection />
      </Suspense>

      <section className='mb-10'>
        <NewsletterForm />
      </section>

      {config.home.extraSection}
    </div>
  );
}
