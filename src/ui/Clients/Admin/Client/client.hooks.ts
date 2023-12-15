'use client';

import { useEffect, useRef, useState } from 'react';

import { useParams } from 'next/navigation';

import { useClientData } from 'ui/Clients/Admin/Client/client.data';
import { Package } from 'presentation/shared/Packages/models/Package';
import { Client } from 'presentation/shared/Clients/models/Client';

export const useClient = () => {
  const initialPackagesSelection = useRef<Record<string, boolean>>({});
  const [client, setClient] = useState<Client>();
  const [packages, setPackages] = useState<Package[]>([]);
  const [packagesSelection, setPackagesSelection] = useState<
    Record<string, boolean>
  >({});

  const { getClient, getClientPackages } = useClientData();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const clientResult = await getClient(id as string);
      const packagesResult = await getClientPackages(id as string);

      const selectedPackages: Record<string, boolean> = {};

      packagesResult.forEach((pack) => {
        selectedPackages[pack.id] = false;
      });

      initialPackagesSelection.current = selectedPackages;
      setPackagesSelection(selectedPackages);

      setClient(clientResult);
      setPackages(packagesResult);
    })();
  }, []);

  const onRowClick = (packageId: string) => () => {
    setPackagesSelection({
      ...initialPackagesSelection.current,
      [packageId]: !packagesSelection[packageId],
    });
  };

  const isPackageSelected = (packageId: string) => {
    return packagesSelection[packageId];
  };

  return {
    client,
    packages,
    onRowClick,
    isPackageSelected,
  };
};
