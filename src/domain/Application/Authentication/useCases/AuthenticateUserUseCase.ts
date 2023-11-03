import { UseCaseInterface } from 'domain/common/useCases/useCase.interface';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticateUserRequest } from 'domain/Application/Authentication/useCases/requests/AuthenticateUserRequest';
import { AuthenticationRepositoryInterface } from 'domain/Application/Authentication/repositories/AuthenticationRepositoryInterface';
import { AuthenticateRepositoryRequest } from 'domain/Application/Authentication/repositories/requests/AuthenticateRepositoryRequest';
import { AuthRepository } from 'data/network/rest/v1/Auth/repositories/AuthRepository';

export const AuthenticateUserUseCase = (
  authRepository: AuthenticationRepositoryInterface = AuthRepository()
): UseCaseInterface<AuthenticateUserRequest, Promise<Authentication>> => ({
  execute: async ({
    input: { password, username },
  }: AuthenticateUserRequest) => {
    return authRepository.authenticate(
      new AuthenticateRepositoryRequest({
        username,
        password,
      })
    );
  },
});
