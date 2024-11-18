import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button  from '@/components/button';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

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
    icon: <AdjustmentsHorizontalIcon className="h-6 w-6 text-black" />,  
  },
};

export const PrimarySlim: Story = {
  args: {
    type: 'primary',
    label: 'Primary slim',
    slim: true,
  },
};

