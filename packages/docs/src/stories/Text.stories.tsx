import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maxime dicta veritatis nihil soluta dolor reiciendis aut natus, suscipit quod maiores repellat, pariatur similique aliquam. Voluptatem dolorem ad labore cumque?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Test',
    as: 'strong',
  },
}
