import type { Meta, StoryObj } from '@storybook/react';

import { WidgetText } from 'ui/common/components/typography/WidgetText/WidgetText';

const meta: Meta<typeof WidgetText> = {
  component: WidgetText,
};

export default meta;
type Story = StoryObj<typeof WidgetText>;

export const Base: Story = {
  args: {
    children: 'Widget Text',
  },
  render: ({ children }) => <WidgetText>{children}</WidgetText>,
};
