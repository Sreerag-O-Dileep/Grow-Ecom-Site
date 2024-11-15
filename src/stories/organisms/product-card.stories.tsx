import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '@/components/products/product-card';
import CartContextProviderMock from '../utils/cart-provider-mock';

const meta = {
    title: 'Organisms/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
    args: {
        product: {
            id: 1,
            name: 'Festive Elegance Gift Basket',
            image: 'https://img.freepik.com/free-vector/flat-houseplant-collection_23-2148927488.jpg',
            rating: 4.4,
            reviews: 43,
            originalprice: 899,
            discountedprice: 499,
            discount: 44,
            description: 'Elevate your Diwali celebrations with the Festive Elegance Gift Basket, a curated blend of luxury...',
            type: 'plant',
            usagetype: 'indoor'
        }
    },
    render: (args) => (
        <CartContextProviderMock initialCart={[]}>
              <ProductCard product={args.product} />
        </CartContextProviderMock>
    ),
};
