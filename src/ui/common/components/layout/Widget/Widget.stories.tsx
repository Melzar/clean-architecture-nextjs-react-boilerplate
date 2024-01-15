import type { Meta, StoryObj } from '@storybook/react';

import { Widget } from 'ui/common/components/layout/Widget/Widget';

const meta: Meta<typeof Widget> = {
  component: Widget,
};

export default meta;
type Story = StoryObj<typeof Widget>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <Widget>{args.children}</Widget>,
};
