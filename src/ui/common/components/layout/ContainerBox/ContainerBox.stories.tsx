import type { Meta, StoryObj } from '@storybook/react';

import { ContainerBox } from 'ui/common/components/layout/ContainerBox/ContainerBox';

const meta: Meta<typeof ContainerBox> = {
  component: ContainerBox,
};

export default meta;
type Story = StoryObj<typeof ContainerBox>;

export const Base: Story = {
  args: {
    children: <p>Container Box</p>,
  },
  render: ({ children }) => <ContainerBox>{children}</ContainerBox>,
};
