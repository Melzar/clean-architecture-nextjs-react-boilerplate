import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { AuthenticationProvider } from 'ui/common/providers/authentication.provider';
import { lato } from 'ui/common/assets/fonts/fonts';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Clean Architecture Next.js React Boilerplate',
  description: 'Boilerplate for Clean Architecture with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </body>
    </html>
  );
}
