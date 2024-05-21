import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButttonProps } from '@ignite-ui/react'

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButttonProps>

export const Primary: StoryObj<ButttonProps> = {}

export const Big: StoryObj<ButttonProps> = {
  args: {
    size: 'small',
  },
}
