import type { Meta, StoryObj } from '@storybook/react';

import { TextLogo } from 'ui/common/components/typography/TextLogo/TextLogo';

const meta: Meta<typeof TextLogo> = {
  component: TextLogo,
};

export default meta;
type Story = StoryObj<typeof TextLogo>;

export const Base: Story = {
  args: {
    children: 'Text Logo',
  },
  render: ({ children }) => <TextLogo>{children}</TextLogo>,
};
