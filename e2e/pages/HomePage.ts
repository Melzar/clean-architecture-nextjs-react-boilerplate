import { expect, Page } from '@playwright/test';

export const HomePage = (page: Page) => ({
  async navigateToHomePage() {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveURL('http://localhost:3000/');
  },
  async verifyHomePageLabel() {
    await expect(page.getByRole('main').getByText('Home')).toBeVisible();
  },
});
