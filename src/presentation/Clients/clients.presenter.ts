import { IClientsPresenter } from 'presentation/Clients/clientsPresenter.interface';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { Client } from 'domain/Clients/models/Client';
import { FetchClientRequest } from 'domain/Clients/useCases/requests/FetchClientRequest';
import { FetchClientPackagesRequest } from 'domain/Clients/useCases/requests/FetchClientPackagesRequest';
import { Package } from 'domain/shared/Packages/models/Package';
import { FetchClientPresenterRequest } from 'presentation/Clients/requests/FetchClientPresenterRequest';
import { FetchClientPackagesPresenterRequest } from 'presentation/Clients/requests/FetchClientPackagesPresenterRequest';

export const ClientsPresenter = (
  fetchClientsUseCase: IUseCase<void, Promise<Client[]>>,
  fetchClientUseCase: IUseCase<FetchClientRequest, Promise<Client>>,
  fetchClientPackagesUseCase: IUseCase<
    FetchClientPackagesRequest,
    Promise<Package[]>
  >
): IClientsPresenter => ({
  fetchClients: async () => fetchClientsUseCase.execute(),
  fetchClient: async ({ clientId }: FetchClientPresenterRequest) =>
    fetchClientUseCase.execute({
      clientId,
    }),
  fetchClientPackages: async ({
    clientId,
  }: FetchClientPackagesPresenterRequest) =>
    fetchClientPackagesUseCase.execute({ clientId }),
});
