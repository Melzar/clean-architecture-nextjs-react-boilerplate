import { ContainerModule, interfaces } from 'inversify';

import { AuthenticationRepositoryInterface } from 'domain/Application/Authentication/repositories/authenticationRepository.interface';
import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { applyDependencies } from 'ioc/common/utils/ioc.utils';
import { AuthRepository } from 'data/network/rest/v1/Auth/repositories/auth.repository';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { AuthenticateUserRequest } from 'domain/Application/Authentication/useCases/requests/AuthenticateUserRequest';
import { Authentication } from 'domain/Application/Authentication/models/Authentication';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { AuthenticateUserUseCase } from 'domain/Application/Authentication/useCases/authenticateUser.useCase';
import { IAuthenticationPresenter } from 'presentation/Application/Authentication/authenticationPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { AuthenticationPresenter } from 'presentation/Application/Authentication/authentication.presenter';

const initializeModule = (bind: interfaces.Bind) => {
  bind<AuthenticationRepositoryInterface>(
    DataModuleSymbols.AUTH_REPOSITORY
  ).toConstantValue(
    applyDependencies(AuthRepository, [DataModuleSymbols.REST_CLIENT])
  );

  bind<IUseCase<AuthenticateUserRequest, Promise<Authentication>>>(
    DomainModuleSymbols.AUTHENTICATE_USER_USE_CASE
  ).toConstantValue(
    applyDependencies(AuthenticateUserUseCase, [
      DataModuleSymbols.AUTH_REPOSITORY,
    ])
  );

  bind<IAuthenticationPresenter>(
    PresentationModuleSymbols.AUTHENTICATION_PRESENTER
  ).toConstantValue(
    applyDependencies(AuthenticationPresenter, [
      DomainModuleSymbols.AUTHENTICATE_USER_USE_CASE,
    ])
  );
};

export const AuthenticationModule = new ContainerModule(initializeModule);
