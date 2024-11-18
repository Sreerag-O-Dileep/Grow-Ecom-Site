import type { Meta, StoryObj } from '@storybook/react';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';
import CartItem from '@/components/checkout/cart-item';

const meta = {
    title: 'Organisms/CartItem',
    component: CartItem,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CartWithItems: Story = {
    args: {},
    render: () => (
        <CartContextProviderMock initialCart={[
            {
                id: 1,
                name: "Rustic Terracotta Pot",
                discountedprice: 199,
                image: "https://img.freepik.com/free-vector/hand-drawn-houseplant-collection_23-2148911656.jpg",
                usagetype: "outdoor",
                type: "pot",
                quantity: 2,
            },
        ]}>
            <CartItem />
        </CartContextProviderMock>
    ),
};

export const EmptyCart: Story = {
    args: {},
    render: () => (
        <CartContextProviderMock initialCart={[]}>
            <CartItem />
        </CartContextProviderMock>
    ),
};
