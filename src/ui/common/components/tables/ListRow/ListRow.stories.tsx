import type { Meta, StoryObj } from '@storybook/react';

import { ListRow } from 'ui/common/components/tables/ListRow/ListRow';

const meta: Meta<typeof ListRow> = {
  component: ListRow,
};

export default meta;
type Story = StoryObj<typeof ListRow>;

export const Base: Story = {
  args: {
    children: <div>List Row</div>,
    onClick: () => {},
  },
  render: (args) => <ListRow onClick={args.onClick}>{args.children}</ListRow>,
};
