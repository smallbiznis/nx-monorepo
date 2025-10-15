'use client';

import { Toaster, type ToasterProps } from 'sonner';

export type { ExternalToast, ToastT, ToasterProps } from 'sonner';

export function SonnerToaster(props: ToasterProps) {
  return (
    <Toaster
      theme="system"
      toastOptions={{
        classNames: {
          toast: 'group rounded-lg border border-border bg-background text-foreground shadow-lg',
          title: 'text-sm font-semibold',
          description: 'text-sm text-muted-foreground',
          actionButton: 'inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          cancelButton: 'inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        }
      }}
      {...props}
    />
  );
}
