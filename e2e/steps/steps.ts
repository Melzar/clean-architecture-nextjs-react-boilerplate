/* eslint-disable func-names */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Given, Then, When } from '@cucumber/cucumber';

import { BasePage } from '../pages/BasePage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminClientsPage } from '../pages/AdminClientsPage';
import { AdminClientDetailsPage } from '../pages/AdminClientDetailsPage';
import { AdminPackagesPage } from '../pages/AdminPackagesPage';

// Generic Steps

Given("I'm {string}", async function (role: string) {
  await BasePage(this.page).authenticateAsRole(role);
});
Given('I see {string}', async function (screen: string) {
  await BasePage(this.page).goToScreen(screen);
  await BasePage(this.page).verifyScreen(screen);
});

Given('I see recent new packages', async function () {
  await AdminDashboardPage(this.page).verifyRecentNewPackagesWidget();
});
Given('I see recent packages in transit', async function () {
  await AdminDashboardPage(this.page).verifyRecentInTransitPackagesWidget();
});
Given('I see recent packages delivered', async function () {
  await AdminDashboardPage(this.page).verifyRecentDeliveredPackagesWidget();
});
Given('I see number of recent new packages', async function () {
  await AdminDashboardPage(this.page).verifyRecentNewPackagesNumberWidget();
});
Given('I see number of recent packages in transit', async function () {
  await AdminDashboardPage(
    this.page
  ).verifyRecentInTransitPackagesNumberWidget();
});
Given('I see number of recent packages delivered', async function () {
  await AdminDashboardPage(
    this.page
  ).verifyRecentDeliveredPackagesNumberWidget();
});
Given(
  'I see message with number of packages requires attention',
  async function () {
    await AdminDashboardPage(this.page).verifyAttentionMessage();
  }
);
Given('I see client list', async function () {
  await AdminClientsPage(this.page).verifyClientListComponent();
});

When('I click on client row', async function () {
  await AdminClientsPage(this.page).clickOnClientRow();
});
Then('I see client packages', async function () {
  await AdminClientDetailsPage(this.page).verifyClientPackagesComponent();
});
Given('I see client new today packages', async function () {
  await AdminClientDetailsPage(this.page).verifyClientNewPackagesComponent();
});
Given('I see client in delivery packages', async function () {
  await AdminClientDetailsPage(
    this.page
  ).verifyClientInDeliveryPackagesComponent();
});
Given('I see client attention needed packages', async function () {
  await AdminClientDetailsPage(
    this.page
  ).verifyClientAttentionPackagesComponent();
});
Given('I see client completed today packages', async function () {
  await AdminClientDetailsPage(
    this.page
  ).verifyClientCompletedPackagesComponent();
});
Given('I see client details', async function () {
  await BasePage(this.page).goToScreen('clients');
  await AdminClientsPage(this.page).clickOnClientRow();
  await BasePage(this.page).verifyScreen('clientDetails');
});
Given('I see packages list', async function () {
  await AdminPackagesPage(this.page).verifyPackagesListComponent();
});
Given('I see new today packages', async function () {
  await AdminPackagesPage(this.page).verifyNewPackagesComponent();
});
Given('I see in delivery packages', async function () {
  await AdminPackagesPage(this.page).verifyInDeliveryPackagesComponent();
});
Given('I see attention needed packages', async function () {
  await AdminPackagesPage(this.page).verifyAttentionPackagesComponent();
});
Given('I see completed today packages', async function () {
  await AdminPackagesPage(this.page).verifyCompletedPackagesComponent();
});
