import { ContainerModule, interfaces } from 'inversify';

import { IPackagesRepository } from 'domain/Packages/repositories/packagesRepository.interface';
import { DataModuleSymbols } from 'data/DataModuleSymbols';
import { applyDependencies } from 'ioc/common/utils/ioc.utils';
import { PackagesRepository } from 'data/network/rest/v1/Packages/repositories/packages.repository';
import { IUseCase } from 'domain/common/useCases/useCase.interface';
import { FetchPackageRequest } from 'domain/Packages/useCases/requests/FetchPackageRequest';
import { Package } from 'domain/shared/Packages/models/Package';
import { DomainModuleSymbols } from 'domain/DomainModuleSymbols';
import { FetchPackageUseCase } from 'domain/Packages/useCases/fetchPackage.useCase';
import { FetchPackagesUseCase } from 'domain/Packages/useCases/fetchPackages.useCase';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { PackagesPresenter } from 'presentation/Packages/packages.presenter';
import { IPackagesPresenter } from 'presentation/Packages/packagesPresenter.interface';

const initializeModule = (bind: interfaces.Bind) => {
  bind<IPackagesRepository>(
    DataModuleSymbols.PACKAGES_REPOSITORY
  ).toConstantValue(
    applyDependencies(PackagesRepository, [DataModuleSymbols.REST_CLIENT])
  );

  bind<IUseCase<FetchPackageRequest, Promise<Package>>>(
    DomainModuleSymbols.FETCH_PACKAGE_USE_CASE
  ).toConstantValue(
    applyDependencies(FetchPackageUseCase, [
      DataModuleSymbols.PACKAGES_REPOSITORY,
    ])
  );

  bind<IUseCase<void, Promise<Package[]>>>(
    DomainModuleSymbols.FETCH_PACKAGES_USE_CASE
  ).toConstantValue(
    applyDependencies(FetchPackagesUseCase, [
      DataModuleSymbols.PACKAGES_REPOSITORY,
    ])
  );

  bind<IPackagesPresenter>(
    PresentationModuleSymbols.PACKAGES_PRESENTER
  ).toConstantValue(
    applyDependencies(PackagesPresenter, [
      DomainModuleSymbols.FETCH_PACKAGES_USE_CASE,
      DomainModuleSymbols.FETCH_PACKAGE_USE_CASE,
    ])
  );
};

export const PackagesModule = new ContainerModule(initializeModule);
