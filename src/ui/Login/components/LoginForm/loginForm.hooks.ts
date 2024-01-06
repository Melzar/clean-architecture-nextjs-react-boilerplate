import { useRouter } from 'next/navigation';

import { useAuthentication } from 'ui/shared/Application/Authentication/authentication.hooks';
import { APP_ROUTES } from 'ui/common/navigation/routes';
import {
  LOGIN_FIELD,
  PASSWORD_FIELD,
} from 'ui/Login/components/LoginForm/loginForm.consts';

type UseLoginForm = {
  onSubmit: (formData: FormData) => void;
};

export const useLoginForm = (): UseLoginForm => {
  const { logIn } = useAuthentication();
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    const email = (formData.get(LOGIN_FIELD) as string) || '';
    const password = (formData.get(PASSWORD_FIELD) as string) || '';

    const result = await logIn({
      email,
      password,
    });
    if (result.ok) {
      router.push(APP_ROUTES.HOME);
    }
  };

  return {
    onSubmit,
  };
};
