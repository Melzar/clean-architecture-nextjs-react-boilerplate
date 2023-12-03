import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { IClientPackagesRepository } from 'domain/Clients/repositories/IClientPackagesRepository';
import { FetchClientPackagesRequest } from 'domain/Clients/useCases/requests/FetchClientPackagesRequest';
import { Package } from 'domain/shared/Packages/models/Package';

export const FetchClientPackagesUseCase = (
  clientPackagesRepository: IClientPackagesRepository
): IUseCase<FetchClientPackagesRequest, Promise<Package[]>> => ({
  execute: async ({ clientId }: FetchClientPackagesRequest) =>
    clientPackagesRepository.getClientPackages({ clientId }),
});
