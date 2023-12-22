'use client';

import { useEffect, useRef, useState } from 'react';

import { usePackagesData } from 'ui/Packages/Admin/packages.data';
import { Package } from 'presentation/shared/Packages/models/Package';

type UsePackagesHook = {
  packages: Package[];
  onRowClick: (packageId: string) => () => void;
  isPackageSelected: (packageId: string) => boolean;
};

export const usePackages = (): UsePackagesHook => {
  const initialPackagesSelection = useRef<Record<string, boolean>>({});
  const [packages, setPackages] = useState<Package[]>([]);
  const [packagesSelection, setPackagesSelection] = useState<
    Record<string, boolean>
  >({});

  const { getPackages } = usePackagesData();

  useEffect(() => {
    (async () => {
      const result = await getPackages();

      const selectedPackages: Record<string, boolean> = {};

      result.forEach((pack) => {
        selectedPackages[pack.id] = false;
      });

      initialPackagesSelection.current = selectedPackages;
      setPackagesSelection(selectedPackages);

      setPackages(result);
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
