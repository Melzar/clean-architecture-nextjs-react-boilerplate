import { usePathname } from 'next/navigation';

export const useSideNavigation = () => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  return {
    isActive,
  };
};
