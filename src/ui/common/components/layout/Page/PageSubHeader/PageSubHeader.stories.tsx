import type { Meta, StoryObj } from '@storybook/react';

import { PageSubHeader } from 'ui/common/components/layout/Page/PageSubHeader/PageSubHeader';

const meta: Meta<typeof PageSubHeader> = {
  component: PageSubHeader,
};

export default meta;
type Story = StoryObj<typeof PageSubHeader>;

export const Base: Story = {
  args: {
    children: <p>Page Sub Header</p>,
  },
  render: ({ children }) => <PageSubHeader>{children}</PageSubHeader>,
};
