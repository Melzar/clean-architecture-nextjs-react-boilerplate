import type { Meta, StoryObj } from '@storybook/react';

import { DangerButton } from 'ui/common/components/buttons/DangerButton/DangerButton';

const meta: Meta<typeof DangerButton> = {
  component: DangerButton,
};

export default meta;
type Story = StoryObj<typeof DangerButton>;

export const Base: Story = {
  args: {
    className: '',
    children: 'Danger Button',
    onClick: () => {},
    type: 'button',
  },
  render: ({ children, type, onClick, className }) => (
    <DangerButton type={type} className={className} onClick={onClick}>
      {children}
    </DangerButton>
  ),
};
