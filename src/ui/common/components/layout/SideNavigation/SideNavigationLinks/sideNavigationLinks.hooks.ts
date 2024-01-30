import { usePathname } from 'next/navigation';

type UseSideNavigationLinks = {
  isActive: (path: string) => boolean;
};
export const useSideNavigationLinks = (): UseSideNavigationLinks => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  return {
    isActive,
  };
};
