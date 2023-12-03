import { AxiosResponse } from 'axios';

import { INetwork } from 'data/network/common/config/network.interface';
import { FetchFunction } from 'data/network/rest/common/types/network.types';
import { IClientPackagesRepository } from 'domain/Clients/repositories/IClientPackagesRepository';
import { GetClientPackagesRepositoryRequest } from 'domain/Clients/repositories/requests/GetClientPackagesRepositoryRequest';
import { ApiPath } from 'data/network/rest/v1/common/utils/ApiPath';
import { CLIENTS_ENDPOINTS } from 'data/network/rest/v1/Clients/consts/ClientsEndpoints';
import { packagesRestToPackagesDomain } from 'data/network/rest/v1/shared/Packages/mappers/packageRestToPackageDomain';
import { PackageRest } from 'data/network/rest/v1/Packages/models/PackageRest';

export const ClientPackagesRepository = ({
  client,
}: INetwork<FetchFunction>): IClientPackagesRepository => ({
  getClientPackages: async ({
    clientId,
  }: GetClientPackagesRepositoryRequest) => {
    const restClient = await client();

    const { data, status } = await restClient.get<
      PackageRest[],
      AxiosResponse<PackageRest[]>
    >(ApiPath(CLIENTS_ENDPOINTS.CLIENTS_PACKAGES({ clientId }).path));

    if (status !== 200) {
      throw Error('TODO ERROR HANDLING');
    }

    return packagesRestToPackagesDomain(data);
  },
});
