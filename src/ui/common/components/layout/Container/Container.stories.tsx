import type { Meta, StoryObj } from '@storybook/react';

import { Container } from 'ui/common/components/layout/Container/Container';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
  args: {
    children: <p>Container</p>,
  },
  render: ({ children }) => <Container>{children}</Container>,
};
