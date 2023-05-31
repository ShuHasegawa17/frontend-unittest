import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { items } from '../fixture';
import { ArticleList2 } from './ArticleList2';

export default {
  component: ArticleList2,
} as ComponentMeta<typeof ArticleList2>;

type Story = ComponentStoryObj<typeof ArticleList2>;

export const Default: Story = {
  args: { items },
};

export const NoItem: Story = {
  args: { items: [] },
};
