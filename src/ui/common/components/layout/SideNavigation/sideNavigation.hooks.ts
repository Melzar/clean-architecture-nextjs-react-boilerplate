import { usePathname, useRouter } from 'next/navigation';

import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';

export const useSideNavigation = () => {
  const { logOut } = useAuthentication();
  const router = useRouter();

  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const onLogoutClick = async () => {
    await logOut();
    router.push('/login');
  };

  return {
    isActive,
    onLogoutClick,
  };
};
