import type { Meta, StoryObj } from '@storybook/react';

import { FieldPassword } from 'ui/common/components/fields/FieldPassword/FieldPassword';

const meta: Meta<typeof FieldPassword> = {
  component: FieldPassword,
};

export default meta;
type Story = StoryObj<typeof FieldPassword>;

export const Base: Story = {
  args: {
    name: 'Field Password',
  },
  render: ({ placeholder, style, className, name, required, onChange }) => (
    <FieldPassword
      className={className}
      name={name}
      required={required}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
    />
  ),
};
