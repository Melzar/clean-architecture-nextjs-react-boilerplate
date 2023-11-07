import { useTheme } from 'next-themes';

import { useLoginData } from 'ui/Login/login.data';

type UseLoginHook = {
  theme: string;
};

export const useLogin = (): UseLoginHook => {
  const { theme } = useTheme();

  // eslint-disable-next-line no-empty-pattern
  const {} = useLoginData();

  return {
    theme,
  };
};
