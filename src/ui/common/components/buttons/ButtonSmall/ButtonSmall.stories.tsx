import type { Meta, StoryObj } from '@storybook/react';

import { ButtonSmall } from 'ui/common/components/buttons/ButtonSmall/ButtonSmall';

const meta: Meta<typeof ButtonSmall> = {
  component: ButtonSmall,
};

export default meta;
type Story = StoryObj<typeof ButtonSmall>;

export const Base: Story = {
  args: {
    className: '',
    children: 'Button Small',
    onClick: () => {},
    type: 'button',
  },
  render: ({ children, type, onClick, className }) => (
    <ButtonSmall type={type} className={className} onClick={onClick}>
      {children}
    </ButtonSmall>
  ),
};
