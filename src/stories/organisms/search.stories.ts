import { Meta, StoryObj } from '@storybook/react';
import Search from '@/components/search';

const meta: Meta<typeof Search> = {
  title: 'Organisms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PriceWithNoDiscount: Story = {
    args: {
      placeholder: 'Product'
    },
  };
  
