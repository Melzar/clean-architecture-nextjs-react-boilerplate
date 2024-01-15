import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from 'ui/common/components/buttons/PrimaryButton/PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Base: Story = {
  args: {
    className: '',
    children: 'Primary Button',
    onClick: () => {},
    type: 'button',
  },
  render: ({ children, type, onClick, className }) => (
    <PrimaryButton type={type} className={className} onClick={onClick}>
      {children}
    </PrimaryButton>
  ),
};
