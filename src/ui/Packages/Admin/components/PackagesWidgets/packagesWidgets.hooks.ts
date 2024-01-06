import { usePackagesData } from 'ui/Packages/Admin/packages.data';
import { Package } from 'presentation/shared/Packages/models/Package';

type UsePackagesWidgetsHook = {
  packagesRequiresAttention: number;
  recentPackages: number;
  packagesInTransit: number;
  deliveredPackages: number;
};
export const usePackagesWidgets = async (): Promise<UsePackagesWidgetsHook> => {
  const { getPackages } = usePackagesData();

  const packages = await getPackages();

  const packagesRequiresAttention = packages.filter(
    (pack: Package) => pack.status === 'attention_needed'
  ).length;

  const recentPackages = packages.filter(
    (pack: Package) => pack.status === 'processing'
  );

  const packagesInTransit = packages.filter(
    (pack: Package) => pack.status === 'in_transit'
  );

  const deliveredPackages = packages.filter(
    (pack: Package) => pack.status === 'delivered'
  );

  return {
    packagesRequiresAttention,
    recentPackages: recentPackages.length,
    packagesInTransit: packagesInTransit.length,
    deliveredPackages: deliveredPackages.length,
  };
};
