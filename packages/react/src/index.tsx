import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '$4 $8',
      },
      big: {
        fontSize: 8,
        padding: '$9 $18',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButttonProps = ComponentProps<typeof Button>
