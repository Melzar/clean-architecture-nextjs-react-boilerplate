import { AxiosResponse } from 'axios';

import { IPackagesRepository } from 'domain/Packages/repositories/packagesRepository.interface';
import { INetwork } from 'data/network/common/config/network.interface';
import { FetchFunction } from 'data/network/rest/common/types/network.types';
import { GetPackageRepositoryRequest } from 'domain/Packages/repositories/requests/GetPackageRepositoryRequest';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { PackageRest } from 'data/network/rest/v1/Packages/models/PackageRest';
import { PACKAGES_ENDPOINTS } from 'data/network/rest/v1/Packages/consts/PackagesEndpoints';
import {
  packageRestToPackageDomain,
  packagesRestToPackagesDomain,
} from 'data/network/rest/v1/shared/Packages/mappers/packageRestToPackageDomain';

export const PackagesRepository = ({
  client,
}: INetwork<FetchFunction>): IPackagesRepository => ({
  getPackages: async () => {
    const restClient = await client();

    const { data, status } = await restClient.get<
      PackageRest[],
      AxiosResponse<PackageRest[]>
    >(ApiPath(PACKAGES_ENDPOINTS.PACKAGES().path));

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return packagesRestToPackagesDomain(data);
  },
  getPackage: async ({ packageId }: GetPackageRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.get<
      PackageRest,
      AxiosResponse<PackageRest>
    >(ApiPath(PACKAGES_ENDPOINTS.PACKAGE({ packageId }).path));

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return packageRestToPackageDomain(data);
  },
});
