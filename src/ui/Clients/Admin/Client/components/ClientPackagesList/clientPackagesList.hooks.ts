import { useEffect, useRef, useState } from 'react';

import { useParams } from 'next/navigation';

import { Package } from 'presentation/shared/Packages/models/Package';
import { useClientData } from 'ui/Clients/Admin/Client/client.data';

type UseClientPackagesList = {
  packages: Package[];
  onRowClick: (packageId: string) => () => void;
  isPackageSelected: (packageId: string) => boolean;
};
export const useClientPackagesList = (): UseClientPackagesList => {
  const initialPackagesSelection = useRef<Record<string, boolean>>({});
  const [packages, setPackages] = useState<Package[]>([]);
  const [packagesSelection, setPackagesSelection] = useState<
    Record<string, boolean>
  >({});

  const { getClientPackages } = useClientData();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const packagesResult = await getClientPackages(id as string);

      const selectedPackages: Record<string, boolean> = {};

      packagesResult.forEach((pack) => {
        selectedPackages[pack.id] = false;
      });

      initialPackagesSelection.current = selectedPackages;
      setPackagesSelection(selectedPackages);

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
    packages,
    onRowClick,
    isPackageSelected,
  };
};
