import { env } from '@/lib/env';
import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: env.NOTION_API_KEY,
});

export const PHOTO_TABLE_ID = env.NOTION_DATABASE_ID;

export interface Photo {
  id: string;
  title: string;
  location: string[];
  published: boolean;
  date: string;
  slug: string;
  author: string;
  url: string;
}

export async function getAllPhotos(): Promise<Photo[]> {
  try {
    const response = await notion.databases.query({
      database_id: PHOTO_TABLE_ID,
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
    });

    return response.results.map((page: any) => {
      const properties = (page as any).properties;

      return {
        id: page.id,
        title: properties.title?.title[0]?.plain_text || 'Untitled',
        location: properties.location?.select[0]?.name || '',
        date: properties.date?.date?.start || '',
        slug: properties.slug?.rich_text[0]?.plain_text || '',
        author: properties.author?.select[0]?.name || '',
        url: properties.url?.url || '',
        published: properties.published?.checkbox || false,
      };
    });
  } catch (error) {
    console.error('Error fetching photos from Notion:', error);
    return [];
  }
}

// Function to fetch a single photo by slug
export async function getPhotoBySlug(slug: string): Promise<Photo | null> {
  try {
    const response = await notion.databases.query({
      database_id: PHOTO_TABLE_ID,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];
    // Type assertion for Notion page object
    const properties = (page as any).properties;

    return {
      id: page.id,
      title: properties.title?.title[0]?.plain_text || 'Untitled',
      location: properties.location?.select[0]?.name || '',
      date: properties.date?.date?.start || '',
      slug: properties.slug?.rich_text[0]?.plain_text || '',
      author: properties.author?.select[0]?.name || '',
      url: properties.url?.url || '',
      published: properties.published?.checkbox || false,
    };
  } catch (error) {
    console.error(`Error fetching post with slug ${slug} from Notion:`, error);
    return null;
  }
}
