import { expect, Page } from '@playwright/test';

import {
  getAccountForRole,
  getScreenRoute,
  verifyScreen,
} from '../consts/e2e.helpers';

export const BasePage = (page: Page) => ({
  async authenticateAsRole(role: string) {
    await page.goto('http://localhost:3000/login');
    await expect(page).toHaveURL('http://localhost:3000/login');
    await page.getByTestId('login').fill(getAccountForRole(role));
    await page.getByTestId('password').fill('123');
    await page.getByTestId('signIn').click();
    await expect(page.getByTestId('user-role')).toContainText('admin');
  },

  async goToScreen(screen: string) {
    await page.goto(`http://localhost:3000${getScreenRoute(screen)}`);
    await expect(page).toHaveURL(
      `http://localhost:3000${getScreenRoute(screen)}`
    );
  },

  async verifyScreen(screen: string) {
    await expect(page.getByTestId(verifyScreen(screen))).toBeVisible();
  },
});
