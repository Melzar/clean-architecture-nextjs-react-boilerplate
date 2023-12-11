import { fetchClients } from 'ui/Clients/Admin/Clients/clients.actions';
import { Client } from 'presentation/shared/Clients/models/Client';

type UseClientsData = {
  getClients: () => Promise<Client[]>;
};

export const useClientsData = (): UseClientsData => {
  const getClients = async () => {
    return fetchClients();
  };

  return {
    getClients,
  };
};
