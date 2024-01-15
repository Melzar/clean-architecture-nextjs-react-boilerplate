import type { Meta, StoryObj } from '@storybook/react';

import { FieldEmail } from 'ui/common/components/fields/FieldEmail/FieldEmail';

const meta: Meta<typeof FieldEmail> = {
  component: FieldEmail,
};

export default meta;
type Story = StoryObj<typeof FieldEmail>;

export const Base: Story = {
  args: {
    name: 'Field Email',
  },
  render: ({
    placeholder,
    style,
    className,
    name,
    required,
    value,
    onChange,
  }) => (
    <FieldEmail
      className={className}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
    />
  ),
};
