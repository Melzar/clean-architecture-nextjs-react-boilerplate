import type { Meta, StoryObj } from '@storybook/react';

import { WidgetNew } from 'ui/common/components/layout/Widget/WidgetNew/WidgetNew';

const meta: Meta<typeof WidgetNew> = {
  component: WidgetNew,
};

export default meta;
type Story = StoryObj<typeof WidgetNew>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetNew>{args.children}</WidgetNew>,
};
