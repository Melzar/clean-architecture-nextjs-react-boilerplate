import { expect, Page } from '@playwright/test';

export const AdminDashboardPage = (page: Page) => ({
  async verifyRecentNewPackagesWidget() {
    await expect(page.getByTestId('new-package-0')).toBeVisible();
  },

  async verifyRecentInTransitPackagesWidget() {
    await expect(page.getByTestId('in-transit-package-0')).toBeVisible();
  },

  async verifyRecentDeliveredPackagesWidget() {
    await expect(page.getByTestId('delivered-package-0')).toBeVisible();
  },

  async verifyRecentNewPackagesNumberWidget() {
    await expect(page.getByTestId('new-packages-number')).toHaveText('1');
  },

  async verifyRecentInTransitPackagesNumberWidget() {
    await expect(page.getByTestId('in-transit-packages-number')).toHaveText(
      '1'
    );
  },

  async verifyRecentDeliveredPackagesNumberWidget() {
    await expect(page.getByTestId('delivered-packages-number')).toHaveText('1');
  },

  async verifyAttentionMessage() {
    await expect(page.getByTestId('attention-message')).toBeVisible();
    await expect(page.getByTestId('attention-message')).toContainText('1');
  },
});
