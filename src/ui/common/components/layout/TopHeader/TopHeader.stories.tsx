import type { Meta, StoryObj } from '@storybook/react';

import { TopHeader } from './TopHeader';

const meta: Meta<typeof TopHeader> = {
  component: TopHeader,
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

export const Base: Story = {
  args: {
    children: <div>Top Header Content</div>,
  },
  render: (args) => <TopHeader>{args.children}</TopHeader>,
};
