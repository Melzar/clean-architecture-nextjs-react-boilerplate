import type { Meta, StoryObj } from '@storybook/react';

import { SectionHeader } from 'ui/common/components/typography/SectionHeader/SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Base: Story = {
  args: {
    children: 'Section Header',
  },
  render: ({ children }) => <SectionHeader>{children}</SectionHeader>,
};
