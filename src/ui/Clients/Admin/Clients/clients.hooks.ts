'use client';

import { useEffect, useState } from 'react';

import { useClientsData } from 'ui/Clients/Admin/Clients/clients.data';
import { Client } from 'presentation/shared/Clients/models/Client';

type UseClients = {
  clients: Client[];
};

export const useClients = (): UseClients => {
  const [clients, setClients] = useState<Client[]>([]);
  const { getClients } = useClientsData();

  useEffect(() => {
    (async () => {
      const result = await getClients();
      setClients(result);
    })();
  }, []);

  return {
    clients,
  };
};
