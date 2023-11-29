import { useSession } from 'next-auth/react';

type UseAppLayout = {
  isGuest: boolean;
  isMember: boolean;
  isAdmin: boolean;
};
export const useAppLayout = (): UseAppLayout => {
  const { data: session, status } = useSession();

  const isGuest =
    !session && (status === 'unauthenticated' || status === 'loading');
  const isAuthenticated = !!(session && status === 'authenticated');

  const isAdmin = isAuthenticated && session.meta.role === 'admin';
  const isMember = isAuthenticated && session.meta.role === 'member';

  return {
    isGuest,
    isMember,
    isAdmin,
  };
};
