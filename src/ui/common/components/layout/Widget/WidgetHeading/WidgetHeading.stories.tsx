import type { Meta, StoryObj } from '@storybook/react';

import { WidgetHeading } from 'ui/common/components/layout/Widget/WidgetHeading/WidgetHeading';

const meta: Meta<typeof WidgetHeading> = {
  component: WidgetHeading,
};

export default meta;
type Story = StoryObj<typeof WidgetHeading>;

export const Base: Story = {
  args: {
    children: 'Widget Heading',
  },
  render: ({ children }) => <WidgetHeading>{children}</WidgetHeading>,
};
