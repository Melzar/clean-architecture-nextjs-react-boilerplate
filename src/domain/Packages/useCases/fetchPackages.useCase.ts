import { IPackagesRepository } from 'domain/Packages/repositories/packagesRepository.interface';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { Package } from 'domain/shared/Packages/models/Package';

export const FetchPackagesUseCase = (
  packagesRepository: IPackagesRepository
): IUseCase<void, Promise<Package[]>> => ({
  execute: async () => packagesRepository.getPackages(),
});
