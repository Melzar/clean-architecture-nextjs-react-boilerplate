import type { Meta, StoryObj } from '@storybook/react';

import { WidgetSubHeader } from 'ui/common/components/typography/WidgetSubHeader/WidgetSubHeader';

const meta: Meta<typeof WidgetSubHeader> = {
  component: WidgetSubHeader,
};

export default meta;
type Story = StoryObj<typeof WidgetSubHeader>;

export const Base: Story = {
  args: {
    children: 'Widget SubHeader',
  },
  render: ({ children }) => <WidgetSubHeader>{children}</WidgetSubHeader>,
};
