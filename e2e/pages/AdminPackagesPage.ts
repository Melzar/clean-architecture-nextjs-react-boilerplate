import { expect, Page } from '@playwright/test';

export const AdminPackagesPage = (page: Page) => ({
  async verifyPackagesListComponent() {
    await expect(page.getByTestId('package-row-0')).toBeVisible();
  },

  async verifyNewPackagesComponent() {
    await expect(page.getByTestId('new-packages')).toBeVisible();
    await expect(page.getByTestId('new-packages')).toContainText('1');
  },

  async verifyInDeliveryPackagesComponent() {
    await expect(page.getByTestId('in-delivery-packages')).toBeVisible();
    await expect(page.getByTestId('in-delivery-packages')).toContainText('1');
  },

  async verifyAttentionPackagesComponent() {
    await expect(page.getByTestId('attention-needed-packages')).toBeVisible();
    await expect(page.getByTestId('attention-needed-packages')).toContainText(
      '1'
    );
  },

  async verifyCompletedPackagesComponent() {
    await expect(page.getByTestId('completed-packages')).toBeVisible();
    await expect(page.getByTestId('completed-packages')).toContainText('1');
  },
});
