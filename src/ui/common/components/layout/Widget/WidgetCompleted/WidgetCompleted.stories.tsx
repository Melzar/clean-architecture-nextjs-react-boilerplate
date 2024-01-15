import type { Meta, StoryObj } from '@storybook/react';

import { WidgetCompleted } from 'ui/common/components/layout/Widget/WidgetCompleted/widgetCompleted';

const meta: Meta<typeof WidgetCompleted> = {
  component: WidgetCompleted,
};

export default meta;
type Story = StoryObj<typeof WidgetCompleted>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetCompleted>{args.children}</WidgetCompleted>,
};
