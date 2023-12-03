import { ResourceDefinition } from 'data/network/rest/common/types/network.types';
import { GetPackageInput } from 'data/network/rest/v1/Packages/consts/PackagesInputs';

export type PackagesEndpointsDefinition = {
  PACKAGES: ResourceDefinition;
  PACKAGE: ResourceDefinition<GetPackageInput>;
};

export const PACKAGES_ENDPOINTS: PackagesEndpointsDefinition = {
  PACKAGES: () => ({
    path: 'packages',
    method: 'GET',
  }),
  PACKAGE: ({ packageId }: GetPackageInput) => ({
    path: `packages/${packageId}`,
    method: 'GET',
  }),
};
