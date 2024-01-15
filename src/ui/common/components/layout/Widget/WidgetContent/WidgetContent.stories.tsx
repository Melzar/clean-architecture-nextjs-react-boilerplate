import type { Meta, StoryObj } from '@storybook/react';

import { WidgetContent } from 'ui/common/components/layout/Widget/WidgetContent/WidgetContent';

const meta: Meta<typeof WidgetContent> = {
  component: WidgetContent,
};

export default meta;
type Story = StoryObj<typeof WidgetContent>;

export const Base: Story = {
  args: {
    children: 'Widget Content',
  },
  render: ({ children }) => <WidgetContent>{children}</WidgetContent>,
};
