'use client';

import React from 'react';

import styles from 'ui/Login/login.module.scss';
import { useLogin } from 'ui/Login/login.hooks';
import { ContainerBox } from 'ui/common/components/layout/ContainerBox/ContainerBox';
import { PrimaryButton } from 'ui/common/components/buttons/PrimaryButton/PrimaryButton';
import { FieldEmail } from 'ui/common/components/fields/FieldEmail/FieldEmail';
import { FieldPassword } from 'ui/common/components/fields/FieldPassword/FieldPassword';
import { TextLogo } from 'ui/common/components/typography/TextLogo/TextLogo';

export const LoginView = () => {
  const { onSubmit } = useLogin();
  return (
    <main
      className={`xl:container xl:mx-auto flex min-h-screen flex-col  items-center justify-center p-24 ${styles.container}`}
    >
      <ContainerBox className="flex items-center justify-center flex-col">
        <TextLogo className={styles.logo}>Clean</TextLogo>
        <form action={onSubmit}>
          <FieldEmail placeholder="Email" name="login" required />
          <FieldPassword placeholder="Password" name="password" required />
          <PrimaryButton className={styles.signInButton} type="submit">
            Sign in
          </PrimaryButton>
        </form>
      </ContainerBox>
    </main>
  );
};
