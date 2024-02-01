'use client';

import React from 'react';

import { FieldEmail } from 'ui/common/components/fields/FieldEmail/FieldEmail';
import { FieldPassword } from 'ui/common/components/fields/FieldPassword/FieldPassword';
import { PrimaryButton } from 'ui/common/components/buttons/PrimaryButton/PrimaryButton';
import { useLoginForm } from 'ui/Login/components/LoginForm/loginForm.hooks';

import styles from 'ui/Login/login.module.scss';

export const LoginForm = () => {
  const { onSubmit } = useLoginForm();

  return (
    <form action={onSubmit}>
      <FieldEmail placeholder="Email" name="login" testId="login" required />
      <FieldPassword
        placeholder="Password"
        name="password"
        testId="password"
        required
      />
      <PrimaryButton
        className={styles.signInButton}
        type="submit"
        testId="signIn"
      >
        Sign in
      </PrimaryButton>
    </form>
  );
};
