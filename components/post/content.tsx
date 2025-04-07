interface PhotoContentProps {
  photo: {
    url: string;
    title: string;
  };
}

export function PhotoContent({ photo }: PhotoContentProps) {
  return (
    <div className='space-y-6'>
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted'>
        <img src={photo.url} alt={photo.title} className='h-full w-full object-cover' loading='lazy' />
      </div>
    </div>
  );
}
