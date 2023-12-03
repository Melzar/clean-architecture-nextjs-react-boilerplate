import { FetchPackagePresenterRequest } from 'presentation/Packages/requests/FetchPackagePresenterRequest';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { FetchPackageRequest } from 'domain/Packages/useCases/requests/FetchPackageRequest';
import { Package } from 'domain/shared/Packages/models/Package';
import { IPackagesPresenter } from 'presentation/Packages/packagesPresenter.interface';

export const PackagesPresenter = (
  fetchPackagesUseCase: IUseCase<void, Promise<Package[]>>,
  fetchPackageUseCase: IUseCase<FetchPackageRequest, Promise<Package>>
): IPackagesPresenter => ({
  fetchPackages: async () => fetchPackagesUseCase.execute(),
  fetchPackage: async ({ packageId }: FetchPackagePresenterRequest) =>
    fetchPackageUseCase.execute({ packageId }),
});
