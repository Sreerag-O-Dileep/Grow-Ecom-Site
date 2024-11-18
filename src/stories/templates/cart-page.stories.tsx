import type { Meta, StoryObj } from '@storybook/react';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';
import CartPage from '@/components/checkout/cart';

const meta = {
    title: 'Templates/CartPage',
    component: CartPage,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CartPage>;

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
            <CartPage />
        </CartContextProviderMock>
    ),
};

export const EmptyCart: Story = {
    args: {},
    render: () => (
        <CartContextProviderMock initialCart={[]}>
            <CartPage />
        </CartContextProviderMock>
    ),
};
