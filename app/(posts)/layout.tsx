'use client';

import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const paths = pathname.split('/').filter(Boolean);

  return (
    <div className='mx-auto min-h-screen max-w-2xl px-4 py-10'>
      <Breadcrumb className='mb-8'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                className='text-muted-foreground transition-colors hover:text-foreground'
                href='/'
              >
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {paths.map((path, index) => {
            const pathParts = path.split('-');

            const pathName = pathParts
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(' ');

            return (
              <Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className={cn(
                        'text-muted-foreground transition-colors hover:text-foreground',
                        index === paths.length - 1 && 'text-foreground'
                      )}
                      href={`/${path}`}
                    >
                      {pathName}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== paths.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {children}
    </div>
  );
}
