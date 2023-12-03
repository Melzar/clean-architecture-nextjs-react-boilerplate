import { ContainerModule, interfaces } from 'inversify';

import { IClientsRepository } from 'domain/Clients/repositories/IClientsRepository';
import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { ClientsRepository } from 'data/network/rest/v1/Clients/repositories/clients.repository';
import { applyDependencies } from 'ioc/common/utils/ioc.utils';
import { IClientPackagesRepository } from 'domain/Clients/repositories/IClientPackagesRepository';
import { ClientPackagesRepository } from 'data/network/rest/v1/Clients/repositories/clientPackages.repository';
import { FetchClientUseCase } from 'domain/Clients/useCases/fetchClient.useCase';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { FetchClientRequest } from 'domain/Clients/useCases/requests/FetchClientRequest';
import { Client } from 'domain/Clients/models/Client';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { FetchClientPackagesRequest } from 'domain/Clients/useCases/requests/FetchClientPackagesRequest';
import { Package } from 'domain/shared/Packages/models/Package';
import { FetchClientPackagesUseCase } from 'domain/Clients/useCases/fetchClientPackages.useCase';
import { FetchClientsUseCase } from 'domain/Clients/useCases/fetchClients.useCase';
import { IClientsPresenter } from 'presentation/Clients/clientsPresenter.interface';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { ClientsPresenter } from 'presentation/Clients/clients.presenter';

const initializeModule = (bind: interfaces.Bind) => {
  bind<IClientsRepository>(
    DataModuleSymbols.CLIENTS_REPOSITORY
  ).toConstantValue(
    applyDependencies(ClientsRepository, [DataModuleSymbols.REST_CLIENT])
  );

  bind<IClientPackagesRepository>(
    DataModuleSymbols.CLIENTS_PACKAGES_REPOSITORY
  ).toConstantValue(
    applyDependencies(ClientPackagesRepository, [DataModuleSymbols.REST_CLIENT])
  );

  bind<IUseCase<FetchClientRequest, Promise<Client>>>(
    DomainModuleSymbols.FETCH_CLIENT_USE_CASE
  ).toConstantValue(
    applyDependencies(FetchClientUseCase, [
      DataModuleSymbols.CLIENTS_REPOSITORY,
    ])
  );

  bind<IUseCase<void, Promise<Client[]>>>(
    DomainModuleSymbols.FETCH_CLIENTS_USE_CASE
  ).toConstantValue(
    applyDependencies(FetchClientsUseCase, [
      DataModuleSymbols.CLIENTS_REPOSITORY,
    ])
  );

  bind<IUseCase<FetchClientPackagesRequest, Promise<Package[]>>>(
    DomainModuleSymbols.FETCH_CLIENT_PACKAGES_USE_CASE
  ).toConstantValue(
    applyDependencies(FetchClientPackagesUseCase, [
      DataModuleSymbols.CLIENTS_PACKAGES_REPOSITORY,
    ])
  );

  bind<IClientsPresenter>(
    PresentationModuleSymbols.CLIENTS_PRESENTER
  ).toConstantValue(
    applyDependencies(ClientsPresenter, [
      DomainModuleSymbols.FETCH_CLIENTS_USE_CASE,
      DomainModuleSymbols.FETCH_CLIENT_USE_CASE,
      DomainModuleSymbols.FETCH_CLIENT_PACKAGES_USE_CASE,
    ])
  );
};

export const ClientsModule = new ContainerModule(initializeModule);
