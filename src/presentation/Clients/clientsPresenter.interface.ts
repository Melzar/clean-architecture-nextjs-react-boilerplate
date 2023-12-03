import { FetchClientPresenterRequest } from 'presentation/Clients/requests/FetchClientPresenterRequest';
import { FetchClientPackagesPresenterRequest } from 'presentation/Clients/requests/FetchClientPackagesPresenterRequest';
import { Package } from 'presentation/shared/Packages/models/Package';
import { Client } from 'domain/Clients/models/Client';

export interface IClientsPresenter {
  fetchClients: () => Promise<Client[]>;
  fetchClient: (request: FetchClientPresenterRequest) => Promise<Client>;
  fetchClientPackages: (
    request: FetchClientPackagesPresenterRequest
  ) => Promise<Package[]>;
}
