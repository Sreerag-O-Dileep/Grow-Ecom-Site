import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/header';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';

const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
    args: {},
    render: () => (
      <CartContextProviderMock initialCart={[]}>
        <Header />
      </CartContextProviderMock>
    ),
};
