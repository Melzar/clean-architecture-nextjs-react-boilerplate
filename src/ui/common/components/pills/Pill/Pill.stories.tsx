import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from 'ui/common/components/pills/Pill/Pill';

const meta: Meta<typeof Pill> = {
  component: Pill,
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Base: Story = {
  args: {
    children: <div>Pill</div>,
  },
  render: (args) => <Pill>{args.children}</Pill>,
};
