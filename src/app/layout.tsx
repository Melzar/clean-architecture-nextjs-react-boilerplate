import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import { TopHeader } from "ui/common/components/layout/TopHeader/TopHeader";
import { TopNavigation } from "ui/common/components/layout/TopNavigation/TopNavigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clean Architecture Next.js React Boilerplate',
  description: 'Boilerplate for Clean Architecture with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TopHeader>
          <TopNavigation />
      </TopHeader>
      {children}
      </body>
    </html>
  )
}
