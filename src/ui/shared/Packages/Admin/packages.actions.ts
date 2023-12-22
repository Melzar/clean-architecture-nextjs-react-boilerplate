'use server';

import { inject } from 'ui/common/utils/inject';
import { PresentationModuleSymbols } from 'presentation/PresentationModuleSymbols';
import { IPackagesPresenter } from 'presentation/Packages/packagesPresenter.interface';

const { fetchPackages, fetchPackage } = inject<IPackagesPresenter>(
  PresentationModuleSymbols.PACKAGES_PRESENTER
);

export { fetchPackages, fetchPackage };
