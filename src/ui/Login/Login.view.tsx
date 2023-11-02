'use client';

import styles from 'ui/Login/login.module.scss';
import { useLogin } from 'ui/Login/login.hooks';

export const LoginView = () => {
  const { theme } = useLogin();

  return (
    <main
      className={`xl:container xl:mx-auto flex min-h-screen items-center justify-center p-24 ${
        styles[theme] || ''
      } ${styles.container}`}
    >
      <div className="flex items-center">Login</div>
    </main>
  );
};
