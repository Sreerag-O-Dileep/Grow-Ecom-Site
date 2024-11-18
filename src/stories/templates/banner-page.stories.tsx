import type { Meta, StoryObj } from '@storybook/react';
import Banner from '@/components/landing/banner';

const meta = {
  title: 'Templates/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
    backgrounds: {
        default: 'dark',
      },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultBanner: Story = {
  args: {}
};





