import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { FetchPackageRequest } from 'domain/Packages/useCases/requests/FetchPackageRequest';
import { IPackagesRepository } from 'domain/Packages/repositories/packagesRepository.interface';
import { Package } from 'domain/shared/Packages/models/Package';

export const FetchPackageUseCase = (
  packagesRepository: IPackagesRepository
): IUseCase<FetchPackageRequest, Promise<Package>> => ({
  execute: async ({ packageId }: FetchPackageRequest) =>
    packagesRepository.getPackage({ packageId }),
});
