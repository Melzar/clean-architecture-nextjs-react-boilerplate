import { Authentication } from 'presentation/shared/Authentication/models/Authentication';
import { inject } from 'ui/common/utils/inject';
import { IAuthenticationPresenter } from 'presentation/Application/Authentication/authenticationPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { AuthenticateUserInput } from 'ui/Login/login.types';

type UseLoginData = {
  authenticateUser: (input: AuthenticateUserInput) => Promise<Authentication>;
};

const authenticationPresenter = inject<IAuthenticationPresenter>(
  PresentationModuleSymbols.AUTHENTICATION_PRESENTER
);

export const useLoginData = (): UseLoginData => {
  // You can add here any redux / whatever store implementation selectors or dispatchers

  const authenticateUser = async ({
    email,
    password,
  }: AuthenticateUserInput) => {
    return authenticationPresenter.authenticate({ email, password });
  };

  return { authenticateUser };
};
