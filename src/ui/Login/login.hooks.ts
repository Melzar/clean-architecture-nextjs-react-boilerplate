import { useTheme } from 'next-themes';

export const useLogin = () => {
  const { theme } = useTheme();

  return {
    theme,
  };
};
