'use client';

import { usePathname } from 'next/navigation';

import { useTheme } from 'next-themes';

import { APP_ROUTES } from 'ui/common/navigation/routes';

export const useTopNavigation = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const isHome = (): boolean => {
    return pathname === APP_ROUTES.HOME;
  };

  const setApplicationTheme = (theme: string) => () => {
    setTheme(theme);
  };

  return {
    isActive,
    isHome,
    setApplicationTheme,
  };
};
