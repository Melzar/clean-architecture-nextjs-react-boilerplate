import { fetchPackages } from 'ui/shared/Packages/Admin/packages.actions';
import { Package } from 'presentation/shared/Packages/models/Package';

type UseDashboardData = {
  getRecentPackages: () => Promise<Package[]>;
};

export const useDashboardData = (): UseDashboardData => {
  const getRecentPackages = async () => {
    return fetchPackages();
  };

  return {
    getRecentPackages,
  };
};
