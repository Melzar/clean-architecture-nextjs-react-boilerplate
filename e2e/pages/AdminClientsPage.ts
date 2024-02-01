import { expect, Page } from '@playwright/test';

export const AdminClientsPage = (page: Page) => ({
  async verifyClientListComponent() {
    await expect(page.getByTestId('client-row-0')).toBeVisible();
  },

  async clickOnClientRow() {
    await expect(page.getByTestId('client-row-0')).toBeVisible();
    await page.getByTestId('client-row-0').click();
  },
});
