'use client';

import React from 'react';

import { FieldEmail } from 'ui/common/components/fields/FieldEmail/FieldEmail';
import { FieldPassword } from 'ui/common/components/fields/FieldPassword/FieldPassword';
import { PrimaryButton } from 'ui/common/components/buttons/PrimaryButton/PrimaryButton';
import { useLoginForm } from 'ui/Login/components/LoginForm/loginForm.hooks';

import styles from 'ui/Login/login.module.scss';
import {
  FIELD_PLACEHOLDER_EMAIL_TEXT,
  FIELD_PLACEHOLDER_PASSWORD_TEXT,
  SIGN_IN_BUTTON_LABEL,
} from 'ui/Login/components/LoginForm/loginForm.dictionary';
import {
  LOGIN_FIELD,
  PASSWORD_FIELD,
} from 'ui/Login/components/LoginForm/loginForm.consts';

export const LoginForm = () => {
  const { onSubmit } = useLoginForm();

  return (
    <form action={onSubmit}>
      <FieldEmail
        placeholder={FIELD_PLACEHOLDER_EMAIL_TEXT}
        name={LOGIN_FIELD}
        testId="login"
        required
      />
      <FieldPassword
        placeholder={FIELD_PLACEHOLDER_PASSWORD_TEXT}
        name={PASSWORD_FIELD}
        testId="password"
        required
      />
      <PrimaryButton
        className={styles.signInButton}
        type="submit"
        testId="signIn"
      >
        {SIGN_IN_BUTTON_LABEL}
      </PrimaryButton>
    </form>
  );
};
