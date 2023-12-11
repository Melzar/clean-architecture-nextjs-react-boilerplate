export const APP_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};

export const APP_ADMIN_ROUTES = {
  HOME: () => '/admin',
  DASHBOARD: () => '/admin/dashboard',
  CLIENTS: () => '/admin/clients',
  CLIENT: (clientId: string) => `/admin/clients/${clientId}`,
  PACKAGES: () => '/admin/packages',
};
