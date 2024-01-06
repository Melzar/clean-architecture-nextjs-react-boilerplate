import {
  signIn,
  SignInResponse,
  signOut,
  SignOutResponse,
} from 'next-auth/react';

import { AuthenticateUserInput } from 'ui/shared/Application/Authentication/authentication.types';

type UseAuthentication = {
  logIn: (input: AuthenticateUserInput) => Promise<SignInResponse>;
  logOut: () => Promise<SignOutResponse>;
};

export const useAuthentication = (): UseAuthentication => {
  const logIn = async ({ email, password }: AuthenticateUserInput) => {
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    return response || { status: 403, error: 'Forbidden', ok: false, url: '' };
  };

  const logOut = async () => {
    return signOut({
      redirect: false,
    });
  };

  return {
    logIn,
    logOut,
  };
};
