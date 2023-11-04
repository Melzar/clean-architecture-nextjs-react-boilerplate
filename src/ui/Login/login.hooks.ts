import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Authentication } from 'presentation/shared/Authentication/models/Authentication';
import { useLoginData } from 'ui/Login/login.data';

type UseLoginHook = {
  authentication?: Authentication;
  theme: string;
  onLoginClick: () => Promise<void>;
};

export const useLogin = (): UseLoginHook => {
  const { theme } = useTheme();
  const [authentication, setAuthentication] = useState<Authentication>();

  const { authenticateUser } = useLoginData();

  const onLoginClick = async () => {
    const result = await authenticateUser({
      email: '',
      password: '',
    });
    setAuthentication(result);
  };

  return {
    authentication,
    theme,
    onLoginClick,
  };
};
