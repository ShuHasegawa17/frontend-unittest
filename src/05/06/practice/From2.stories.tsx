import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { deliveryAddresses } from '../fixtures';
import { Form2 } from './Form2';

export default {
  component: Form2,
} as ComponentMeta<typeof Form2>;

type Story = ComponentStoryObj<typeof Form2>;

export const NoDeliveryAddresses: Story = {
  storyName: '過去お届け先がない',
  args: { deliveryAddresses: [] },
};

export const HasDeliveryAddresses: Story = {
  storyName: '過去お届け先がある',
  args: { deliveryAddresses },
};
