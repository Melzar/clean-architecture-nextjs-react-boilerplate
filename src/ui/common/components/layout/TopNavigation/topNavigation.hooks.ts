'use client';

import { usePathname, useRouter } from 'next/navigation';

import { useTheme } from 'next-themes';

import { APP_ROUTES } from 'ui/common/navigation/routes';
import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';

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

  const setApplicationTheme = (theme: string) => () => {
    setTheme(theme);
  };

  const onLoginClick = async () => {
    const result = await logIn({
      email: 'test',
      password: 'test',
    });
    if (result.ok) {
      router.push('/dashboard');
    }
  };

  const onLogoutClick = async () => {
    logOut();
    router.push('/');
  };

  return {
    isActive,
    isHome,
    setApplicationTheme,
    onLoginClick,
    onLogoutClick,
  };
};
