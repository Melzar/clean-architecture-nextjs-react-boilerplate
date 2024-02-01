import { ROLE_ACCOUNTS, SCREEN_IDENTIFIERS, SCREEN_ROUTES } from './e2e.consts';
import { RoleAccounts, ScreenIdentifiers, ScreenRoutes } from './e2e.types';

export const getAccountForRole = (role: string) => {
  if (Object.hasOwn(ROLE_ACCOUNTS, role)) {
    return ROLE_ACCOUNTS[role as keyof RoleAccounts];
  }
  throw Error('Incorrect Role');
};

export const verifyScreen = (screen: string) => {
  if (Object.hasOwn(SCREEN_IDENTIFIERS, screen)) {
    return SCREEN_IDENTIFIERS[screen as keyof ScreenIdentifiers];
  }
  throw Error('Incorrect Screen');
};

export const getScreenRoute = (screen: string) => {
  if (Object.hasOwn(SCREEN_ROUTES, screen)) {
    return SCREEN_ROUTES[screen as keyof ScreenRoutes];
  }
  throw Error('Incorrect Route');
};
