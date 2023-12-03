import { ResourceDefinition } from 'data/network/rest/common/types/network.types';

export type AuthenticationEndpointsDefinition = {
  AUTHENTICATE: ResourceDefinition;
};

export const AUTHENTICATION_ENDPOINTS: AuthenticationEndpointsDefinition = {
  AUTHENTICATE: () => ({
    path: 'auth',
    method: 'POST',
  }),
};
