import type { Meta, StoryObj } from '@storybook/react';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';
import CartTotal from '@/components/checkout/cart-total';

const meta = {
    title: 'Organisms/CartTotal',
    component: CartTotal,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CartTotal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisibleCartTotal: Story = {
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
            <CartTotal />
        </CartContextProviderMock>
    ),
};

export const NoCartTotal: Story = {
    args: {},
    render: () => (
        <CartContextProviderMock initialCart={[]}>
            <CartTotal />
        </CartContextProviderMock>
    ),
};
