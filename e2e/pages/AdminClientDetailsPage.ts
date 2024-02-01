import { expect, Page } from '@playwright/test';

import { verifyScreen } from '../consts/e2e.helpers';

export const AdminClientDetailsPage = (page: Page) => ({
  async verifyClientDetailsScreen() {
    await expect(page.getByTestId(verifyScreen('clientDetails'))).toBeVisible();
  },

  async verifyClientPackagesComponent() {
    await expect(page.getByTestId('client-package-row-0')).toBeVisible();
  },

  async verifyClientNewPackagesComponent() {
    await expect(page.getByTestId('client-new-packages')).toBeVisible();
    await expect(page.getByTestId('client-new-packages')).toContainText('1');
  },

  async verifyClientInDeliveryPackagesComponent() {
    await expect(page.getByTestId('client-in-delivery-packages')).toBeVisible();
    await expect(page.getByTestId('client-in-delivery-packages')).toContainText(
      '1'
    );
  },

  async verifyClientAttentionPackagesComponent() {
    await expect(
      page.getByTestId('client-attention-needed-packages')
    ).toBeVisible();
    await expect(
      page.getByTestId('client-attention-needed-packages')
    ).toContainText('1');
  },

  async verifyClientCompletedPackagesComponent() {
    await expect(page.getByTestId('client-completed-packages')).toBeVisible();
    await expect(page.getByTestId('client-completed-packages')).toContainText(
      '1'
    );
  },
});
