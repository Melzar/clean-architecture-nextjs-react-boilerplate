import type { Meta, StoryObj } from '@storybook/react';

import { ContainerHeader } from 'ui/common/components/typography/ContainerHeader/ContainerHeader';

const meta: Meta<typeof ContainerHeader> = {
  component: ContainerHeader,
};

export default meta;
type Story = StoryObj<typeof ContainerHeader>;

export const Base: Story = {
  args: {
    children: 'Container Header',
  },
  render: ({ children }) => <ContainerHeader>{children}</ContainerHeader>,
};
