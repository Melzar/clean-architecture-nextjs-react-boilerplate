import { ResourceDefinition } from 'data/network/rest/common/types/network.types';

export const AUTH_ENDPOINTS: ResourceDefinition = {
  AUTHENTICATE: () => ({
    path: 'auth',
    method: 'POST',
  }),
};
