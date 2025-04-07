import { env } from '@/lib/env';
import { getAllPhotos } from '@/lib/notion';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const photos = await getAllPhotos();

  return [
    {
      url: env.NEXT_PUBLIC_SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...photos.map((photo) => ({
      url: `${env.NEXT_PUBLIC_SITE_URL}/${photo.slug}`,
      lastModified: new Date(photo.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
