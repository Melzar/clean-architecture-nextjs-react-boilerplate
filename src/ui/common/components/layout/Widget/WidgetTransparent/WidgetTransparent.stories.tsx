import type { Meta, StoryObj } from '@storybook/react';

import { WidgetTransparent } from 'ui/common/components/layout/Widget/WidgetTransparent/WidgetTransparent';

const meta: Meta<typeof WidgetTransparent> = {
  component: WidgetTransparent,
};

export default meta;
type Story = StoryObj<typeof WidgetTransparent>;

export const Base: Story = {
  args: {
    children: <div>Widget</div>,
  },
  render: (args) => <WidgetTransparent>{args.children}</WidgetTransparent>,
};
