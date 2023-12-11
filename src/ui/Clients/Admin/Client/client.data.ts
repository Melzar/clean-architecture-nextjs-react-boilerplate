import { Client } from 'presentation/shared/Clients/models/Client';
import { Package } from 'presentation/shared/Packages/models/Package';
import {
  fetchClient,
  fetchClientPackages,
} from 'ui/Clients/Admin/Client/client.actions';

type UseClientData = {
  getClient: (clientId: string) => Promise<Client>;
  getClientPackages: (clientId: string) => Promise<Package[]>;
};

export const useClientData = (): UseClientData => {
  const getClient = async (clientId: string) => {
    return fetchClient({ clientId });
  };

  const getClientPackages = async (clientId: string) => {
    return fetchClientPackages({ clientId });
  };

  return {
    getClient,
    getClientPackages,
  };
};
