import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  features: {
    experimentalNextRSC: true,
  },
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../README.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
