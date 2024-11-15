import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button  from '@/components/button';
import { filterIcon } from '@/public/icons';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Secondary',
   },
};

export const Negative: Story = {
  args: {
    type: 'negative',
    label: 'Negative',
  },
};

export const IconOnly: Story = {
  args: {
    type: 'icon-only',
    icon: filterIcon
  },
};

export const PrimarySlim: Story = {
  args: {
    type: 'primary',
    label: 'Primary slim',
    slim: true,
  },
};

