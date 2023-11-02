import { usePathname } from 'next/navigation';

import { APP_ROUTES } from 'ui/common/navigation/routes';

export const useTopNavigation = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const isHome = (): boolean => {
    return pathname === APP_ROUTES.HOME;
  };

  return {
    isActive,
    isHome,
  };
};
