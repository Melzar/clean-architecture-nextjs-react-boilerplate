import type { Meta, StoryObj } from '@storybook/react';

import { DangerButtonSmall } from 'ui/common/components/buttons/DangerButtonSmall/DangerButtonSmall';

const meta: Meta<typeof DangerButtonSmall> = {
  component: DangerButtonSmall,
};

export default meta;
type Story = StoryObj<typeof DangerButtonSmall>;

export const Base: Story = {
  args: {
    className: '',
    children: 'Danger Button Small',
    onClick: () => {},
    type: 'button',
  },
  render: ({ children, type, onClick, className }) => (
    <DangerButtonSmall type={type} className={className} onClick={onClick}>
      {children}
    </DangerButtonSmall>
  ),
};
