import { GetClientPackagesRepositoryRequest } from 'domain/Clients/repositories/requests/GetClientPackagesRepositoryRequest';
import { Package } from 'domain/shared/Packages/models/Package';

export interface IClientPackagesRepository {
  getClientPackages: (
    request: GetClientPackagesRepositoryRequest
  ) => Promise<Package[]>;
}
