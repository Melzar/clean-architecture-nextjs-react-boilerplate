import type { Meta, StoryObj } from '@storybook/react';

import { WidgetDelivery } from 'ui/common/components/layout/Widget/WidgetDelivery/WidgetDelivery';

const meta: Meta<typeof WidgetDelivery> = {
  component: WidgetDelivery,
};

export default meta;
type Story = StoryObj<typeof WidgetDelivery>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetDelivery>{args.children}</WidgetDelivery>,
};
