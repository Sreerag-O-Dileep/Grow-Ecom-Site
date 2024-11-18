import type { Meta, StoryObj } from '@storybook/react';
import Search from '@/components/search';

const meta = {
  title: 'Organisms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSearch: Story = {
  args: { placeholder: 'Plants' }
};





