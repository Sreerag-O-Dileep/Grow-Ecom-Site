import type { Meta, StoryObj } from '@storybook/react';
import CartContextProviderMock from '@/stories/utils/cart-provider-mock';
import Navbar from '@/components/navbar';

const meta = {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultNavbar: Story = {
    args: {},
    render: () => (
      <CartContextProviderMock initialCart={[]}>
        <Navbar />
      </CartContextProviderMock>
    ),
};
