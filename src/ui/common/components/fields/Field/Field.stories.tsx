import type { Meta, StoryObj } from '@storybook/react';

import { Field } from 'ui/common/components/fields/Field/Field';

const meta: Meta<typeof Field> = {
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Base: Story = {
  args: {
    name: 'Field',
  },
  render: ({
    type,
    placeholder,
    style,
    className,
    name,
    required,
    value,
    onChange,
  }) => (
    <Field
      type={type}
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
