'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { useClientData } from 'ui/Clients/Admin/Client/client.data';
import { Package } from 'presentation/shared/Packages/models/Package';
import { Client } from 'presentation/shared/Clients/models/Client';

export const useClient = () => {
  const [client, setClient] = useState<Client>();
  const [packages, setPackages] = useState<Package[]>([]);

  const { getClient, getClientPackages } = useClientData();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const clientResult = await getClient(id as string);
      const packagesResult = await getClientPackages(id as string);
      setClient(clientResult);
      setPackages(packagesResult);
    })();
  }, []);

  return {
    client,
    packages,
  };
};
