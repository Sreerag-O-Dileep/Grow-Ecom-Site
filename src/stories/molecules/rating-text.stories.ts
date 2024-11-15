import type { Meta, StoryObj } from '@storybook/react';
import RatingText from '@/components/rating-text';

const meta = {
  title: 'Molecules/RatingText',
  component: RatingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RatingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RatingGreaterThan4: Story = {
  args: {
    rating : 4.1, 
    reviews:20
  },
};
export const RatingInRange2To4: Story = {
    args: {
      rating : 3.3, 
      reviews:20
    },
  };
  export const RatingLessThan2: Story = {
    args: {
      rating : 1.2, 
      reviews:20
    },
  };

