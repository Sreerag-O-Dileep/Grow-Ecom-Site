import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from '@/components/filter';

const meta = {
  title: 'Organisms/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFilter: Story = {

  };





