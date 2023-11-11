import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { AuthenticateUserRequest } from 'domain/Application/Authentication/useCases/requests/AuthenticateUserRequest';
import { IAuthenticationRepository } from 'domain/Application/Authentication/repositories/authenticationRepository.interface';

export const AuthenticateUserUseCase = (
  authRepository: IAuthenticationRepository
): IUseCase<AuthenticateUserRequest, Promise<Authentication>> => ({
  execute: async ({ password, username }: AuthenticateUserRequest) => {
    return authRepository.authenticate({
      username,
      password,
    });
  },
});
