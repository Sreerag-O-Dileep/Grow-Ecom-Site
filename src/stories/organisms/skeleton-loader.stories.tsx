import type { Meta, StoryObj } from '@storybook/react';
import ProductCardLoader from '@/components/skeleton-loader';

const meta = {
  title: 'Organisms/ProductCardLoader',
  component: ProductCardLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCardLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCardLoader: Story = {
    args: {},
    render: () => (
        <ProductCardLoader />
    ),
};
