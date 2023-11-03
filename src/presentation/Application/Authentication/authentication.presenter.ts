import { AuthenticationPresenterInterface } from 'presentation/Application/Authentication/AuthenticationPresenterInterface';
import { UseCaseInterface } from 'domain/common/useCases/useCase.interface';
import { AuthenticateUserRequest } from 'domain/Application/Authentication/useCases/requests/AuthenticateUserRequest';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticateRequest } from 'presentation/Application/Authentication/requests/AuthenticateRequest';
import { authenticationDomainToAuthenticationView } from 'presentation/shared/Authentication/mappers/authenticationDomainToAuthenticationView';
import { AuthenticateUserUseCase } from 'domain/Application/Authentication/useCases/AuthenticateUserUseCase';

export const AuthenticationPresenter = (
  authenticateUserUseCase: UseCaseInterface<
    AuthenticateUserRequest,
    Promise<Authentication>
  > = AuthenticateUserUseCase()
): AuthenticationPresenterInterface => ({
  authenticate: async ({ password, email }: AuthenticateRequest) => {
    const result = await authenticateUserUseCase.execute(
      new AuthenticateUserRequest({
        username: email,
        password,
      })
    );
    return authenticationDomainToAuthenticationView(result);
  },
});
