import type { StoryObj, Meta } from '@storybook/react';
import { Button } from '@ignite-ui/react';

export default {
  title: 'Example/Button', 
  component: Button,
} as Meta;

export const Primary: StoryObj = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: StoryObj = {

};