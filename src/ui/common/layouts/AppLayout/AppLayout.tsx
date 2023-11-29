'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'ui/common/providers/theme.provider';
import { THEME } from 'ui/common/consts/theme';
import { useAppLayout } from 'ui/common/layouts/AppLayout/appLayout.hooks';
import { MemberLayout } from 'ui/common/layouts/MemberLayout/MemberLayout';
import { AdminLayout } from 'ui/common/layouts/AdminLayout/AdminLayout';

type Props = {
  children: ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  const { isMember, isAdmin, isGuest } = useAppLayout();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={THEME.DARK}
      themes={[THEME.LIGHT, THEME.DARK]}
      enableSystem
      disableTransitionOnChange
    >
      {isMember && <MemberLayout>{children}</MemberLayout>}
      {isAdmin && <AdminLayout>{children}</AdminLayout>}
      {isGuest && children}
    </ThemeProvider>
  );
};
