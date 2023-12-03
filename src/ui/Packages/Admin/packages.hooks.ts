'use client';

import { useEffect, useState } from 'react';

import { usePackagesData } from 'ui/Packages/Admin/packages.data';
import { Package } from 'presentation/shared/Packages/models/Package';

type UsePackagesHook = {
  packages: Package[];
};

export const usePackages = (): UsePackagesHook => {
  const [packages, setPackages] = useState<Package[]>([]);

  const { getPackages } = usePackagesData();

  useEffect(() => {
    (async () => {
      const result = await getPackages();

      setPackages(result);
    })();
  }, []);

  return {
    packages,
  };
};
