import { useEffect, useMemo, useState } from 'react';

import { useDashboardData } from 'ui/Dashboard/Admin/dashboard.data';
import { Package } from 'presentation/shared/Packages/models/Package';

type UseDashboard = {
  packagesRequiresAttention: number;
  deliveredPackages: Package[];
  recentPackages: Package[];
  packagesInTransit: Package[];
};
export const useDashboard = (): UseDashboard => {
  const [packages, setPackages] = useState<Package[]>([]);

  const { getRecentPackages } = useDashboardData();

  useEffect(() => {
    (async () => {
      const recentPackagesResult = await getRecentPackages();

      setPackages(recentPackagesResult);
    })();
  }, []);

  const packagesRequiresAttention = useMemo(() => {
    return packages.filter(
      (pack: Package) => pack.status === 'attention_needed'
    ).length;
  }, [packages]);

  const recentPackages = useMemo(() => {
    return packages.filter((pack: Package) => pack.status === 'processing');
  }, [packages]);

  const packagesInTransit = useMemo(() => {
    return packages.filter((pack: Package) => pack.status === 'in_transit');
  }, [packages]);

  const deliveredPackages = useMemo(() => {
    return packages.filter((pack: Package) => pack.status === 'delivered');
  }, [packages]);

  return {
    packagesRequiresAttention,
    recentPackages,
    deliveredPackages,
    packagesInTransit,
  };
};
