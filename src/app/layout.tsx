import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { TopHeader } from 'ui/common/components/layout/TopHeader/TopHeader';
import { TopNavigation } from 'ui/common/components/layout/TopNavigation/TopNavigation';

import { ThemeProvider } from 'ui/common/providers/theme.provider';
import { THEME } from 'ui/common/consts/theme';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clean Architecture Next.js React Boilerplate',
  description: 'Boilerplate for Clean Architecture with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={THEME.DARK}
          themes={[THEME.DARK, THEME.DARK]}
          enableSystem
          disableTransitionOnChange
        >
          <TopHeader>
            <TopNavigation />
          </TopHeader>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
