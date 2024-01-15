import type { Meta, StoryObj } from '@storybook/react';

import { WidgetAttention } from 'ui/common/components/layout/Widget/WidgetAttention/WidgetAttention';

const meta: Meta<typeof WidgetAttention> = {
  component: WidgetAttention,
};

export default meta;
type Story = StoryObj<typeof WidgetAttention>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetAttention>{args.children}</WidgetAttention>,
};
