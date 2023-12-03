import { ResourceDefinition } from 'data/network/rest/common/types/network.types';
import {
  GetClientInput,
  GetClientPackagesInput,
} from 'data/network/rest/v1/Clients/consts/ClientsInputs';

export type ClientsEndpointsDefinition = {
  CLIENTS: ResourceDefinition;
  CLIENTS_PACKAGES: ResourceDefinition<GetClientPackagesInput>;
  CLIENT: ResourceDefinition<GetClientInput>;
};

export const CLIENTS_ENDPOINTS: ClientsEndpointsDefinition = {
  CLIENTS: () => ({
    path: 'clients',
    method: 'GET',
  }),
  CLIENT: ({ clientId }: GetClientInput) => ({
    path: `clients/${clientId}`,
    method: 'GET',
  }),
  CLIENTS_PACKAGES: ({ clientId }: GetClientPackagesInput) => ({
    path: `clients/${clientId}/packages`,
    method: 'GET',
  }),
};
