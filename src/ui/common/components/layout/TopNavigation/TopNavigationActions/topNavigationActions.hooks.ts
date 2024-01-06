import { useTheme } from 'next-themes';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';
import { THEME } from 'ui/common/consts/theme';

type UseTopNavigationActions = {
  onThemeToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogoutClick: () => void;
};

export const useTopNavigationActions = (): UseTopNavigationActions => {
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
