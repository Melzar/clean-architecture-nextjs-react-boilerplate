import { FetchPackagePresenterRequest } from 'presentation/Packages/requests/FetchPackagePresenterRequest';
import { Package } from 'presentation/shared/Packages/models/Package';

export interface IPackagesPresenter {
  fetchPackages: () => Promise<Package[]>;
  fetchPackage: (request: FetchPackagePresenterRequest) => Promise<Package>;
}
