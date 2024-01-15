import type { Meta, StoryObj } from '@storybook/react';

import { WidgetHeader } from 'ui/common/components/typography/WidgetHeader/WidgetHeader';

const meta: Meta<typeof WidgetHeader> = {
  component: WidgetHeader,
};

export default meta;
type Story = StoryObj<typeof WidgetHeader>;

export const Base: Story = {
  args: {
    children: 'Widget Header',
  },
  render: ({ children }) => <WidgetHeader>{children}</WidgetHeader>,
};
