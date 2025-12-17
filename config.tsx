import { env } from '@/lib/env';

export const config = {
  site: {
    name: 'Notion Photo React',
    description: 'A Notion Photo Gallery powered by Next.js',
    author: 'Harry Yep',
    url: env.NEXT_PUBLIC_SITE_URL,
  },
  home: {
    extraSection: (
      <section>
        <p className='mb-2 font-medium text-muted-foreground text-sm'>More</p>
        <p className='text-muted-foreground text-sm'>
          Follow Harry Yep on{' '}
          <a
            className='text-foreground transition-colors hover:text-muted-foreground'
            href='https://twitter.com/okisdev'
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            className='text-foreground transition-colors hover:text-muted-foreground'
            href='https://github.com/okisdev'
          >
            GitHub
          </a>
          .
        </p>
      </section>
    ),
  },
  post: {
    footer: (
      <footer>
        <div className='flex items-center justify-between'>
          <p className='text-muted-foreground text-sm'>
            Copyright © 2025 Harry Yep. All rights reserved.
          </p>
        </div>
      </footer>
    ),
  },
};
