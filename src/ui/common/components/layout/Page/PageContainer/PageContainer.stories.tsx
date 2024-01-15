import type { Meta, StoryObj } from '@storybook/react';

import { PageContainer } from 'ui/common/components/layout/Page/PageContainer/PageContainer';

const meta: Meta<typeof PageContainer> = {
  component: PageContainer,
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Base: Story = {
  args: {
    children: <p>Page Container</p>,
  },
  render: ({ children }) => <PageContainer>{children}</PageContainer>,
};
