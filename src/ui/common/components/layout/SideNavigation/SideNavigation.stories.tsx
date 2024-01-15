import type { Meta, StoryObj } from '@storybook/react';

import { SideNavigation } from 'ui/common/components/layout/SideNavigation/SideNavigation';

const meta: Meta<typeof SideNavigation> = {
  component: SideNavigation,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideNavigation>;

export const Base: Story = {
  args: {},
  render: () => <SideNavigation />,
};
