import { env } from '@/lib/env';
import { getPhotoBySlug } from '@/lib/notion';
import { format } from 'date-fns';
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const photo = await getPhotoBySlug(params.slug);

  if (!photo) {
    return new Response('Not found', { status: 404 });
  }

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '60px 80px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'black',
            marginBottom: '20px',
            lineHeight: 1.2,
            maxWidth: '1000px',
          }}
        >
          {photo.title}
        </h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '24px',
            color: '#666',
          }}
        >
          {photo.date && <div>{format(new Date(photo.date), 'MMMM d, yyyy')}</div>}
          {photo.location && photo.location.length > 0 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              {photo.location.map((location) => (
                <div
                  key={location}
                  style={{
                    backgroundColor: '#f0f0f0',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '18px',
                  }}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '40px',
          fontSize: '20px',
          color: '#666',
        }}
      >
        <div>{env.NEXT_PUBLIC_SITE_URL}</div>
        <div>View Photo →</div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
