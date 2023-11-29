import { useRouter } from 'next/navigation';

import { useLoginData } from 'ui/Login/login.data';
import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';

type UseLoginHook = {
  onSubmit: (formData: FormData) => void;
};

export const useLogin = (): UseLoginHook => {
  const { logIn } = useAuthentication();
  const router = useRouter();

  // eslint-disable-next-line no-empty-pattern
  const {} = useLoginData();

  const onSubmit = async (formData: FormData) => {
    const email = (formData.get('login') as string) || '';
    const password = (formData.get('password') as string) || '';

    const result = await logIn({
      email,
      password,
    });
    if (result.ok) {
      router.push('/');
    }
  };

  return {
    onSubmit,
  };
};
