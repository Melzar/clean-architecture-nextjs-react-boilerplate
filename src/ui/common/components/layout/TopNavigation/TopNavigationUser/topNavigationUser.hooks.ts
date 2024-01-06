import { getServerSession, Session } from 'next-auth';

import { AuthenticationOptions } from 'ui/common/config/Authentication/authenticationOptions';

type UseTopNavigationUser = {
  session: Session;
};

export const useTopNavigationUser = async (): Promise<UseTopNavigationUser> => {
  const session = await getServerSession(AuthenticationOptions);

  return {
    session,
  };
};
