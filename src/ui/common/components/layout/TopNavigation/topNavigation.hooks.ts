'use client';

import { usePathname, useRouter } from 'next/navigation';

import { useTheme } from 'next-themes';

import React from 'react';

import { APP_ROUTES } from 'ui/common/navigation/routes';
import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';
import { THEME } from 'ui/common/consts/theme';

export const useTopNavigation = () => {
  const { logIn, logOut } = useAuthentication();

  const router = useRouter();
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const isHome = (): boolean => {
    return pathname === APP_ROUTES.HOME;
  };

  const onThemeToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const theme = event.target.checked ? THEME.DARK : THEME.LIGHT;
    setTheme(theme);
  };

  const onLoginClick = async () => {
    const result = await logIn({
      email: 'test',
      password: 'test',
    });
    if (result.ok) {
      router.push('/');
    }
  };

  const onLogoutClick = async () => {
    await logOut();
    router.push('/login');
  };

  return {
    isActive,
    isHome,
    onLoginClick,
    onLogoutClick,
    onThemeToggle,
  };
};
