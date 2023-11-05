import { Authentication } from 'presentation/shared/Authentication/models/Authentication';
import { AuthenticateUserInput } from 'ui/Login/login.types';
import { authenticate } from 'ui/Login/login.actions';

type UseLoginData = {
  authenticateUser: (input: AuthenticateUserInput) => Promise<Authentication>;
};

export const useLoginData = (): UseLoginData => {
  // You can add here any redux / whatever store implementation selectors or dispatchers

  const authenticateUser = async ({
    email,
    password,
  }: AuthenticateUserInput) => {
    return authenticate({ email, password });
  };

  return { authenticateUser };
};
