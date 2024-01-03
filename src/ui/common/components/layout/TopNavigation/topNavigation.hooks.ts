'use client';

import { useTheme } from 'next-themes';

import React from 'react';

import { useRouter } from 'next/navigation';

import { THEME } from 'ui/common/consts/theme';
import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';

export const useTopNavigation = () => {
  const { setTheme } = useTheme();
  const { logOut } = useAuthentication();
  const router = useRouter();

  const onThemeToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const theme = event.target.checked ? THEME.DARK : THEME.LIGHT;
    setTheme(theme);
  };

  const onLogoutClick = async () => {
    await logOut();
    router.push('/login');
  };

  return {
    onThemeToggle,
    onLogoutClick,
  };
};
