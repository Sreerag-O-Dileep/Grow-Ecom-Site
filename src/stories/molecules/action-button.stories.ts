import type { Meta, StoryObj } from '@storybook/react';
import ActionButtons from "@/components/action-buttons";

const meta = {
  title: 'Molecules/ActionButton',
  component: ActionButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ActionButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryAndSecondary: Story = {
  args: {
    button1: { buttonType: 'secondary', label: 'Secondary' },
    button2: { buttonType: 'primary', label: 'Primary' },
  },
};

export const PrimaryAndNegative: Story = {
    args: {
      button1: { buttonType: 'negative', label: 'Negative' },
      button2: { buttonType: 'primary', label: 'Primary' },
    },
  };
