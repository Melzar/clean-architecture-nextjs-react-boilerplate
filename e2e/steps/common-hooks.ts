import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setWorldConstructor,
} from '@cucumber/cucumber';
import { chromium, ChromiumBrowser } from 'playwright-core';

import { CustomWorld } from './world';

let browser: ChromiumBrowser;

setWorldConstructor(CustomWorld);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  this.context.page?.close();
  this.context.context?.close();
});

AfterAll(async function () {
  await browser.close();
});
