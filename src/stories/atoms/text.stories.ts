import type { Meta, StoryObj } from '@storybook/react';

import TextSection  from '@/components/texts';

const meta = {
  title: 'Atoms/TextSection',
  component: TextSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    textType: 'heading',
    textContent: 'Heading',
  },
};

export const SubHeading: Story = {
  args: {
    textType: 'subHeading',
    textContent: 'Sub Heading'
   },
};

export const SectionHeading: Story = {
  args: {
    textType: 'sectionHeading',
    textContent: 'Section Heading'
  },
};

export const Description: Story = {
  args: {
    textType: 'description',
    textContent: 'Description'
  },
};

export const Paragraph: Story = {
  args: {
   textType: 'paragraph',
   textContent: 'Paragraph'
  },
};

