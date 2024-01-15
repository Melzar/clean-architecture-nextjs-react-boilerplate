import type { Meta, StoryObj } from '@storybook/react';

import { WidgetNeutral } from 'ui/common/components/layout/Widget/WidgetNeutral/WidgetNeutral';

const meta: Meta<typeof WidgetNeutral> = {
  component: WidgetNeutral,
};

export default meta;
type Story = StoryObj<typeof WidgetNeutral>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetNeutral>{args.children}</WidgetNeutral>,
};
