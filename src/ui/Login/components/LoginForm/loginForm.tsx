'use client';

import React from 'react';

import { FieldEmail } from 'ui/common/components/fields/FieldEmail/FieldEmail';
import { FieldPassword } from 'ui/common/components/fields/FieldPassword/FieldPassword';
import { PrimaryButton } from 'ui/common/components/buttons/PrimaryButton/PrimaryButton';
import styles from 'ui/Login/login.module.scss';
import { useLoginForm } from 'ui/Login/components/LoginForm/loginForm.hooks';

export const LoginForm = () => {
  const { onSubmit } = useLoginForm();

  return (
    <form action={onSubmit}>
      <FieldEmail placeholder="Email" name="login" required />
      <FieldPassword placeholder="Password" name="password" required />
      <PrimaryButton className={styles.signInButton} type="submit">
        Sign in
      </PrimaryButton>
    </form>
  );
};
