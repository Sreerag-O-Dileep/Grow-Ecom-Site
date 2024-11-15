import { Meta, StoryObj } from '@storybook/react';
import CartIcon from '@/components/cart-icon';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';


const meta = {
  title: 'Molecules/CartIcon',
  component: CartIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyCart: Story = {
  args: {},
  render: () => (
    <CartContextProviderMock initialCart={[]}>
      <CartIcon />
    </CartContextProviderMock>
  ),
};

export const WithItems: Story = {
  args: {},
  render: () => (
    <CartContextProviderMock
      initialCart={[
        {
          id: 1,
          name: "Rustic Terracotta Pot",
          discountedprice: 199,
          image: "https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148911656.jpg",
          usagetype: "outdoor",
          type: "pot",
          quantity: 2,
        },
      ]}
    >
      <CartIcon />
    </CartContextProviderMock>
  ),
};


