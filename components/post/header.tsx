import { format } from 'date-fns';

interface PhotoHeaderProps {
  photo: {
    title: string;
    date: string;
    location: string[];
  };
}

export function PhotoHeader({ photo }: PhotoHeaderProps) {
  return (
    <header>
      <h1 className='mb-2 font-medium text-3xl'>{photo.title}</h1>
      <div className='flex items-center gap-4 text-muted-foreground text-sm'>
        <time dateTime={photo.date}>{format(new Date(photo.date), 'MMMM d, yyyy')}</time>
        {photo.location && photo.location.length > 0 && (
          <div className='flex gap-2'>
            {photo.location.map((location) => (
              <span key={location} className='rounded-sm bg-secondary px-2 py-0.5 text-secondary-foreground'>
                {location}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
