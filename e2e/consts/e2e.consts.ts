import { RoleAccounts, ScreenIdentifiers, ScreenRoutes } from './e2e.types';

export const ROLE_ACCOUNTS: RoleAccounts = {
  admin: 'admin@clean.com',
  member: 'member@clean.com',
};

export const SCREEN_IDENTIFIERS: ScreenIdentifiers = {
  login: 'loginScreen',
  dashboard: 'dashboardScreen',
  clients: 'clientsScreen',
  clientDetails: 'clientDetailsScreen',
  packages: 'packagesScreen',
};

export const SCREEN_ROUTES: ScreenRoutes = {
  clients: '/admin/clients',
  dashboard: '/admin/dashboard',
  packages: '/admin/packages',
};
