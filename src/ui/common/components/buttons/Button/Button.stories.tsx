import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui/common/components/buttons/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    className: '',
    children: 'Button',
    onClick: () => {},
    type: 'button',
  },
  render: ({ children, type, onClick, className }) => (
    <Button type={type} className={className} onClick={onClick}>
      {children}
    </Button>
  ),
};
