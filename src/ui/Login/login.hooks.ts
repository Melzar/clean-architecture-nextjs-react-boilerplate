import { useTheme } from 'next-themes';

import { useState } from 'react';

import { AuthenticationPresenter } from 'presentation/Application/Authentication/authentication.presenter';
import { AuthenticateRequest } from 'presentation/Application/Authentication/requests/AuthenticateRequest';
import { Authentication } from 'presentation/shared/Authentication/models/Authentication';

const authenticationPresenter = AuthenticationPresenter();

type UseLoginHook = {
  authentication?: Authentication;
  theme: string;
  onLoginClick: () => Promise<void>;
};

export const useLogin = (): UseLoginHook => {
  const { theme } = useTheme();
  const [authentication, setAuthentication] = useState<Authentication>();

  const onLoginClick = async () => {
    const result = await authenticationPresenter.authenticate(
      new AuthenticateRequest({
        email: '',
        password: '',
      })
    );
    setAuthentication(result);
  };

  return {
    authentication,
    theme,
    onLoginClick,
  };
};
