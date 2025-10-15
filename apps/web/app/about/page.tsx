'use client';

import Link from 'next/link';

import { Badge } from '@ui/components/ui/badge';
import { Button } from '@ui/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@ui/components/ui/card';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">About this starter</h1>
            <p className="text-muted-foreground">An Nx monorepo with Next.js App Router and shared UI library.</p>
          </div>
          <Badge variant="outline">v1.0.0</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Key features</CardTitle>
            <CardDescription>Everything preconfigured to start building immediately.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Nx task running, caching, and workspace structure.</li>
              <li>Next.js 14 App Router with Tailwind CSS and dark mode support.</li>
              <li>Reusable shadcn/ui components exported from the <code>ui</code> library.</li>
              <li>Consistent linting and formatting via ESLint + Prettier.</li>
            </ul>
          </CardContent>
        </Card>

        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </main>
  );
}
