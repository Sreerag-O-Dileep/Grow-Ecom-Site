import type { Meta, StoryObj } from '@storybook/react';
import PriceText from '@/components/price-text';

const meta = {
  title: 'Molecules/PriceText',
  component: PriceText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PriceWithDiscount: Story = {
    args: {
      originalPrice: 500,
      discountedPrice: 450,
      discount: 5,
    },
  };

export const PriceWithNoDiscount: Story = {
  args: {
    originalPrice: 499,
    discountedPrice: 499,
    discount: 0,
  },
};



