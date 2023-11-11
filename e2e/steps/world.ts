import { IWorld, IWorldOptions, World } from '@cucumber/cucumber';
import { BrowserContext, Page } from '@playwright/test';

export interface ICustomWorld extends IWorld {
  context?: BrowserContext;
  page?: Page;
}

export class CustomWorld extends World<ICustomWorld> {
  [key: string]: unknown;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
