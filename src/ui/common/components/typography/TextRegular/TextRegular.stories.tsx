import type { Meta, StoryObj } from '@storybook/react';

import { TextRegular } from 'ui/common/components/typography/TextRegular/TextRegular';

const meta: Meta<typeof TextRegular> = {
  component: TextRegular,
};

export default meta;
type Story = StoryObj<typeof TextRegular>;

export const Base: Story = {
  args: {
    children: 'Text Regular',
  },
  render: ({ children }) => <TextRegular>{children}</TextRegular>,
};
