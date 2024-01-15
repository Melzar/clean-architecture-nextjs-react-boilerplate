import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from 'ui/common/components/toggles/Switch/Switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Base: Story = {
  args: {
    id: '123',
    name: 'Switch',
    children: '',
    onChange: () => {},
  },
  render: ({ children, name, id, onChange }) => (
    <Switch name={name} id={id} onChange={onChange}>
      {children}
    </Switch>
  ),
};
