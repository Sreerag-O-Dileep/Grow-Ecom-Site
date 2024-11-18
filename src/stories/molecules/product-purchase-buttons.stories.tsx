import type { Meta, StoryObj } from '@storybook/react';
import CartContextProviderMock from '../utils/cart-provider-mock';
import ProductPurchaseButtons from '@/components/products/product-purchase-buttons';

const meta = {
    title: 'Molecules/ProductPurchaseButtons',
    component: ProductPurchaseButtons,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProductPurchaseButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
    args: {
        productData: {
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
              <ProductPurchaseButtons productData={args.productData} />
        </CartContextProviderMock>
    ),
};
