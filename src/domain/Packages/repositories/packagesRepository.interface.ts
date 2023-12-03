import { Package } from 'domain/shared/Packages/models/Package';
import { GetPackageRepositoryRequest } from 'domain/Packages/repositories/requests/GetPackageRepositoryRequest';

export interface IPackagesRepository {
  getPackage: (request: GetPackageRepositoryRequest) => Promise<Package>;
  getPackages: () => Promise<Package[]>;
}
