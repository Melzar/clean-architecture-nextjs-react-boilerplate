import type { Meta, StoryObj } from '@storybook/react';

import { PageHeading } from 'ui/common/components/layout/Page/PageHeading/PageHeading';

const meta: Meta<typeof PageHeading> = {
  component: PageHeading,
};

export default meta;
type Story = StoryObj<typeof PageHeading>;

export const Base: Story = {
  args: {
    children: 'Page Heading',
  },
  render: ({ children }) => <PageHeading>{children}</PageHeading>,
};
