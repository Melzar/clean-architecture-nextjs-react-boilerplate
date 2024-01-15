import type { Meta, StoryObj } from '@storybook/react';

import { PageHeader } from 'ui/common/components/layout/Page/PageHeader/PageHeader';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Base: Story = {
  args: {
    children: <p>Page Header</p>,
  },
  render: ({ children }) => <PageHeader>{children}</PageHeader>,
};
