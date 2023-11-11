// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { When, Then } from '@cucumber/cucumber';

import { HomePage } from '../pages/HomePage';

When("I'm on Home screen", async function () {
  await HomePage(this.page).navigateToHomePage();
});
Then('I should see Home text', async function () {
  await HomePage(this.page).verifyHomePageLabel();
});
