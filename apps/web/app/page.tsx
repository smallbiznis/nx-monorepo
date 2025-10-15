'use client';

import Link from 'next/link';

import { Badge } from '@ui/components/ui/badge';
import { Button } from '@ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@ui/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@ui/components/ui/dropdown-menu';
import { toast } from '@ui/components/ui/use-toast';

import { ThemeToggle } from './(components)/theme-toggle';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 bg-gradient-to-b from-background via-background to-muted/30 p-8">
      <header className="flex w-full max-w-4xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="text-sm">
            Nx + Next.js
          </Badge>
          <span className="text-sm text-muted-foreground">App Router • Tailwind • shadcn/ui</span>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Navigation</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Pages</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
      </header>

      <Card className="w-full max-w-4xl border-border/60 shadow-lg">
        <CardHeader>
          <CardTitle>Welcome to your Nx-powered monorepo</CardTitle>
          <CardDescription>
            This starter combines Next.js App Router, Tailwind CSS, and shadcn/ui components inside an Nx workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Edit <code className="rounded bg-muted px-1 py-0.5">apps/web/app/page.tsx</code> to get started, or explore shared UI components in{' '}
            <code className="rounded bg-muted px-1 py-0.5">libs/ui</code>.
          </p>
          <Button
            onClick={() =>
              toast({
                title: 'Workspace ready',
                description: 'Nx, Next.js, Tailwind, and shadcn/ui are configured. Happy building!'
              })
            }
          >
            Trigger toast
          </Button>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Need a tour? Visit the About page for a quick overview.
          </span>
          <Button asChild variant="secondary">
            <Link href="/about">Go to About</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
