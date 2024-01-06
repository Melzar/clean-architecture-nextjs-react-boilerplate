import { fetchClients } from 'ui/Clients/Admin/Clients/components/ClientsList/clientsList.actions';
import { Client } from 'presentation/shared/Clients/models/Client';

type UseClientsListData = {
  getClients: () => Promise<Client[]>;
};

export const useClientsListData = (): UseClientsListData => {
  const getClients = async () => {
    return fetchClients();
  };

  return {
    getClients,
  };
};
