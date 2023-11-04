import { IAuthenticationPresenter } from 'presentation/Application/Authentication/authenticationPresenter.interface';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { AuthenticateUserRequest } from 'domain/Application/Authentication/useCases/requests/AuthenticateUserRequest';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticatePresenterRequest } from 'presentation/Application/Authentication/requests/AuthenticatePresenterRequest';
import { authenticationDomainToAuthenticationView } from 'presentation/shared/Authentication/mappers/authenticationDomainToAuthenticationView';

export const AuthenticationPresenter = (
  authenticateUserUseCase: IUseCase<
    AuthenticateUserRequest,
    Promise<Authentication>
  >
): IAuthenticationPresenter => ({
  authenticate: async ({ password, email }: AuthenticatePresenterRequest) => {
    const result = await authenticateUserUseCase.execute({
      username: email,
      password,
    });
    return authenticationDomainToAuthenticationView(result);
  },
});
